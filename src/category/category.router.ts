import {Hono} from 'hono'

import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from './category.controller'

export const categoryRouter = new Hono()

categoryRouter.get('/category', getAllCategories)
categoryRouter.get('/category/:id', getCategoryById)
categoryRouter.post('/category', createCategory)
categoryRouter.put('/category/:id', updateCategory)
categoryRouter.delete('/category/:id', deleteCategory)