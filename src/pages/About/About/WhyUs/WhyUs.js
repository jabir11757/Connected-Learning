import React from "react";
import { HiOutlineCircleStack, HiOutlineBuildingOffice2, HiOutlineComputerDesktop } from "react-icons/hi2";

const WhyUs = () => {

    return (
        <div className="bg-[#EDEEF3] my-12">
            <div className="my-6">
                <h1 className="text-[#161E49] text-center text-3xl font-bold">Whu Us ?</h1>
                <h2 className="text-center text-[#262830] mb-4">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo <br /> piece of classical Latin
                    literature from 45 BC, making it over 2000 years old. Ri <br /> chard McClintock, a Latin profes
                </h2>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex justify-center px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiOutlineBuildingOffice2 className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl text-[#161E49] text-center font-semibold mt-4">Guest Experience</h1>
                        <p className="text-center mt-4">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roopiece of
                            classical Latin liter ature from 45 BC,
                            making it over 2000 years old. Ri chard McClintock, a Latin profes
                        </p>
                    </div>
                </div>
                <div className="flex justify-center px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiOutlineCircleStack className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl text-[#161E49] text-center font-semibold mt-4">Dedicated Team</h1>
                        <p className="text-center mt-4">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roopiece of
                            classical Latin liter ature from 45 BC,
                            making it over 2000 years old. Ri chard McClintock, a Latin profes
                        </p>
                    </div>
                </div>
                <div className="flex justify-center px-10 py-16 rounded-md">
                    <div>
                        <div className="flex justify-center">
                            <HiOutlineComputerDesktop className="h-10 w-10 text-[#6278FF]" />
                        </div>
                        <h1 className="text-xl text-[#161E49] text-center font-semibold mt-4">Flexible Pricing</h1>
                        <p className="text-center mt-4">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roopiece of
                            classical Latin liter ature from 45 BC,
                            making it over 2000 years old. Ri chard McClintock, a Latin profes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;