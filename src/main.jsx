import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginSignup from './Authpages/loginSign.jsx'
import LoginUser from './Authpages/login.jsx'
import PrivateModel from './Authpages/private.jsx'
import LayoutPage from './Authpages/layout.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

         <BrowserRouter>
    <Routes>
 <Route path='/' element={<LoginSignup  name="Login"/>}/>
         <Route path='/login' element={<LoginUser  />} />
 <Route  element={<PrivateModel />}>
 <Route element ={<LayoutPage/>}>
      <Route path='/dashboard' element={<App />}/>
     <Route path='/about' element={<About />}/>
     </Route>
     </Route>
         </Routes>
    </BrowserRouter>
 
  </StrictMode>,
)
