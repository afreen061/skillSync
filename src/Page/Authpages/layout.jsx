import { Link, Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from '../../assets/logo.jpg'
import { Box, Button, Grid, AppBar, Toolbar } from '@mui/material';

const LayoutPage = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.post('http://localhost:5000/user/logout')
    localStorage.removeItem("token")
    navigate('/')
  }
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      {/* Sidebar */}
      <Box sx={{ width: 220, bgcolor: 'primary.light', flexShrink: 0 }}>
        <Sidebar />
      </Box>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={Logo} alt="logo" style={{ height: 32 }} />
            <Button variant="outlined" color="primary" onClick={handleLogout}>log out</Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default', minHeight: 0 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
export default LayoutPage;