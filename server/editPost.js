"use server"

import ConnectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

export async function editPost({id, title, description}) {
    await ConnectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, description});
}