import {Navigate,Outlet} from 'react-router-dom';
const PrivateModel = ({children})=>{
   
const token=localStorage.getItem('token');

// token?<Outlet/> :<Navigate to="/login"/>

 return token ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateModel