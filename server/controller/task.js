import Task from "../model/task.js";
const createTask= async(req,res)=>{
const {name} =req.body;
const task =await Task.create({name});

 res.status(201).json({message:"created",task})
}

const getAllTask= async (req,res)=>{
  const task = await Task.find();
  res.status(200).json({message:"data",task})  
}
const TaskController ={
createTask,
getAllTask


}

export default TaskController;