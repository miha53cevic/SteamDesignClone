import { FaAngleDown, FaBell, FaDesktop, FaNewspaper, FaRegWindowClose, FaRegWindowMaximize, FaRegWindowMinimize, FaSteam } from "react-icons/fa";

const topNav = [
    "Steam",
    "View",
    "Friends",
    "Games",
    "Help"
];

export default function TopNav() {
    return (
        <nav className="flex pl-2 flex-wrap">
            <div className="flex gap-4 text-slate-400 flex-grow py-1">
                {topNav.map((item, index) => {
                    const renderItem = item === "Steam" ?
                        <div className="flex items-center gap-1">
                            <FaSteam /> {item}
                        </div>
                        : item;
                    return <div key={index} className="hover:text-white cursor-pointer">{renderItem}</div>
                })}
            </div>
            <div className="flex gap-2 text-slate-400 py-1">
                <div className="flex items-center bg-slate-800 px-4 hover:bg-slate-700 cursor-pointer hover:text-white">
                    <FaNewspaper />
                </div>
                <div className="flex items-center bg-slate-800 px-4 hover:bg-slate-700 cursor-pointer hover:text-white">
                    <FaBell />
                </div>
                <div className="flex gap-1 cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-400 pr-2">
                    <div className="border-r-sky-300 border-r-4">
                        <img src="https://picsum.photos/200" alt="Avatar" className="size-6" />
                    </div>
                    <div className="text-sky-500 flex items-center gap-1">
                        <p>User123</p>
                        <FaAngleDown fontSize={"0.75rem"} />
                    </div>
                    <p className="flex items-center">2.57€</p>
                </div>
                <div className="flex items-center hover:bg-slate-700 px-4 hover:text-white cursor-pointer">
                    <FaDesktop />
                </div>
            </div>
            <div className="hidden md:flex items-center text-slate-400 ml-2">
                <div className="p-1 hover:bg-slate-700 hover:text-white cursor-pointer">
                    <FaRegWindowMinimize fontSize={"1.25rem"} className="-translate-y-1/4" />
                </div>
                <div className="p-1 hover:bg-slate-700 hover:text-white cursor-pointer">
                    <FaRegWindowMaximize fontSize={"1.25rem"} />
                </div>
                <div className="p-1 hover:bg-red-500 hover:text-white cursor-pointer">
                    <FaRegWindowClose fontSize={"1.25rem"} />
                </div>
            </div>
        </nav>
    );
}