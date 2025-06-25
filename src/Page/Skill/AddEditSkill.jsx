import axios from 'axios'
import {Formik,Field,Form} from 'formik'
import * as Yup from 'yup'
const AddEditSkill=()=>{
const SkillSchema = Yup.object({
    name:Yup.string().required("required")
})


    const handleSubmit =(values)=>{
const data ={
    name:values.name
}
axios.post('http://localhost:5000/skill',data)
    }

return(
    <>
    <Formik
    validationSchema={SkillSchema}
    onSubmit={handleSubmit}
    initialValues={{
        name:''
    }}
    >
        <Form>
            <div className='flex flex-col'>
<label>
    Name
</label>
<Field name='name' type='text'/>
</div>
        </Form>



    </Formik>
    
    </>
)
}
export default AddEditSkill