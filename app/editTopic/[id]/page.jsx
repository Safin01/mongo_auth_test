import EditForm from "@/components/editTopicForm";

const getTopic = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache:"no-store",
        })

        if(!res.ok) {
            throw new Error("could not get topic");
        } 

        return res.json();

    } catch (error) {
        console.log("could not get topic")
    }
}

export default async function EditTopic({params}) {
    const {id} = await params;
    const {topic} = await getTopic(id);
    const {title, description} = topic;
    return <EditForm id={id} title={title} description={description}/>
}