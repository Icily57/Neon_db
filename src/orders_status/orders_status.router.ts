import {Hono} from 'hono'

import { createOrdersStatus, deleteOrdersStatus, getAllOrdersStatus, getOrdersStatusById, updateOrdersStatus } from './orders_status.controller'

export const ordersStatusRouter = new Hono()

ordersStatusRouter.get('/orders_status', getAllOrdersStatus)
ordersStatusRouter.get('/orders_status/:id', getOrdersStatusById)
ordersStatusRouter.post('/orders_status', createOrdersStatus)
ordersStatusRouter.put('/orders_status/:id', updateOrdersStatus)
ordersStatusRouter.delete('/orders_status/:id', deleteOrdersStatus)