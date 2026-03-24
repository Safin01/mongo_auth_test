"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({id, title, description}){
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://mba-test.vercel.app/api/topics/${id}`, {
                method:"PUT",
                headers: {
                    "Content-type":"application/json",
                },
                body: JSON.stringify({newTitle, newDescription})
            })

            if(!res.ok) {
                throw new Error("Could not update topic");
            }
        } catch (error) {
            console.log("Could not update topic");
        }
        router.refresh();
        router.push("/");
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col bg-linear-to-r from-slate-400 to-slate-500 text-black rounded-2xl p-6 mt-4 gap-3">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type="text"
                className="border-b  border-black outline-none"
                
            />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                type="text"
                className="outline-none"
            />
            <button type="submit" className="flex border p-1 w-max  hover:bg-slate-600 rounded-md text-sm" >
                Submit Change 
            </button>
        </form>
    );
}