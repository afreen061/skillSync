
const createUser =async(req,res)=>{
        const {name,email} = req.body;
user.push({name,email})
    res.status(200).json("data",name,email)
}

export default createUser