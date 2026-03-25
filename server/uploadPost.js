"use server"

import ConnectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { revalidatePath } from "next/cache";

export async function uploadPost({title, description}) {
    await ConnectMongoDB();
    await Topic.create({title, description});
    revalidatePath("/")
}