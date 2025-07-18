import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const AddEditTask=()=>{
const taskSchema = Yup.object({
    name:Yup.string().required("name is required")
})
const handleSubmit =(values)=>{
    const data ={
        name:values.name
    }
  axios.post('http://localhost:5000/task',data)

}
return(
    <>
    <Formik
    initialValues={{
name:'',  }}
validationSchema={taskSchema}
onSubmit={
    handleSubmit
} >

    <Form>
        <div className='flex justify-center items-center h-screen w-full'>
<label className="text-black font-semibold ">Name</label>

<Field name="name" type="text" className="border border-2"/>

<button type='submit'>Submit</button>
</div>
    </Form>
    </Formik>
    
    </>
)

}
export default AddEditTask;