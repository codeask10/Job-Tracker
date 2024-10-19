import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayouts = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayouts