import Skill from "../model/skill";
const createSkill =(req,res)=>{
    const {name}=req.body
    const skill = Skill.create({name})
    res.status(201).json({message:"create",skill})
}

const getAllSkill =(req,res)=>{
    const task = Skill.find()
    res.status(200).json({message:"get all",task})
}

const skillController={
    createSkill,
    getAllSkill
}
export default skillController