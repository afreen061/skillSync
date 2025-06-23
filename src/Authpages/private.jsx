import {useNavigate} from 'react-router-dom';
const PrivateModel = ({children})=>{
    const navigate = useNavigate();
const token=localStorage.getItem('token');

token?children :navigate('/login')


}
export default PrivateModel