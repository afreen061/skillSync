import mongoose from 'mongoose'
const taskSchema=new mongoose.Schema({
    name:{type:String},
    priority:{type:String},
    status:{type:String},
    desc:{type:String}
})

const Task = mongoose.model("Task",taskSchema)
export default Task;
