import {Link, Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const LayoutPage =()=>{
   const navigate =useNavigate();
   const handleLogout =async()=>{
      const res=await axios.post('http://localhost:5000/user/logout')
   
 
  localStorage.removeItem("token",'') 
  navigate('/')
   }
return(
<>
   <div className="main flex flex-row bg-[#1A6FAB]">
      <div className="w-1/8  bg-blue-300">
      <Sidebar/>
       
       </div>
        <div className="w-6/8 ">
      
       <Outlet/></div>
        <div className="w-1/8 right-0">
            <button type="button" onClick={handleLogout}>log out</button></div>
  </div>
       
  

</>


)
}
export default LayoutPage;