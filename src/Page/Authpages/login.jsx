import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const LoginUser =()=>{
const[data,setData]=useState(
    {
       email:'',
       password:''

    }
)
const navigate =useNavigate();
const handlesubmit =async(e)=>{
      e.preventDefault()//render prevent 
const res=await axios.post('http://localhost:5000/user/login',data)
    console.log("Full response:", res);
  const { token} = res.data;
  localStorage.setItem("token",token) 
  navigate('/dashboard')



}
const handleChange=async(e)=>{
  setData({  ...data,
    [e.target.name]:e.target.value}
)
}
return(

<div className='flex justify-center items-center  h-screen w-full bg-white '>
    <div className="bg-[#1A6FAB] p-8 ">
<form className='flex justify-center items-center bg-white ' onSubmit={handlesubmit}>
   <div className='flex flex-col justify-center items-center w-[300px] h-[400px] text-black'>
   <div  className='m-2'>  <label className="mr-2">Email</label>  
  
<input type="email"value={data.email} name="email" placeholder="Email" onChange={handleChange}/>
</div>
  <div  className='m-2'><label className="mr-2">Password</label> 
<input type="text"value={data.password} name="password" placeholder="Password" onChange={handleChange}/>
</div>
<button type='submit' className="bg-[#1A6FAB] ">login</button>
<div className="">
<span> Haven't Sign up yet </span>
<a href="/" className=" ">
 click here
</a></div>
</div>
</form>

</div>

</div>


)


}

export default LoginUser;