import {getAllUsers} from '../controller/user_ctrl.js'
import express from 'express'
const router = new express.Router()

router.get('/user', getAllUsers)

export default router