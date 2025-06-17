import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginSignup from './Authpages/loginSign.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="main flex flex-row">
      <div className="w-1/8 w-[200px] bg-blue-300">
       <div>Sidebar</div>
       <a href="/about">About</a>
       
       </div>
        <div className="w-7/8 ">
         <BrowserRouter>
    <Routes>
      <Route path='/dashboad' element={<App />}/>
     <Route path='/about' element={<About />}/>
      <Route path='/' element={<LoginSignup />}/>
         </Routes>
    </BrowserRouter>
  </div>
 </div>
  </StrictMode>,
)
