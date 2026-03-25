"use server"

import ConnectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

export async function deletePost({id}) {
    await ConnectMongoDB();
    await Topic.findByIdAndDelete(id);
}