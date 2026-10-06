import mongoose from 'mongoose'
import 'dotenv/config';

const Mongo_URL = process.env.MONGO_URI;


const connectDb =async ()=>{
    try {
        await mongoose.connect(Mongo_URL)
        console.log("Mongo_URL Database Connected successfully....")
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error;
    }
}

export default connectDb

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("MongoDB connected");
//     })
//     .catch((error) => {
//         console.log("MongoDB error:", error);
//     });