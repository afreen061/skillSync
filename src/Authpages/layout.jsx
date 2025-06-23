import {Link, Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const LayoutPage =()=>{
return(
<>
   <div className="main flex flex-row">
      <div className="w-1/8  bg-blue-300">
      <Sidebar/>
       
       </div>
        <div className="w-7/8 ">
       <Outlet/>
       </div>
 </div>  

</>


)
}
export default LayoutPage;