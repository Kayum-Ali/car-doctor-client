import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { GrSchedulePlay } from "react-icons/gr";

import { FcMissedCall } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-24">
            <hr className="my-3" />
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-red-500">Services</h2>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="lg:w-[700px] mx-auto opacity-80 font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

            <div className="mx-auto mt-5 mb-12 text-center font-bold ">
                <h2 className="btn btn-outline btn-error text-white">More Services</h2>
            </div>

            <div className="bg-[#151515] text-white rounded-xl mb-8">
                <div className="flex items-center flex-col lg:flex-row lg:space-y-0 space-y-12 justify-evenly px-12 py-16">

                    <div className="flex items-center gap-5">
                        <GrSchedulePlay className="text-4xl"></GrSchedulePlay>
                        <div>
                            <p className="opacity-80 text-xl font-medium">We are open monday-friday</p>
                            <h2 className="text-3xl font-bold mt-3">7:00 am - 9:00 pm</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <FcMissedCall className="text-5xl"></FcMissedCall>
                        <div>
                            <p className="opacity-80 text-xl font-medium">Have a question?</p>
                            <h2 className="text-3xl font-bold mt-3">+2546 251 2658</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-[40px] h-[40px] relative rounded-full bg-white ">
                        <GrLocation className="text-4xl absolute text-black top-1"></GrLocation>
                        </div>
                        
                        <div>
                            <p className="opacity-80 text-xl font-medium">Need a repair? our address</p>
                            <h2 className="text-3xl font-bold mt-3">Liza Street, New York</h2>
                        </div>
                    </div>

                    
                    

                </div>

            </div>




        </div>
    );
};

export default Services;