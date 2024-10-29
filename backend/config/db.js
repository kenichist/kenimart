import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve() + '/.env' });

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 code means exits with failure, 0 is success
    }
};