import formController from "../controller/other.js";
import express from'express';
const router =express.Router()
router.post("/form",formController.createForm)
export default router