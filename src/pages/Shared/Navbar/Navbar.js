import React from "react";
import logo from "../../../images/home/image 32.png"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header aria-label="Site Header" className="bg-[#EDEEF3] px-4">
            <div>
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block" href="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link
                                        className="mx-2 hover:text-gray-500/75"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="mx-2 hover:text-gray-500/75"
                                        to="/about"
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="mx-2 hover:text-gray-500/75"
                                        to="/courses"
                                    >
                                        Course
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="mx-2 hover:text-gray-500/75"
                                        to="/contact"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link to="/">
                                <button className="rounded-3xl border-4 border-[#6278FF] px-6 py-2 text-sm font-semibold text-[#6278FF]"> Login</button>
                            </Link>

                            <div className="hidden sm:flex">
                                <Link to="/">
                                    <button className="rounded-3xl bg-[#6278FF] px-5 py-3 text-sm font-semibold text-white">Sign Up</button>
                                </Link>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;