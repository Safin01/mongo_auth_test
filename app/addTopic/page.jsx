"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title || !description) {
            alert("Must include Title and Description.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method:"POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({title,description})
            })

            if(res) {
                router.push("/");
            } else {
                throw new Error("Cannot add topic");
            }
        } catch (error) {
            throw new Error("Cannot add topic")
        }
    }


    return(
        <form onSubmit={handleSubmit} className="flex flex-col w-2xl p-4 bg-linear-to-r from-slate-300 to-slate-100 text-[16px] text-black font-extrabold rounded-2xl mt-3 gap-2" >
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Title"
                className="border-b-2 border-purple-500 pb-2 font-light outline-none"
                type="text"
            />
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
                className="font-light outline-none"
                type="text"
            />
            <button type="submit" className="flex mt-3 border-2 rounded-md w-25 justify-center items-center hover:shadow-pink-700 hover:shadow-2xl hover:border-violet-600">
                Add Topic
            </button>
        </form>
    )
}