import EditForm from "@/components/editTopicForm";
import { singlePost } from "@/server/singlePost";



export default async function EditTopic({params}) {
const { id } = await params;
    const  topic  = await singlePost({ id });
    const { title, description } = topic;
    return <EditForm id={id.toString()} title={title} description={description} />;
}