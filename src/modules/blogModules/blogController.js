import { Router } from 'express';
import { createBlog } from './blogService.js';
const router = Router()

router.post('/', createBlog)
export default router