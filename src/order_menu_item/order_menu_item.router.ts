import { Hono} from 'hono';

import {  createOrderMenuItem, deleteOrderMenuItem, getAllOrderMenuItems, getOrderMenuItemById, updateOrderMenuItem } from './order_menu_item.controller';

export const orderMenuItemRouter = new Hono()

orderMenuItemRouter.get('/order_menu_item', getAllOrderMenuItems)
orderMenuItemRouter.get('/order_menu_item/:id', getOrderMenuItemById)
orderMenuItemRouter.post('/order_menu_item', createOrderMenuItem)
orderMenuItemRouter.put('/order_menu_item/:id', updateOrderMenuItem)
orderMenuItemRouter.delete('/order_menu_item/:id', deleteOrderMenuItem)