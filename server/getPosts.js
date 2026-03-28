"use server"

import ConnectMongoDB from "@/libs/mongodb.js";
import Topic from "@/models/topic";
import { authClient } from "@/libs/auth-client";


export async function getPosts(userId) {
        const {data: session} = await authClient.getSession();

        await ConnectMongoDB();
        const topics = await Topic.find({userId}).lean();
        return topics;
}