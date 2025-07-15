
import express from 'express'
import UserController from './../controller/user.js';
const router =express.Router();

router.post('/add',UserController.createUser)
router.get('/',UserController.getUserAll)
router.post('/login',UserController.loginUser)
router.post('/logout',UserController.logOut)

export default router