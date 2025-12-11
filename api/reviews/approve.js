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

  const client = new MongoClient(uri);

  await client.connect();
  const db = client.db(process.env.MONGODB_DB_NAME || 'portfolio');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req, res) {
  // Only allow PUT requests
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { reviewId, adminPassword } = req.body;

    // Validation
    if (!reviewId) {
      return res.status(400).json({ error: 'Review ID is required' });
    }

    // Simple admin password check (you can enhance this with JWT later)
    const correctPassword = process.env.ADMIN_PASSWORD || 'mazharchutiya123';
    if (adminPassword !== correctPassword) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const { ObjectId } = await import('mongodb');

    // Validate and convert reviewId to ObjectId
    let objectId;
    try {
      objectId = new ObjectId(reviewId);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid review ID format' });
    }

    // Find and update the review
    const result = await db.collection('reviews').updateOne(
      { _id: objectId },
      {
        $set: {
          status: 'approved',
          approvedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Review approved successfully',
    });
  } catch (error) {
    console.error('Error approving review:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

