import { useState,useEffect } from "react"
import axios from 'axios'
const skillList =()=>{
 useEffect(()=>{
axios.get('http://localhost:5000/skill/').then((data)=>{
    console.log(data,"data")
})
},[])
    return(
        <>

        </>
    )
}