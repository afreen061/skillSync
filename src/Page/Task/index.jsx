import { useEffect } from "react";
import axios from 'axios'
const TaskList=()=>{
 useEffect(()=>{
axios.get('http://localhost:5000/task').then((res)=>{
    console.log(res.data)
})
},[])
return(
    <>
    
    
    </>
)
}
export default TaskList;