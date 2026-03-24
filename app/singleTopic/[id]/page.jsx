import Link from "next/link";

export default async function SingleTopic({params}) {
    const {id} = await params;

    const {topic} =await (await fetch(`http://localhost:3000/api/topics/${id}`)).json();
    const {title, description} = topic;
    return (
        <div className="flex flex-col bg-slate-300 p-4 rounded-2xl text-black mt-3 ">
            <h2>{title}</h2>
            <p>{description}</p>    
            <p>Hell</p>
            <Link href={"/"}>
                <p className="text-black">
                    Home
                </p>
            </Link>
        </div>
    )
}