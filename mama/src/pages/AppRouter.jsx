import { Routes, Route, } from "react-router-dom";
import LandingPage from "./LandingPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
        </Routes>
    );
}


export default AppRouter;