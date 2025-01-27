import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DBURL = process.env.DB_URL;

if (!DBURL) {
  console.error('DB_URL is not defined in environment variables');
  process.exit(1); // Exit the process if DB_URL is not defined
}

const connectDB = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
