import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Course from "../../pages/Course/Course/Course";
import About from "../../pages/About/About/About";
import Contact from "../../pages/Contact/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/courses",
                element: <Course />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])