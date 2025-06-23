import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginSignup from './Authpages/loginSign.jsx'
import LoginUser from './Authpages/login.jsx'
import PrivateModel from './Authpages/private.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="main flex flex-row">
      <div className="w-1/8  bg-blue-300">
       <div>Sidebar</div>
       <a href="/about">About</a>
       
       </div>
        <div className="w-7/8 ">
         <BrowserRouter>
    <Routes>
 <Route path='/' element={<LoginSignup  name="Login"/>}/>
         <Route path='/login' element={<LoginUser  />} />
 <Route  element={<PrivateModel />}>
      <Route path='/dashboard' element={<App />}/>
     <Route path='/about' element={<About />}/>
     </Route>
         </Routes>
    </BrowserRouter>
  </div>
 </div>
  </StrictMode>,
)
