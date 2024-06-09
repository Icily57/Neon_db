import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { restaurantTable, TSRestaurant, TIRestaurant } from "../drizzle/schema";

export const getAllRestaurantsService = async ():Promise<TSRestaurant[] | null>=> {
    return await db.query.restaurantTable.findMany();
}

export const getRestaurantByIdService = async (id:number):Promise<TSRestaurant | undefined> => {
    return await db.query.restaurantTable.findFirst({
        where:eq(restaurantTable.id, id)
    });
}

export const createRestaurantService = async (restaurant:TIRestaurant) => {
    await db.insert(restaurantTable).values(restaurant)
    return "Restaurant created successfully 🎉";
}

export const updateRestaurantService = async (id:number, restaurant:TIRestaurant) => {
    await db.update(restaurantTable).set(restaurant).where(eq(restaurantTable.id, id))
    return "Restaurant updated successfully 🎉";
}

export const deleteRestaurantService = async (id:number) => {
    await db.delete(restaurantTable).where(eq(restaurantTable.id, id))
    return "Restaurant deleted successfully 🎉";
}