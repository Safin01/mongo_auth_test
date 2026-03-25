import Link from "next/link";

export default async function SingleTopic({params}) {
    const {id} = await params;

    const getTopic = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics/${id}`, {
            cache: "no-store"
        });
        return res.json();
    }
    const {topic} = await getTopic();
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