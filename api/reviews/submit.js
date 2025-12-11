import { MongoClient } from 'mongodb';

// MongoDB connection
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGODB_URI or MONGO_URI environment variable is not set');
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  const db = client.db(process.env.MONGODB_DB_NAME || 'portfolio');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, role, avatar, rating, review } = req.body;

    // Validation
    if (!name || !review) {
      return res.status(400).json({ error: 'Name and review are required' });
    }

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Create review document
    const reviewDoc = {
      name,
      email,
      role: role || 'Client',
      avatar: avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      rating: parseInt(rating),
      review,
      status: 'pending',
      submittedAt: new Date(),
      createdAt: new Date(),
    };

    // Insert into database
    const result = await db.collection('reviews').insertOne(reviewDoc);

    // Send email notification (using Formsubmit)
    try {
      const emailMessage = `New Review Submission

Name: ${name}
Email: ${email}
Role: ${role || 'Not provided'}
Rating: ${rating}/5

Review:
${review}

---
To approve this review, use the API endpoint: PUT /api/reviews/approve with review ID: ${result.insertedId}`;

      await fetch('https://formsubmit.co/dexadoors@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `New Review Submission from ${name}`,
          _template: 'box',
          message: emailMessage,
          _captcha: 'false',
        }),
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    return res.status(201).json({
      success: true,
      message: 'Review submitted successfully and is pending approval',
      reviewId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error('Error submitting review:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message || 'An unexpected error occurred',
    });
  }
}