import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()
const app = express();
const MONGO_URI= process.env.MONGO_URI;
app.use(cors());
app.use(express.json())
const user=[]
app.get('/',(req,res)=>{
    res.send(user)
})
console.log("MONGO_URL is:", MONGO_URI);

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ Connection error:", err));
app.post('/add',(req,res)=>{
    const {name,email} = req.body;
user.push({name,email})
    res.status(200).json("data",name,email)
})
const PORT = process.env.PORT || 500
app.listen(PORT,()=>{
    console.log(`Running at ${PORT} port`)
})