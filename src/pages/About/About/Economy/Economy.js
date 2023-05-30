import React from "react";
import economyImage from "../../../../images/about/economy.png"

const Economy = () => {

    return (
        <div className="bg-[#FFFFFF]">
            <div className="grid grid-cols-1 lg:grid-cols-2 my-24">
                <div className="mx-12">
                    <div className="my-6">
                        <h1 className="text-[#6278FF] font-semibold">Economy</h1>
                        <h1 className="text-[#161E49] text-3xl font-bold">Build Better For Best <br /> Economy</h1>
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
                    <button className="flex justify-between items-center px-6 py-2 my-4 bg-[#6278FF] text-[#FFFFFF] font-semibold rounded-full">
                        Join Our Team
                    </button>
                </div>

                <div className="flex justify-center">
                    <img className="h-96 w-96" src={economyImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Economy;