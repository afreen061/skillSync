
import bcrypt from 'bcryptjs'
import User from '../model/user.js'

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
     res.status(200).json({message:"data",log})
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