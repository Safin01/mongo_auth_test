import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex justify-between items-center bg-linear-to-r from-pink-500 to-purple-600 text-black font-extrabold p-4 rounded-2xl">
            <h3>Topics Names</h3>
            <Link href={"/addTopic"} className="border p-2 rounded-[10]">Add Topic</Link>
        </div>
    );
}