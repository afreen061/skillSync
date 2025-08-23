import form from "../model/form.js";
const createForm = async(res,req)=>{
    const {name,email} = req.query
    const formData = form.save({name,email})
    res.status(201).json({message:"created",formData})

}

export default formController={
    createForm
}