import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
const [data ,setData] = useState('')

useEffect(()=>{
  const response = axios.get('http://localhost:3000/').then(response => {
  console.log(response);
  setData(response.data);
  
})
console.log(response)
},[])


  

  return (
    <>
      <div>
        
        
      </div>
      
      <div className="main flex flex-row">
       <div className="w-1/8 w-[200px] bg-blue-300">
       <div>Sidebar</div>
       <a href="/about">About</a>
       
       </div>
       <div className="w-7/8">heello</div>
       
      </div>
     
    </>
  )
}

export default App
