import Skill from "../model/skill.js";
const createSkill =(req,res)=>{
    const {name,description}=req.body
    const skill = Skill.create({name,description})
    res.status(201).json({message:"create",skill})
}

const getAllSkill =async(req,res)=>{
    const skill = await Skill.find()
    res.status(200).json({message:"get all",skill})
}

const skillController={
    createSkill,
    getAllSkill
}
export default skillController