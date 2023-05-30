import React from "react";
import Team_1 from "../../../images/home/team_1.png"
import Team_2 from "../../../images/home/team_2.png"
import Team_3 from "../../../images/home/team_3.png"
import Team_4 from "../../../images/home/team_4.png"

const Teams = () => {

    const teamData = [
        {
            image: Team_1,
            name: "Pushpa Kanon",
            designation: "CEO,Derhab"
        },
        {
            image: Team_2,
            name: "Lolona Khan",
            designation: "UI Designer"
        },
        {
            image: Team_3,
            name: "Jahangiri Khan",
            designation: "UI Designer"
        },
        {
            image: Team_4,
            name: "Mukayemi Sha",
            designation: "Developer"
        }
    ]

    return (
        <div className="flex justify-center bg-[#EDEEF3]">
            <div>
                <div className="mt-16">
                    <h1 className="text-[#6278FF] text-center">Team Member</h1>
                    <h1 className="text-[#161E49] text-center text-3xl font-bold">Popular Professional <br />Teachers</h1>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
                    {
                        teamData.map(data =>
                            <div>
                                <div className="">
                                    <img className="" src={data.image} alt="" />
                                </div>
                                <div className="relative mx-auto flex justify-center" style={{ backgroundColor: "#6278FF", width: "70%", padding: "25px", marginTop: "-150px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                                    <div>
                                        <h1 className="text-xl text-center text-[#ECEEF5] font-semibold">{data.name}</h1>
                                        <h1 className="text-[#ECEEF5] text-center">{data.designation}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Teams;