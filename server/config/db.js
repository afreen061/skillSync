import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const connectDb=async()=>{
const MONGO_URI= process.env.MONGO_URI;
try{
await mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
  useUnifiedTopology: true
});
 console.log("MongoDB connected")}
catch
{((err) => console.error("Connection error:", err));
     process.exit(1);
}

}
export default connectDb;