import mongoose from "mongoose"
const formSchema = new mongoose.Schema({
  name :{
    type:String
  },
   email :{
    type:String
  }

})

const form = mongoose.model('form',formSchema)
export default form
