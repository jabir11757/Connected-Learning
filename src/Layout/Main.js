import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {

    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main;