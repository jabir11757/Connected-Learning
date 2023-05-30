import React from "react";
import Course_1 from "../../../images/home/course_1.png"
import Course_2 from "../../../images/home/course_2.png"
import Course_3 from "../../../images/home/course_3.png"
import Course_4 from "../../../images/home/course_4.png"
import Star from "../../../images/home/star.png"
import Best from "../../../images/home/best.png"
import { HiArrowSmallRight } from "react-icons/hi2";

const CourseList = () => {

    const courseData = [
        {
            image: Course_1,
            courseName: "UI/UX Design",
            price: "$312"
        },
        {
            image: Course_2,
            courseName: "CSS",
            price: "$662"
        },
        {
            image: Course_3,
            courseName: "Digital Marketing",
            price: "$132"
        },
        {
            image: Course_2,
            courseName: "Cyber Security",
            price: "$302"
        },
        {
            image: Course_1,
            courseName: "Web Development",
            price: "$332"
        },
        {
            image: Course_4,
            courseName: "Android Development",
            price: "$232"
        },
    ]

    return (
        <div className="bg-[#EDEEF3]">
            <div className="mt-16 ml-6">
                <h1 className="text-[#6278FF]">Course List</h1>
                <h1 className="text-[#161E49] text-3xl font-bold">Find your Perfect <br />Course</h1>
            </div>
            <div className="my-12">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        courseData.map(courses =>
                            <div className="bg-[#FFFFFF] rounded-xl mx-4">
                                <div className="w-full">
                                    <img className="mt-8 w-5/6 mx-auto" src={courses.image} alt="" />
                                </div>
                                <div className="flex justify-between mx-10 my-6">
                                    <div>
                                        <h1 className="text-xl font-bold text-[#161E49]">{courses.courseName}</h1>
                                    </div>
                                    <div className="flex">
                                        <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                        <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                        <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                        <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                        <img className="h-4 w-4 mt-1 " src={Star} alt="" />
                                    </div>
                                </div>
                                <div className="flex justify-between mx-10 my-4">
                                    <p className="text-[#6278FF] font-semibold">{courses.price}</p>
                                    <button className="bg-[#6278FF] text-[#ECEEF5] px-3 py-1 rounded-3xl">Book Now</button>
                                </div>
                                <div className="flex ml-8 my-4">
                                    <img src={Best} alt="" />
                                    <h1 className="mt-1">Best Seller</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <button className="flex bg-[#6278FF] text-[#ECEEF5] rounded-3xl px-6 py-1 mx-auto font-semibold">
                <p>View All</p>
                <HiArrowSmallRight className="mt-1 ml-2" />
            </button>
        </div>
    )
}

export default CourseList;