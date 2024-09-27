
import { FaArrowRightLong } from "react-icons/fa6";
import { PiSimCardDuotone } from "react-icons/pi";
import { Link,  useLoaderData,  } from "react-router-dom";



const ServiceDetails = () => {
  const data = useLoaderData();

  // const location = useLocation()
  // console.log(location.pathname, location)


 
  const img =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1726651366/4_ksehgy.jpg";
    document.title= `Service Details || ${data.title}`

  const style = {
    backgroundColor: "red",
    clipPath: "polygon(18% 81%, 79% 81%, 99% 100%, 0% 100%)",
  };

  return (
    <div className="px-3 lg:px-0">
      <div className="w-full lg:h-[500px] h-[400px] relative rounded-xl scroll-smooth my-10">
        <img src={img} className="w-full h-full rounded-xl " />
        <h2 className="absolute bottom-3  lg:text-xl font-bold z-20 text-white left-1/2 -translate-x-1/2">
          Home/Service Details
        </h2>
        <div className="absolute  lg:h-full md:h-full h-full w-full flex items-center  rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h2 className="w-full text-white text-7xl pl-8">Service Details</h2>
        </div>
        <div
          style={style}
          className="absolute bottom-0 -translate-x-1/2 h-[300px] w-[300px] left-1/2"
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-3 py-5">
        <div className="col-span-1 md:col-span-2 lg:col-span-8">
          <div className="relative">
            <img
              className="w-full h-[400px] rounded-xl"
              src={data.img}
              alt=""
            />
            <div className="absolute  lg:h-full md:h-full w-full flex items-center  left-0 top-0 rounded-xl bg-gradient-to-r from-[#15151580] to-[rgba(21, 21, 21, 0)]"></div>
          </div>

          <div className="p-3 space-y-3">
            <h2 className="text-3xl font-bold ">Unique Car Engine Service</h2>
            <p className="opacity-80  font-medium">{data.description}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
                {
                    data.facility?.map((title, idx) => (
                        <div key={idx} className="bg-[#F3F3F3] rounded-xl p-8 space-y-2 border-t-[5px] border-t-[#FF3811]">
                           <h2 className="text-xl font-bold">{title.name}</h2>
                          <p className="opacity-80">{title.details}</p>
 
                     </div>
                    ))
                }
            </div>
            <p className="opacity-80  font-medium">{data.description}</p>
          </div>

          {/* 3 steps */}
          <div className="p-3 space-y-2">
            <h2 className="text-3xl font-bold ">3 Simple Steps to Process</h2>
             <p className="opacity-80  font-medium">{data.description}</p>
             <div className="flex flex-col lg:flex-row gap-5">

                  <div className="border text-center px-8 py-5 space-y-2 rounded-xl">
                      <span className="text-white bg-red-500 border-[12px] border-[#FFEBE7] rounded-full w-20 h-20 flex justify-center p-3 items-center mx-auto">01</span>
                      <h2 className="text-xl font-medium">Step One</h2>
                      <p>It uses a dictionary of over 200 .</p>
                  </div>
                  <div className="border text-center px-8 py-5 space-y-2 rounded-xl">
                      <span className="text-white bg-red-500 border-[12px] border-[#FFEBE7] rounded-full w-20 h-20 flex justify-center p-3 items-center mx-auto">02</span>
                      <h2 className="text-xl font-medium">Step Two</h2>
                      <p>It uses a dictionary of over 200 .</p>
                  </div>
                  <div className="border text-center px-8 py-5 space-y-2 rounded-xl">
                      <span className="text-white bg-red-500 border-[12px] border-[#FFEBE7] rounded-full w-20 h-20 flex justify-center p-3 items-center mx-auto">03</span>
                      <h2 className="text-xl font-medium">Step three</h2>
                      <p>It uses a dictionary of over 200 .</p>
                  </div>
             </div>
          </div>

          {/* modals with video  */}
          <div className="p-3">
              <div>
                  <img className="rounded-xl" src="https://res.cloudinary.com/dqescabbl/image/upload/v1726651309/2_qdwfcg.jpg" alt="" />
              </div>
            

          </div>

        </div>

        {/* right side */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4 ">
          <div className="bg-[#F3F3F3] rounded-xl p-8">
            <h2 className="text-2xl font-bold">Services</h2>
            <div className="hover:bg-[#FF3811] bg-white px-5 rounded-xl py-2.5 flex items-center justify-between mt-5 *:hover:text-white">
              <h2 className="text-xl text-black ">{data.title}</h2>
              <FaArrowRightLong className="text-red-600 " />
            </div>
            {data.facility?.map((title, idx) => (
              <div key={idx}>
                <div className="hover:bg-[#FF3811] bg-white px-5 rounded-xl py-2.5 flex items-center justify-between mt-5 *:hover:text-white">
                  <h2 className="text-xl text-black ">{title.name}</h2>
                  <FaArrowRightLong className="text-red-600 " />
                </div>
              </div>
            ))}
          </div>

          {/* black div */}
          <div className="bg-black rounded-xl p-8 space-y-4 mt-5"> 
            <h2 className="text-white text-2xl font-bold mb-3">Download</h2>
            <div className="flex justify-between">
                <div className="text-white flex items-center gap-3">
                   <PiSimCardDuotone className="text-xl"/>
                   <div>
                      <h2 className="e font-bold text-xl">Our Brochure</h2>
                      <p className=" ">Download</p>
                   </div>
                </div>
                <div>
                    <FaArrowRightLong className="text-white text-5xl bg-[#FF3811] py-2.5 px-3 rounded-xl"></FaArrowRightLong>
                </div>

            </div>

            <div className="flex justify-between">
                <div className="text-white flex items-center gap-3">
                   <PiSimCardDuotone className="text-xl"/>
                   <div>
                      <h2 className="e font-bold text-xl">Company name</h2>
                      <p className=" ">Download</p>
                   </div>
                </div>
                <div>
                    <FaArrowRightLong className="text-white text-5xl bg-[#FF3811] py-2.5 px-3 rounded-xl"></FaArrowRightLong>
                </div>

            </div>

          </div>


          {/* another black div with logo */}
          <div className="bg-black rounded-xl p-10 mt-5 space-y-3">
              <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1726672802/Group_2_beaneu.png" className="mx-auto" alt="" />
              <h2 className="text-center text-white text-xl">Need Help? We Are Here <br />
              To Help You</h2>
              <div className="bg-white rounded-xl py-10 px-5 text-center relative">
                    <h2 className="text-2xl font-bold"><span className="text-[#FF3811]">Car Doctor</span> special</h2>
                    <h2 className="font-medium">save up to <span className="text-[#FF3811] text-xl">60 % of</span></h2>
                    <div className="bg-[#FF3811] rounded-xl w-1/2 mx-auto py-5  text-white font-bold absolute left-1/2 -bottom-8 -translate-x-1/2">
                        <h2>Get A Quote</h2>

                    </div>
              </div>
              

          </div>

          <div className="p-3">
             <h2 className="text-4xl font-bold">Price : ${data.price}</h2>
          
             <Link to={`/checkout/${data._id}`}>
            <button className="bg-[#FF3811] py-2.5 text-white font-bold w-full rounded-xl mt-3">Proceed Checkout</button>
            </Link>  
          
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
