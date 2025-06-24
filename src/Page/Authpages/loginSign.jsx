import {useState} from 'react'
import axios from 'axios'
const LoginSignup=(props)=>{
const[data,setData] =useState({
    name:'',
    email:'',
    password:''
})
const handleSubmit=(e)=>{
    e.preventDefault() //
    try{
        const response = axios.post('http://localhost:5000/user/add',data) //
        alert("okay")
        console.log(response);
    }
    catch(err){
        console.log("error",err)
    }

}
const handleChange=(e)=>{
setData({...data, [e.target.name]:e.target.value}) ///

}
return(

    <div className='flex justify-center items-center  h-screen w-full '>
    
    <form className='flex p-6  justify-center items-center' onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center w-[500px] h-[400px]'>
<div className='m-2'>
      <label className='mr-2'>Name</label>  <input value={data.name} type="text" name="name" placeholder="Name" onChange={handleChange}/></div>
     <div  className='m-2'>  <label>Email</label>   <input value={data.email} name="email" type="email" placeholder="Email"onChange={handleChange}/></div>
      <div  className='m-2'><label>Password</label>    <input value={data.password} name="password" type="password" placeholder='password' onChange={handleChange}/></div>
        <button>login</button>
         <div className='text-[12px]'>Havn't SignUp yet     {props.name}</div>
    </div>
       </form>
 
    </div>
    
)

}

export default LoginSignup