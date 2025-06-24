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
<label>Name</label>

<Field name="name" type="string"/>

<button type='submit'>Submit</button>
    </Form>
    </Formik>
    
    </>
)

}
export default AddEditTask;