import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("Running at 5000 port")
})