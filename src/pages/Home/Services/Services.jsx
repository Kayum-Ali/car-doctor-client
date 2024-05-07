import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-24">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-red-500">Services</h2>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="lg:w-[700px] mx-auto opacity-80 font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard> )
                }
            </div>


        </div>
    );
};

export default Services;