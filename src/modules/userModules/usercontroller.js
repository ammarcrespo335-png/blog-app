import { Router } from 'express'
import { deleteUser, getAll, updateUser } from './userservice.js'

const userRouter = Router()
userRouter.patch('/:id', updateUser)
userRouter.delete('//:id', deleteUser)
userRouter.get('{/:id}', getAll)
export default userRouter
