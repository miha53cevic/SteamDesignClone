import Content from "./Content"
import Sidebar from "./Sidebar"

export default function LibraryPage() {
    return (
        <div className="flex h-full">
            <Sidebar />
            <Content />
        </div>
    )
}