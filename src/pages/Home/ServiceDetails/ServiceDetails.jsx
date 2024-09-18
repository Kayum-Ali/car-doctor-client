import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const img = 'https://res.cloudinary.com/dqescabbl/image/upload/v1726651366/4_ksehgy.jpg'

  const style = {
   
    
  
    backgroundColor: "red",
   
    clipPath: "polygon(18% 81%, 79% 81%, 99% 100%, 0% 100%)",
  };

  return (
    <div>
      <div className="w-full lg:h-[500px] h-[400px] relative rounded-xl scroll-smooth my-10">
        <img src={img} className="w-full h-full rounded-xl " />
        <h2 className="absolute bottom-3  text-xl font-bold z-20 text-white left-1/2 -translate-x-1/2">Home/Service Details</h2>
        <div className="absolute  lg:h-full md:h-full w-full flex items-center  rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <h2 className="w-full text-white text-7xl pl-8">Service Details</h2>
           
        </div>
        <div style={style} className="absolute bottom-0 -translate-x-1/2 h-[300px] w-[300px] left-1/2">
              
            </div>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-3 py-5">
        <div className="col-span-1 md:col-span-2 lg:col-span-8">
           <div className="relative">
               <img className="w-full h-[400px] rounded-xl" src={data.img} alt="" />
                 <div className="absolute  lg:h-full md:h-full w-full flex items-center  left-0 top-0 rounded-xl bg-gradient-to-r from-[#15151580] to-[rgba(21, 21, 21, 0)]">
                    
               </div>
           </div>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-4">

        </div>
     </div>
    </div>
  );
};

export default ServiceDetails;
