import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Box, Paper } from '@mui/material';

const TaskList = () => {
  const navigate = useNavigate()
  const [task, setTask] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/task').then((res) => {
      setTask(res.data.task)
    })
  }, [])
  return (
    <Box width="100%" p={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" color="primary">Task</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/task/add')}>Add Task</Button>
      </Box>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {task.map((t, i) => (
              <TableRow key={i}>
                <TableCell>{t.name}</TableCell>
                <TableCell>{t.status}</TableCell>
                <TableCell>{t.priority}</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  )
}
export default TaskList;