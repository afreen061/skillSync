
import bcrypt from 'bcryptjs'
import User from '../model/user.js'
import jwt from 'jsonwebtoken'

const createUser = async(req,res)=>{
const {name,email,password} = req.body
const hashed = await bcrypt.hash(password,10)
const user = new User({name,email,password:hashed})

await user.save();
res.status(201).json({message:"created",user})



}
const loginUser = async(req,res)=>{
     const {email,password} = req.body;
     const log = await User.findOne({email});
     if(!log){
          res.status(400).json({message:"not found"})
     }
     const passowrdCheck =await bcrypt.compare(password,log.password)
     if(!passowrdCheck){
          res.status(400).json({message:"Invalid"})
     }
const token =jwt.sign({id:log._id},process.env.JWT_SECRET,{expiresIn:'1d'})


     res.status(200).json({message:"data",token,log})
}

const getUserAll =async(req,res)=>{
const {name}= req.query;
const list = await User.find();
res.status(200).json({message:"user all ",list})
}
const UserController = {
     createUser,
     getUserAll,
     loginUser
}

export default UserController;