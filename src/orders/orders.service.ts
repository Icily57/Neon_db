import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { ordersTable, TSOrders, TIOrders } from "../drizzle/schema";

export const getAllOrdersService = async ():Promise<TSOrders[] | null>=> {
    return await db.query.ordersTable.findMany();
}

export const getOrdersByIdService = async (id:number):Promise<TSOrders | undefined> => {
    return await db.query.ordersTable.findFirst({
        where:eq(ordersTable.id, id)
    });
}

export const createOrdersService = async (orders:TIOrders) => {
    await db.insert(ordersTable).values(orders)
    return "Orders created successfully 🎉";
}

export const updateOrdersService = async (id:number, orders:TIOrders) => {
    await db.update(ordersTable).set(orders).where(eq(ordersTable.id, id))
    return "Orders updated successfully 🎉";
}

export const deleteOrdersService = async (id:number) => {
    await db.delete(ordersTable).where(eq(ordersTable.id, id))
    return "Orders deleted successfully 🎉";
}