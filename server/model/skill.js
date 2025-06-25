import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema({
name:{type:String}

})
const Skill = mongoose.model('Task',skillSchema)
export default Skill;