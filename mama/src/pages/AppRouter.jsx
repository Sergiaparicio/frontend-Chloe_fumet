import { Routes, Route, } from "react-router-dom";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Show from "./Show";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
            <Route path="/Home" element={<Home />}>
            </Route>
            <Route path="/Show" element={<Show />}>
            </Route>
        </Routes>
    );
}


export default AppRouter;