import React from "react";
import { Link } from "react-router-dom";
import FLogo from "../../../images/home/image 32.png";
import AppStore from "../../../images/home/image 30.png"
import GoogleStore from "../../../images/home/image 31.png"
import Facebook from "../../../images/home/facebook (8) 1.png"
import LinkedIn from "../../../images/home/linkedin (7) 1.png"
import Twitter from "../../../images/home/twitter (7) 1.png"

const Footer = () => {

    return (
        <footer aria-label="Site Footer" className="bg-[#132742]">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-32">
                    <div className="">

                        <div className="space-y-2">
                            <img src={FLogo} alt="" />

                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do.
                            </p>

                            <img src={AppStore} alt="" />

                            <img src={GoogleStore} alt="" />
                        </div>


                        <div>
                            <h1 className="mt-6 font-semibold text-[#FFFFFF]">Follow Us</h1>
                            <div className="mt-2 flex justify-center gap-4 lg:justify-start">
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/"
                                >
                                    <img src={LinkedIn} alt="" />
                                </Link>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/"
                                >
                                    <img src={Twitter} alt="" />
                                </Link>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/"
                                >
                                    <img src={Facebook} alt="" />
                                </Link>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/"
                                >
                                </Link>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/"
                                >
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <strong className="text-xl font-bold text-[#FFFFFF]"> About Us </strong>

                        <nav
                            aria-label="Footer Services Nav"
                            className="mt-6 flex flex-col space-y-1"
                        >
                            <Link className="text-[#FFFFFF] transition" to="/">
                                Our Company
                            </Link>
                            <Link className="text-[#FFFFFF] transition" to="/">
                                Career
                            </Link>
                            <Link className="text-[#FFFFFF] transition" to="/">
                                Investor Relations
                            </Link>
                            <Link className="text-[#FFFFFF] transition" to="/">
                                Social Impact
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <strong className="text-xl font-bold text-[#FFFFFF]"> Resources </strong>

                        <nav
                            aria-label="Footer About Nav"
                            className="mt-6 flex flex-col space-y-1"
                        >
                            <Link className="text-[#FFFFFF] transition" to="/">
                                Contact
                            </Link>
                            <Link className="text-[#FFFFFF] transition" to="/">
                                Give Feedback
                            </Link>
                            <Link className="text-[#FFFFFF] transition" to="/">
                                hello@example.com
                            </Link>
                        </nav>
                    </div>

                    <div>
                        <div className="relative max-w-lg">
                            <input
                                className="w-48 rounded-full bg-[#D9D9D9] py-3 px-2 text-[#FFFFFF]"
                                id="email"
                                type="email"
                                placeholder="ja@bir.com"
                            />

                            <button
                                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#6278FF] px-2 py-4 text-sm font-medium text-white transition hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </div>

                        <nav
                            aria-label="Footer Support Nav"
                            className="mt-6 flex flex-col space-y-1"
                        >
                            <Link className="text-[#FFFFFF]" href="/">
                                Email Us
                            </Link>

                            <Link className="text-[#FFFFFF]" href="/">
                                RK@Oama.io
                            </Link>

                            <Link className="text-[#FFFFFF]" href="/">
                                Bolomu All Rights Reserved, 2023
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;