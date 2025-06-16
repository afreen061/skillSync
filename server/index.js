import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './router/user.js'
import connectDb from './config/db.js';
dotenv.config()
const app = express();
connectDb()
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(user)
})



app.post('/user',userRoutes)
const PORT = process.env.PORT || 500
app.listen(PORT,()=>{
    console.log(`Running at ${PORT} port`)
})