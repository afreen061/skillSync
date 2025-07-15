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

    <div className='flex justify-center items-center  h-screen w-full bg-white '>
    <div className="bg-[#1A6FAB] p-8 ">
    <form className='flex justify-center items-center bg-white ' onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center w-[300px] h-[400px] text-black gap-2'>
<div className='m-2 '>
      <label className='mr-2'>Name</label>  <input value={data.name} type="text" name="name" placeholder="Name" onChange={handleChange}/></div>
     <div  className='m-2'>  <label>Email</label>   <input value={data.email} name="email" type="email" placeholder="Email"onChange={handleChange}/></div>
      <div  className='m-2'><label>Password</label>    <input value={data.password} name="password" type="password" placeholder='password' onChange={handleChange}/></div>
        <button className="bg-[#1A6FAB] ">login</button>
         <div className="">
<span>Already Sign Up  </span>
<a href="/login" className=" ">
login here
</a></div>
    </div>
       </form>
 </div>
    </div>
    
)

}

export default LoginSignup