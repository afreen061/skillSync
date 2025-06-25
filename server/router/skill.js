import skillController from "../controller/skill.js";
import express from'express';
const router =express.Router()

router.post('/skill/add',skillController.createSkill)
router.get('/',skillController.getAllSkill)

export default router