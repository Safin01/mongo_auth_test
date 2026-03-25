"use client";
import { deletePost } from "@/server/deletePost";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";


export default function Remove({id}) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure to delete this topic?");
        if (confirmed) {
            await deletePost({id});
            router.refresh();
        } else {
            return;
        }
    }

    return(
        <button onClick={removeTopic} className="text-red-700">
            <HiOutlineTrash  size={24}/>
        </button>
    );
}