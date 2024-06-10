import {Hono} from 'hono'
import { createComment, deleteComment, getAllComments, getCommentById, updateComment } from './comments.controller'



export const commentsRouter = new Hono()

commentsRouter.get('/comments', getAllComments)
commentsRouter.get('/comments/:id', getCommentById)
commentsRouter.post('/comments', createComment)
commentsRouter.put('/comments/:id', updateComment)
commentsRouter.delete('/comments/:id', deleteComment)