import React from "react";
import detailsImage from "../../../images/contact/detailImage.png"
const Details = () => {

    return (
        <div className="bg-[#FFFFFF]">
            <div className="my-6">
                <h1 className="text-[#6278FF] text-center font-semibold">Connect Us</h1>
                <h1 className="text-[#161E49] text-center text-3xl font-bold">Our Company  <br /> Contact Now</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
                <div className="mx-12">
                    <h1 className="text-2xl font-bold my-4">
                        Get In Touch With Us
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img className="-mt-20" src={detailsImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Details;