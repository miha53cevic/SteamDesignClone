import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function SteamLayout() {
    return (
        <div className="h-screen max-h-screen flex flex-col bg-slate-800">
            <Header />
            <div className="flex-grow overflow-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
