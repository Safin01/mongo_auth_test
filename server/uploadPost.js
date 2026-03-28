"use server"

import ConnectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { revalidatePath } from "next/cache";
import { authClient } from "@/libs/auth-client";


export async function uploadPost({title, description, userId}) {
    await ConnectMongoDB();
    await Topic.create({title, description, userId});
    revalidatePath("/")
}