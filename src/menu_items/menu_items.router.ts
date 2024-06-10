import { Hono } from "hono";

import { createMenuItems,getAllMenuItems, getMenuItemsById, updateMenuItems, deleteMenuItems } from "./menu_items.controller";

export const menuItemsRouter = new Hono()

menuItemsRouter.get('/menu_items', getAllMenuItems)
menuItemsRouter.get('/menu_items/:id', getMenuItemsById)
menuItemsRouter.post('/menu_items', createMenuItems)
menuItemsRouter.put('/menu_items/:id', updateMenuItems)
menuItemsRouter.delete('/menu_items/:id', deleteMenuItems)