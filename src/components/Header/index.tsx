import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

export default function Header() {
    return (
        <header className="bg-slate-950">
            <TopNav />
            <BottomNav />
        </header>
    );
}