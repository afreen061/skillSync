import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
const [data ,setData] = useState([])

useEffect(()=>{
  const response = axios.get('http://localhost:5000/').then(response => {
  console.log("AAAA",response.data);
  setData(response.data);
  
})
console.log(response)
},[])

console.log(data)
  

  return (
    <>
      <div>
        
        
      </div>
      
      <div className="main flex flex-row">
       <div className="w-1/8 w-[200px] bg-blue-300">
       <div>Sidebar</div>
       <a href="/about">About</a>
       
       </div>
       <div className="w-7/8">
       
       {
        data.map((i,t)=>(
<>
<div key={t}>{i.name}</div>
</>
        ))
       }
       </div>
       
      </div>
     
    </>
  )
}

export default App
