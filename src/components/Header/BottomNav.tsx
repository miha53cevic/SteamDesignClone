import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const bottomNav = [
    "STORE",
    "LIBRARY",
    "COMMUNITY",
    "USER123"
] as const;

const active: typeof bottomNav[number] = "LIBRARY";

export default function BottomNav() {
    return (
        <nav className="flex pl-2 pb-5">
            <div className="text-gray-500 flex items-center gap-4">
                <div className="flex gap-4">
                    <button className="hover:text-white">
                        <FaArrowLeft fontSize={"1.5rem"} />
                    </button>
                    <button className="hover:text-white">
                        <FaArrowRight fontSize={"1.5rem"} />
                    </button>
                </div>
                <div className="flex items-center gap-6">
                    {bottomNav.map((item, index) => {
                        if (item === active) {
                            return <p key={index} className="text-2xl font-bold text-sky-500 underline underline-offset-8 decoration-4 cursor-pointer">{item}</p>
                        }
                        else return <p key={index} className="text-2xl font-bold hover:text-white cursor-pointer">{item}</p>
                    })}
                </div>
            </div>
        </nav>
    );
}