import {Hono} from 'hono'
import { createUser, deleteUser, getAllUsers, getUserById, updateUser} from './user.controller'

 export const userRouter = new Hono()


userRouter.get('/user', getAllUsers)
userRouter.get('/user/:id', getUserById)
userRouter.post('/user', createUser)
userRouter.put('/user/:id', updateUser)
userRouter.delete('/user/:id', deleteUser)