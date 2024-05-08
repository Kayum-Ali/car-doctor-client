import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { TfiLinkedin } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";

const Team = () => {
    const [teams,setTeam] = useState([])
    useEffect(()=>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-red-500">Team</h2>
                <h2 className="text-5xl font-bold">Meet Our Team</h2>
                <p className="lg:w-[700px] mx-auto opacity-80 font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.   </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {
                    teams.map((team) => <div key={team.id} className="border rounded-xl p-4">
                        <div>
                            <img className="rounded-xl h-[300px] w-full" src={team.img} alt="" />
                        </div>
                        <div className="text-center my-3">
                            <h2 className="text-2xl font-bold ">{team.title}</h2>
                            <p className="opacity-80 font-medium">{team.designation}</p>

                        </div>
                        <div className="text-white flex gap-5 justify-center mt-5">
                            <FaFacebookF className="bg-[#395185] p-2 text-4xl rounded-full "></FaFacebookF>

                            <SlSocialTwitter className="bg-[#55ACEE]  p-2 text-4xl rounded-full "></SlSocialTwitter>
                            <TfiLinkedin className="bg-[#0C86E3]  p-2 text-4xl rounded-full "></TfiLinkedin>
                            <BsInstagram className="bg-[#DC4476]  p-2 text-4xl rounded-full "></BsInstagram>
                        </div>

                    </div>)
                }
              
            </div>
            <hr className="my-3" />


        </div>
    );
};

export default Team;