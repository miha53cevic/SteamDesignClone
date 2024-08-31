import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const bottomNav = [
    { name: "STORE", link: "/Store" },
    { name: "LIBRARY", link: "/Library" },
    { name: "COMMUNITY", link: "/Community" },
    { name: "USER123", link: "/User123" }
] as const;

type BottomNavType = typeof bottomNav[number];

export default function BottomNav() {
    const { pathname } = useLocation();
    const router = useNavigate();

    const handleOnClick = (link: string) => {
        router(link);
    }

    const handleBackButton = () => {
        router(-1);
    }

    const handleForwardButton = () => {
        router(+1);
    }

    const activeLink = pathname as BottomNavType["link"];
    return (
        <nav className="pl-2 pb-5">
            <div className="text-slate-400 flex items-center gap-4">
                <div className="flex gap-4">
                    <button className="hover:text-white" onClick={handleBackButton}>
                        <FaArrowLeft fontSize={"1.5rem"} />
                    </button>
                    <button className="hover:text-white" onClick={handleForwardButton}>
                        <FaArrowRight fontSize={"1.5rem"} />
                    </button>
                </div>
                <div className="flex items-center gap-6 flex-wrap justify-center md:justify-normal">
                    {bottomNav.map((item, index) => {
                        if (item.link === activeLink) {
                            return <p key={index} className="text-2xl font-bold text-sky-500 underline underline-offset-8 decoration-4 cursor-pointer" onClick={() => handleOnClick(item.link)}>{item.name}</p>
                        }
                        else return <p key={index} className="text-2xl font-bold text-slate-300 hover:text-white cursor-pointer" onClick={() => handleOnClick(item.link)}>{item.name}</p>
                    })}
                </div>
            </div>
        </nav>
    );
}