import createUser from "../controller/user.js";
import express from 'express'
const router =express.Router();

router.post('/add',createUser)

export default router