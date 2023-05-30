import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import Rectangle from "../../../images/home/Rectangle.png"
import Star from "../../../images/home/star.png"


const Testimonial = () => {

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-24">
                <div className="mx-12">
                    <div className="my-6">
                        <h1 className="text-[#6278FF] font-semibold">Testimonial</h1>
                        <h1 className="text-[#161E49] text-3xl font-bold">What They Say?</h1>
                    </div>
                    <p className="my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                        smod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in repreh

                        enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum."
                    </p>
                    <div className="flex justify-between items-center px-2 my-4 text-start text-[#6278FF] font-semibold h-12 w-96 border-4 rounded-full border-[#6278FF]">
                        <p >Write Your Assessment</p>
                        <HiArrowSmallRight className="h-8 w-10 border-4 rounded-full border-[#6278FF]" />
                    </div>
                </div>

                <div>
                    <img className="h-80 w-80" src={Rectangle} alt="" />
                    <div className="absolute h-52 w-96 -mt-32 ml-60 bg-[#EDEEF3] p-4 border-x-8 border-[#6278FF]">
                        <div>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in repreh
                            </p>
                            <div className="flex justify-between my-4">
                                <div>
                                    <h1 className="font-bold text-[#161E49]">Ruksana Akter</h1>
                                </div>
                                <div className="flex">
                                    <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                    <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                    <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                    <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                    <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;