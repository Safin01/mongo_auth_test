
import { HiPencilAlt } from "react-icons/hi";
import Remove from "@/components/removeButton";
import Link from "next/link";
import { getPosts } from "@/server/getPosts";
import {auth} from "@/libs/auth";
import { headers } from "next/headers";

const getTopics = async (session : any) => {
    if (!session || !session.user) return [];
    // const {data: session} = await authClient.getSession();
    var res: any[] = [];
    try {
        res =  await getPosts(session.user.id);
         
        } catch (error) {
            console.log("error fetching topics", error);
        }
    return res;
}

export default async function TopicErList() {
   
    // const {topics} = await getTopics();
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    const topics = await getTopics(session);

    return(
        <> {session ? (
            (topics.map((t) => (
                <div className="flex justify-between items-center p-4 my-3 bg-linear-to-r from-slate-400 to-slate-500 rounded-2xl text-black" key={t._id.toString()}>
                    <Link href={`/singleTopic/${t._id.toString()}`}>
                    <div>
                        <h3 className="text-[15px] font-light">{t.title}</h3>
                        <p className="font-light">{t.description}</p>

                    </div>
                    </Link>
                    <div className="flex gap-3">
                        <Remove id={t._id.toString()}/>
                        <Link href={`/editTopic/${t._id.toString()}`}>
                            <HiPencilAlt size={24}/>
                        </Link>
                    </div>
                </div>
                ))
            )
            ):(
                <p>Sign in to see topic list</p>
            )
        }
        </>
    );
}