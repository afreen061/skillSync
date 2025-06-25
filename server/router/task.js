import TaskController from "../controller/task.js";
import express from 'express'
const router = express.Router()
router.post('/',TaskController.createTask)
router.get('/',TaskController.getAllTask)

export default router;