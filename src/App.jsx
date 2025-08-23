import { useState, useEffect } from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material';
import './App.css'
import axios from 'axios';


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/').then(response => {
      setData(response.data.list);
    })
  }, [])

  return (
    <Box width="100%" p={4}>
      <Typography variant="h4" align="center" gutterBottom>
        SkillSync Dashboard
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {data.map((t, index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <Typography variant="h6">{t.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default App
