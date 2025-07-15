import { useState,useEffect } from "react"
import axios from 'axios'
const SkillList =()=>{
    const [data,setData]=useState([])
 useEffect(()=>{
axios.get('http://localhost:5000/skill').then((data)=>{
    console.log(data.data.skill,"data")
    setData(data.data.skill)
})
},[])
    return(
        <>
{data.map((d)=>{

    return(
        <div key={d._id}>{d.name}</div>
    )
})}
        </>
    )
}
export default SkillList 