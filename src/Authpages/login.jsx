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

<div>
<form onSubmit={handlesubmit}>
<div>
<input type="email"value={data.email} name="email" placeholder="Email" onChange={handleChange}/>
</div>
<div>
<input type="text"value={data.password} name="password" placeholder="Password" onChange={handleChange}/>
</div>
<button type='submit'>login</button>
</form>



</div>


)


}

export default LoginUser;