import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const user =[];
app.get('/',(req,res)=>{
    

 
    res.json(user)
})
app.post('/add',(req,res)=>{
    const {email,name}=req.body;
user.push({email,name})
    res.status(200).json({ message: 'User added successfully', name, email });
})
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Running at port")
})