
import express from 'express'
import UserController from './../controller/user.js';
const router =express.Router();

router.post('/add',UserController.createUser)
router.get('/',UserController.getUserAll)

export default router