import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Box, Paper, Typography, TextField, Button, Link } from '@mui/material';

const LoginUser = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:5000/user/login', data)
    const { token } = res.data;
    localStorage.setItem("token", token)
    navigate('/dashboard')
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <Container maxWidth="xs" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: 1 }}>
        <Typography variant="h5" align="center" gutterBottom>Login</Typography>
        <Box component="form" onSubmit={handlesubmit} display="flex" flexDirection="column" gap={2}>
          <TextField label="Email" name="email" type="email" value={data.email} onChange={handleChange} fullWidth required />
          <TextField label="Password" name="password" type="password" value={data.password} onChange={handleChange} fullWidth required />
          <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
          <Typography align="center" variant="body2">
            Haven't signed up yet?{' '}
            <Link href="/">Click here</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default LoginUser;