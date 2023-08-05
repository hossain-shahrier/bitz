import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) {
    throw new Error('Missing MONGO_URI env variable');
  }
  if (isConnected) {
    console.log('=> using existing database connection');
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log('Connected to database');
  } catch (error) {
    console.log('=> error connecting to database:', error);
    throw error;
  }
};
