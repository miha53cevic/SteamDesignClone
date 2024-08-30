import { FaDownload, FaPlusSquare, FaUserFriends } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-950 px-4 py-4">
            <div className="text-gray-500 flex">
                <div className="flex items-center gap-2 hover:text-white cursor-pointer">
                    <FaPlusSquare /> Add Game
                </div>
                <div className="flex items-center gap-2 mx-auto hover:text-white cursor-pointer">
                    <FaDownload /> Manage Downloads
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer">
                    Friends & Chat <FaUserFriends />
                </div>
            </div>
        </footer>
    );
}