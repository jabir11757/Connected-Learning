import React from "react";
import { HiCamera, HiHomeModern, HiOutlineCircleStack, HiLockClosed, HiOutlineBuildingOffice2, HiOutlineComputerDesktop, HiOutlineCpuChip, HiPencilSquare } from "react-icons/hi2";

const Categories = () => {

    return (
        <div className="bg-[#FFFFFF] my-12">
            <div className="my-6">
                <h1 className="text-[#6278FF] font-semibold">Service</h1>
                <h2 className="text-3xl font-bold mb-4">Top <br />Categories</h2>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex justify-center bg-[#EDEEF3] px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiOutlineBuildingOffice2 className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl font-semibold mt-4">Development</h1>
                    </div>
                </div>
                <div className="flex justify-center bg-[#EDEEF3] px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiOutlineCircleStack className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl font-semibold mt-4">Business</h1>
                    </div>
                </div>
                <div className="flex justify-center bg-[#EDEEF3] px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiOutlineComputerDesktop className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl font-semibold mt-4">IT & Software</h1>
                    </div>
                </div>
                <div className="flex justify-center bg-[#EDEEF3] px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiOutlineCpuChip className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl font-semibold mt-4">UI Design</h1>
                    </div>
                </div>
                <div className="flex justify-center bg-[#EDEEF3] px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiHomeModern className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl font-semibold mt-4">Marketing</h1>
                    </div>
                </div>
                <div className="flex justify-center bg-[#EDEEF3] px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiCamera className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl font-semibold mt-4">Photography</h1>
                    </div>
                </div>
                <div className="flex justify-center bg-[#EDEEF3] px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiPencilSquare className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl font-semibold mt-4">Graphics Design</h1>
                    </div>
                </div>
                <div className="flex justify-center bg-[#EDEEF3] px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiLockClosed className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl font-semibold mt-4">Cyber Security</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;