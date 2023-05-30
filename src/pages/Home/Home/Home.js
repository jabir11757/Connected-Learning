import React from "react";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import CourseList from "../CourseList/CourseList";
import Categories from "../Categories/Categories";
import Teams from "../Teams/Teams";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {

    return (
        <div>
            <Banner />
            <AboutUs />
            <CourseList />
            <Categories />
            <Teams />
            <Testimonial />
        </div>
    )
}

export default Home;