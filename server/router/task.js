import TaskController from "../controller/task.js";
import express from 'express'
const router = express.Router()
router.use('/',TaskController.createTask)

export default router;