import Footer from "../components/Footer";
import Header from "../components/Header";

export interface Props {
    children?: React.ReactNode,
}

export default function SteamLayout({ children }: Props) {
    return (
        <div className="h-screen max-h-screen flex flex-col bg-slate-800">
            <Header />
            <div className="flex-grow overflow-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}
