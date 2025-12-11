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
  // GET - Fetch all approved reviews (public)
  if (req.method === 'GET') {
    try {
      const { adminPassword } = req.query;
      const isAdmin = adminPassword === (process.env.ADMIN_PASSWORD || 'mazharchutiya123');

      const { db } = await connectToDatabase();

      if (isAdmin) {
        // Admin can see both approved and pending
        const [approved, pending] = await Promise.all([
          db.collection('reviews')
            .find({ status: 'approved' })
            .sort({ createdAt: -1 })
            .toArray(),
          db.collection('reviews')
            .find({ status: 'pending' })
            .sort({ submittedAt: -1 })
            .toArray(),
        ]);

        return res.status(200).json({
          success: true,
          approved: approved.map(r => ({
            id: r._id?.toString() || r._id,
            name: r.name,
            email: r.email,
            role: r.role,
            avatar: r.avatar,
            rating: r.rating,
            review: r.review,
            status: r.status,
            createdAt: r.createdAt,
          })),
          pending: pending.map(r => ({
            id: r._id?.toString() || r._id,
            name: r.name,
            email: r.email,
            role: r.role,
            avatar: r.avatar,
            rating: r.rating,
            review: r.review,
            status: r.status,
            submittedAt: r.submittedAt,
          })),
        });
      } else {
        // Public can only see approved reviews
        const approved = await db.collection('reviews')
          .find({ status: 'approved' })
          .sort({ createdAt: -1 })
          .toArray();

        return res.status(200).json({
          success: true,
          approved: approved.map(r => ({
            id: r._id?.toString() || r._id,
            name: r.name,
            email: r.email,
            role: r.role,
            avatar: r.avatar,
            rating: r.rating,
            review: r.review,
            status: r.status,
            createdAt: r.createdAt,
          })),
          pending: [],
        });
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // DELETE - Delete a review (admin only)
  if (req.method === 'DELETE') {
    try {
      const { reviewId, adminPassword } = req.body;

      if (!reviewId) {
        return res.status(400).json({ error: 'Review ID is required' });
      }

      const correctPassword = process.env.ADMIN_PASSWORD || 'mazharchutiya123';
      if (adminPassword !== correctPassword) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { db } = await connectToDatabase();
      const { ObjectId } = await import('mongodb');

      let objectId;
      try {
        objectId = new ObjectId(reviewId);
      } catch (error) {
        return res.status(400).json({ error: 'Invalid review ID format' });
      }

      const result = await db.collection('reviews').deleteOne({
        _id: objectId,
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Review not found' });
      }

      return res.status(200).json({
        success: true,
        message: 'Review deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting review:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

