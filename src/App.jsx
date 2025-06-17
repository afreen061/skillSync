import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
const [data ,setData] = useState([])

useEffect(()=>{
 axios.get('http://localhost:5000/').then(response => {

  setData(response.data.list);
  
})

},[])

console.log(data,"data")
  

  return (
    <>
      <div>
        
        
      </div>
      
      <div className="">
       
       <div className="">{data.map((t,index)=>(
        <div key={index}>
          {t.name}
          
        </div>
       ))}
       
       
       </div>
       {/* <div className="w-7/8">
       
       {
        data.map((i,t)=>(
<>
<div key={t}>{i.name}</div>
</>
        ))
       }
       </div> */}
       
      </div>
     
    </>
  )
}

export default App
