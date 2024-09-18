import { FaArrowRightLong } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const img =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1726651366/4_ksehgy.jpg";

  const style = {
    backgroundColor: "red",
    clipPath: "polygon(18% 81%, 79% 81%, 99% 100%, 0% 100%)",
  };

  return (
    <div>
      <div className="w-full lg:h-[500px] h-[400px] relative rounded-xl scroll-smooth my-10">
        <img src={img} className="w-full h-full rounded-xl " />
        <h2 className="absolute bottom-3  text-xl font-bold z-20 text-white left-1/2 -translate-x-1/2">
          Home/Service Details
        </h2>
        <div className="absolute  lg:h-full md:h-full w-full flex items-center  rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
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
          </div>

        </div>

        {/* right side */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4">
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
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
