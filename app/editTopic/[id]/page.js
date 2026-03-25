import EditForm from "@/components/editTopicForm";

const getTopic = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics/${id}`, {
            cache:"no-store",
        })

        if(!res.ok) {
            throw new Error("could not get topic");
        } 

        return res.json();

    } catch (error) {
        console.log("could not get topic");
        return null;
    }
}

export default async function EditTopic({params}) {
const { id } = await params;
    const data = await getTopic(id);
    if (!data || !data.topic) {
        return <div>Topic not found or failed to load.</div>;
    }
    const { topic } = data;
    const { title, description } = topic;
    return <EditForm id={id} title={title} description={description} />;
}