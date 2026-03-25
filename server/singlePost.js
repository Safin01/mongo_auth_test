import ConnectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

export async function singlePost({id}) {
    await ConnectMongoDB(); 
    const topic = await Topic.findById(id).lean();
    return topic;
}