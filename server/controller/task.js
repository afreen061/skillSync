import Task from "../model/task.js";
const createTask= async(req,res)=>{
const {name} =req.body;
const task =await Task.create({name});

 res.status(201).json({message:"created",task})
}
const TaskController ={
createTask


}

export default TaskController;