"use client"

import Link from "next/link";
import { authClient } from "@/libs/auth-client";
import { signInWithGoogle, signOut } from "@/libs/auth-actions";


export default function Navbar() {

    const {data: session, isPending} = authClient.useSession();

    return(
        <div className="flex justify-between items-center bg-linear-to-r from-pink-500 to-purple-600 text-black font-extrabold p-4 rounded-2xl">
            <h3>Topics Names</h3>
            {session ? (
                <div> 
                <p>Hello {session.user.name}</p>
                <Link href={"/addTopic"} className="border p-2 rounded-[10]">Add Topic</Link>
                <button onClick={signOut}>
                    Log Out
                </button>
                </div>
            ) : (
                <button onClick={signInWithGoogle}>
                    Sign In
                    <br />
                    <p>Sign in to add topic</p>
                </button>
            )
            }
        </div>
    );
}