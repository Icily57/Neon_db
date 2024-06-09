import {Hono} from 'hono'

import {  createOrders, deleteOrders, getOrdersById, getAllOrders, updateOrders } from './orders.controller'

export const ordersRouter = new Hono()

ordersRouter.get('/orders', getAllOrders)
ordersRouter.get('/orders/:id', getOrdersById)
ordersRouter.post('/orders', createOrders)
ordersRouter.put('/orders/:id', updateOrders)
ordersRouter.delete('/orders/:id', deleteOrders)