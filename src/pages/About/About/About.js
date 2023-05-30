import React from "react";
import Economy from "./Economy/Economy";
import AllTeams from "../AllTeams/AllTeams";
import AboutBanner from "./AboutBanner/AboutBanner";
import WhyUs from "./WhyUs/WhyUs";

const About = () => {

    return (
        <div>
            <AboutBanner />
            <WhyUs />
            <Economy />
            <AllTeams />
        </div>
    )
}

export default About;