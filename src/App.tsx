import { BrowserRouter, Route, Routes } from "react-router-dom";
import WaterMark from "./components/WaterMark";
import SteamLayout from "./layouts/SteamLayout";
import LibraryPage from "./pages/LibraryPage";
import NotFoundPage from "./pages/NotFoundPage";

const routePrefix = "/SteamDesignClone";

export default function App() {
    return (
        <BrowserRouter basename={routePrefix}>
            <WaterMark />
            <Routes>
                <Route path="/" element={<SteamLayout />}>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/Library" element={<LibraryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
