import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './router/user.js'
import taskRoutes from './router/task.js'
import connectDb from './config/db.js';
import skillRoutes from './router/skill.js'
import formData from './router/skill.js'
dotenv.config()
const app = express();
connectDb()
app.use(cors());
app.use(express.json())

app.use('/',userRoutes)


app.use('/form',formData)
app.use('/user',userRoutes)
app.use('/task',taskRoutes)
app.use('/skill',skillRoutes)
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Running at ${PORT} port`)
})