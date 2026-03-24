
import { HiPencilAlt } from "react-icons/hi";
import Remove from "@/components/removeButton";
import Link from "next/link";

const getTopics = async () => {
    try {
        const res = await fetch("http://mba-test.vercel.app/api/topics", {
            cache:"no-store",
        });
        if(res.ok) {
            return res.json();
        } else {
            throw new Error("could not fetch topics");
        }
        
    } catch (error) {
        console.log("error fetching topics", error);
    }
}

export default async function TopicErList() {
    const data = await getTopics();
    const topics = data?.topics || [];
    // const {topics} = await getTopics();

    return(
        <>
            {topics.map((t) => (
                <div className="flex justify-between items-center p-4 my-3 bg-linear-to-r from-slate-400 to-slate-500 rounded-2xl text-black" key={t._id}>
                    <Link href={`/singleTopic/${t._id}`}>
                    <div>
                        <h3 className="text-[15px] font-light">{t.title}</h3>
                        <p className="font-light">{t.description}</p>

                    </div>
                    </Link>
                    <div className="flex gap-3">
                        <Remove id={t._id}/>
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24}/>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}