import {useState} from "react"
import axios from 'axios'
const FormData = () => {
const [data ,setData] = useState({
    name:"",
    email:""
})

function handleChange(e){
    const {name,value} = e.target
    setData((p)=>{
        return {
...p,
[name]:value
        }
    })

}
 function handleSubmit (values){
const payload =  {
name:values.name,
email:values.email
}  
 axios.post('http://localhost:5000/form/form',payload)
   
}

    return(
        <>
        <form >
<div >
<input className="border " type="text" value={data.name} name="name" onChange={handleChange}/>

</div>
<div >
<input className="border " type="email" value={data.email} name="email" onChange={handleChange}/>

</div>

<button onSubmit={handleSubmit}>Submit</button>
        </form>
        
        
        </>
    )
}

export default FormData
