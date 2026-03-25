"use server"

import ConnectMongoDB from "@/libs/mongodb.js";
import Topic from "@/models/topic";

export async function getPosts() {
        await ConnectMongoDB();
        const topics = await Topic.find().lean();
        return topics;
}