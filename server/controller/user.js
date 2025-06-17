
import bcrypt from 'bcryptjs'
import User from '../model/user.js'

const createUser = async(req,res)=>{
const {name,email,password} = req.body
const hashed = await bcrypt.hash(password,10)
const user = new User({name,email,password:hashed})

await user.save();
res.status(201).json({message:"created",user})



}


const getUserAll =async(req,res)=>{
const {name}= req.query;
const list = await User.find();
res.status(200).json({message:"user all ",list})
}
const UserController = {
     createUser,
     getUserAll
}

export default UserController;