import {useState} from 'react'
import axios from 'axios'
const LoginUser =()=>{
const[data,setData]=useState(
    {
       email:'',
       password:''

    }
)
const handlesubmit =async(e)=>{
      e.preventDefault()//render prevent 
axios.post('http://localhost:5000/user/login',data)
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