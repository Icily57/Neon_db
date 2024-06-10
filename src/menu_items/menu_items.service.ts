import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { menuItemsTable, TIMenusItems, TSMenusItems } from "../drizzle/schema";

export const getAllMenuItemsService = async ():Promise<TSMenusItems[] | null>=> {
    return await db.select().from(menuItemsTable);
}

export const getMenuItemsByIdService = async (id:TSMenusItems["id"]):Promise<TSMenusItems[]> => {
    return await db.select().from(menuItemsTable).where(eq(menuItemsTable.id, id));
}

export const createMenuItemsService = async (menuItems:TIMenusItems) => {
    await db.insert(menuItemsTable).values(menuItems)
    return "Menu Items created successfully 🎉";
}

export const updateMenuItemsService = async (id:number, menuItems:TIMenusItems) => {
    await db.update(menuItemsTable).set(menuItems).where(eq(menuItemsTable.id, id))
    return "Menu Items updated successfully 🎉";
}

export const deleteMenuItemsService = async (id:number) => {
    await db.delete(menuItemsTable).where(eq(menuItemsTable.id, id))
    return "Menu Items deleted successfully 🎉";
}


