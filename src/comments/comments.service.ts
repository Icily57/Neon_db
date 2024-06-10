import db from "../drizzle/db";
import { eq } from "drizzle-orm";

import { commentsTable, TSComments, TIComments } from "../drizzle/schema";

export const getAllCommentsService = async ():Promise<TSComments[] | null>=> {
    return await db.select().from(commentsTable);
}

export const getCommentsByIdService = async (id:TSComments["id"]):Promise<TSComments[]> => {
    return await db.select().from(commentsTable).where(eq(commentsTable.id, id));
}

export const createCommentsService = async (comments:TIComments) => {
    await db.insert(commentsTable).values(comments)
    return "Comments created successfully 🎉";
}

export const updateCommentsService = async (id:number, comments:TIComments) => {
    await db.update(commentsTable).set(comments).where(eq(commentsTable.id, id))
    return "Comments updated successfully 🎉";
}

export const deleteCommentsService = async (id:number) => {
    await db.delete(commentsTable).where(eq(commentsTable.id, id))
    return "Comments deleted successfully 🎉";
}

