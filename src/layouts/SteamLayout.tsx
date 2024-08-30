import Header from "../components/Header";

export interface Props {
    children?: React.ReactNode,
}

export default function SteamLayout({ children }: Props) {
    return (
        <div className="h-lvh bg-slate-800">
            <Header />
            {children}
        </div>
    );
}
