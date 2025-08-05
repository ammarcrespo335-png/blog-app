import { Router } from 'express'
import * as authService from './authService.js'
const router = Router()

router.post('/signup',  authService.signup)
router.post('/login', authService.login)
export default router
