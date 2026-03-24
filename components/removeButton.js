"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";


export default function Remove({id}) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure to delete this topic?");
        if (confirmed) {
            const res = await fetch(`http://mba-test.vercel.app/api/topics?id=${id}`, {
                method:"DELETE",
            });
            if (res) {
                router.refresh();
            } else {
                throw new Error("Could not delete topic");
            }
        }
    }

    return(
        <button onClick={removeTopic} className="text-red-700">
            <HiOutlineTrash  size={24}/>
        </button>
    );
}