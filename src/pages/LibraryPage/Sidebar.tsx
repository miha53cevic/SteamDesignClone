import { FaClock, FaGamepad, FaPlayCircle, FaPlus, FaSearch, FaSlidersH } from "react-icons/fa";

const myCollectionList = [
    { id: 1, name: "Game1" },
    { id: 2, name: "Game2" },
    { id: 3, name: "Game3" },
];

export default function Sidebar() {
    return (
        <div className="w-1/4 bg-slate-900 h-full flex flex-col">

            <div className="text-slate-400 bg-slate-950">
                <div className="flex items-center p-2 gap-2">
                    <p className="flex-grow bg-slate-800 p-1 cursor-pointer hover:text-white hover:bg-slate-700">Home</p>
                    <div className="bg-slate-800 cursor-pointer p-1 hover:text-white hover:bg-slate-700">
                        <FaSlidersH fontSize={"1.5rem"} />
                    </div>
                </div>
            </div>

            <div className="flex items-center p-2 gap-2 text-slate-400">
                <p className="bg-slate-800 text-ellipsis whitespace-nowrap overflow-hidden p-1 cursor-pointer hover:bg-slate-700 flex-grow">
                    Games, Soundtracks, and Software
                </p>
                <FaClock fontSize={"1.25rem"} className="cursor-pointer hover:text-slate-300" />
                <FaPlayCircle fontSize={"1.25rem"} className="text-sky-500 cursor-pointer hover:text-sky-400" />
            </div>

            <div className="flex items-center p-1 mx-2 text-slate-400 bg-slate-800">
                <div className="mr-2">
                    <FaSearch fontSize={"1.25rem"} />
                </div>
                <input type="text" className=" bg-slate-800 focus:outline-none flex-grow" placeholder="Search by name" />
            </div>

            <details className="mt-4" open>
                <summary className="flex items-center p-1 gap-2 text-slate-400 cursor-pointer bg-slate-800">
                    <FaPlus />
                    <p>My Collection (10)</p>
                </summary>
                <div className="text-slate-400">
                    {myCollectionList.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 px-2 cursor-pointer hover:bg-slate-700">
                            <FaGamepad />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </details>

        </div>
    );
}