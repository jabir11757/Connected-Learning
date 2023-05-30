import React from "react";
import Ellips from "../../../images/home/Ellipse 1.png"
import Media from "../../../images/home/Mask group.png"
import Vector from "../../../images/home/Vector 1.png"
import Women from "../../../images/home/pngwing 3.png"
import Polygon1 from "../../../images/home/Polygon 1.png"
import Vector4 from "../../../images/home/Vector 4.png"
import Vector2 from "../../../images/home/Vector 2.png"
import Vector3 from "../../../images/home/Vector 3.png"
import Google from "../../../images/home/google.png"
import Microsoft from "../../../images/home/microsoft.png"
import Dribble from "../../../images/home/dribble.png"
import Lattice from "../../../images/home/lattice.png"


const Banner = () => {

    return (
        <div className="bg-[#EDEEF3]">
            <div className="grid lg:grid-cols-2 grid-cols-1 mx-6">
                <div className="mt-20">
                    <div>
                        <h1 className="text-5xl font-bold my-4">For Every Student</h1>
                        <h1 className="text-5xl font-bold my-4">Every Classroom.</h1>
                        <h1 className="text-5xl font-bold my-4 text-[#6278FF]">Real Results.</h1>
                        <p className="text-sm my-8">
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                            and I will give you a completeLorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusm
                        </p>
                        <div className="flex my-2">
                            <button className="bg-[#6278FF] text-[#ECEEF5] font-semibold rounded-3xl px-6 py-2">Get Started</button>
                            <div className="flex mx-4">
                                <button className="">
                                    <div className="flex">
                                        <img className="relative h-10" src={Ellips} alt="" />
                                        <img className="h-full mt-3" src={Media} alt="" />
                                    </div>
                                </button>
                                <h1 className="font-semibold mt-2 mx-2">Watch Video</h1>
                            </div>
                        </div>
                        <div className="-ml-64 mt-10">
                            <img src={Vector} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div>
                        <img className="absolute" src={Polygon1} alt="" />
                        <div className="relative">
                            <div className="relative">
                                <img className="h-[615px] w-[490px]" src={Women} alt="" />
                            </div>
                            <div className="-mt-[490px] h-[555px] w-[555px] ms-20 rounded-full bg-[#76B9E0]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8">
                <div className="flex h-32 bg-[#FFFFFF]">
                    <img className="h-full mx-12" src={Google} alt="" />
                    <img className="h-10 my-12 mx-12" src={Microsoft} alt="" />
                    <img className="h-20 my-8 mx-12" src={Dribble} alt="" />
                    <img className="h-24 my-6 mx-12" src={Lattice} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner;