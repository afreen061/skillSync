import {useState} from 'react';
import axios from 'axios';
const LoginSignup=()=>{

const [data ,setData] = useState({email:'',name:''})
const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
        const response=await axios.post('http://localhost:5000/add',data)
        alert(response.data.message)
    }
    catch(err){
      console.log("error",err)

    }
    
    
}
 const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
return(

    <>
    <form onSubmit={handleSubmit}>

        <input value={data.name} type="text" name="name" onChange={handleChange} placeholder="Name"/>
        <input value={data.email} name="email" type="email" onChange={handleChange}  placeholder="Email"/>
        <button>login</button>
    </form>
    </>
)

}

export default LoginSignup