import React from "react";
import Rectangle6 from "../../../images/home/Rectangle 6.png"
import Rectangle7 from "../../../images/home/Rectangle 7.png"

const AboutUs = () => {

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 h-100 w-100 my-12">
            <div className="">
                <div className="flex justify-end">
                    <img className="" src={Rectangle7} alt="" />
                </div>
                <img className="relative -mt-36 -ml-10" src={Rectangle6} alt="" />
            </div>
            <div className="mx-12">
                <div className="mt-12">
                    <h1 className="text-[#6278FF] font-semibold my-4">About Us</h1>
                    <h2 className="text-[#161E49] text-3xl font-bold my-4">
                        We are providing the best <br />online digital courses.
                    </h2>
                    <p className="mt-10">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo
                        piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri
                        chard McClintock, a Latin professor at Hampden-Sydney College in Virginia, l
                        ooked up one of the more obscure Latin words, consectetur, from a Lorem Ips
                        um passage, and going through the cites of the word in classical literature, di
                        scovered the undoubtable source.
                    </p>
                    <p className="mt-6">
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonoru
                        et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                        book is a treatise on.
                    </p>
                    <button className="text-[#ECEEF5] font-semibold bg-[#6278FF] px-4 py-1 rounded-3xl mt-6">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;