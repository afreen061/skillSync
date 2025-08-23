import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddEditTask=()=>{
const navigate=useNavigate()
const taskSchema = Yup.object({
    name:Yup.string().required("name is required")
})
const handleSubmit =(values)=>{
    const data ={
        name:values.name,
        status:values.status,
        priority:values.priority,
        desc:values.desc

    }
  axios.post('http://localhost:5000/task',data)
  

}
return(
    <>
    <Formik
    initialValues={{
name:'', 
status:'',
priority:'',
desc:""
 }}
validationSchema={taskSchema}
onSubmit={
    handleSubmit
} >

    <Form>
        <div className="flex justify-end m-2"><button type='submit' className="bg-blue-800 text-white mr-2"onClick={()=>navigate(-1)}>Submit</button>
<button type='button' className=" bg-blue-800 text-white" onClick={()=>navigate(-1)}>Cancel</button></div>
        <div className='text-black flex flex-col justify-center items-center h-[80vh] 6w-full'>
  <div >   
    <div className="flex flex-row">  
       <div className="">
<label className="text-black black font-semibold mx-4 block">Title</label>

<Field name="name" type="text" className="border-2 border-gray-500 focus:ring"/>
</div>
<div>
    <div className="block">Priority</div>
    <div className="flex flex-row justify-center ">
    <div >
<label className="text-black font-semibold mx-4" htmlFor="high">High</label>

<Field type="radio"   name="priority" id="high" value="high" className="border-2 border-gray-500 focus:ring"/></div>
<div><label className="text-black font-semibold mx-4" htmlFor="low">Low</label>

<Field type="radio"   name="priority" id ="low"  value="low" className="border-2 border-gray-500 focus:ring"/></div>
<div>
<label className="text-black font-semibold mx-4" htmlFor="medium">Medium</label>

<Field type="radio"   name="priority" id="medium" value="medium" className="border-2 border-gray-500 focus:ring"/></div>
</div>
</div>
<div>
    <div className="block">Status</div>
    <div className="flex flex-row justify-center ">
    <div >
<label className="text-black font-semibold mx-4" htmlFor="todo">To Do</label>

<Field type="radio"   id="todo" name="status" value="todo" className="border-2 border-gray-500 focus:ring"/>
</div>
<div><label className="text-black font-semibold mx-4" htmlFor="progress">progress</label>

<Field type="radio"   id="progress" value="progress" name="status" className="border-2 border-gray-500 focus:ring"/>
</div>
<div>
<label className="text-black font-semibold mx-4" htmlFor="complete">Complete</label>

<Field type="radio" value="complete"  id="complete" name="status" className="border-2 border-gray-500 focus:ring"/>
</div>
</div></div>  </div>
<div >
<label className="text-black block font-semibold mx-4" htmlFor="desc">Description</label>

<Field as="textarea" rows="4" cols="100" id="desc" name="desc" type="text" className="border-2 border-gray-500 focus:ring resize-none"/>
</div>

</div>

</div>



    </Form>
    </Formik>
    
    </>
)

}
export default AddEditTask;