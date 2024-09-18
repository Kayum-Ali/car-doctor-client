import { Link, useLoaderData } from "react-router-dom";

const Chekout = () => {
  const data = useLoaderData();
  const img =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1726651366/4_ksehgy.jpg";

  const style = {
    backgroundColor: "red",
    clipPath: "polygon(18% 81%, 79% 81%, 99% 100%, 0% 100%)",
  };

  return (
    <div>
      <div className="w-full lg:h-[400px] h-[400px] relative rounded-xl scroll-smooth my-10">
        <img src={img} className="w-full h-full rounded-xl " />
        <h2 className="absolute bottom-3  lg:text-xl font-bold z-20 text-white left-1/2 -translate-x-1/2">
          Home/Service Details/Check Out
        </h2>
        <div className="absolute  lg:h-full md:h-full h-full w-full flex items-center  rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h2 className="w-full text-white text-7xl pl-8">Check Out</h2>
        </div>
        <div
          style={style}
          className="absolute bottom-0 -translate-x-1/2 h-[400px] w-[420px] left-1/2"
        ></div>
      </div>

      <div className="bg-[#F3F3F3] p-20 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 gap-5">
            <div className="col-span-6">
                 <input type="text" placeholder="Name" name="name" className="outline-none px-5 py-4 text-xl bg-white rounded-xl w-full" />
            </div>
            <div className="col-span-6">
                 <input type="text" placeholder="Name" name="name" className="outline-none px-5 py-4 text-xl bg-white rounded-xl w-full" />
            </div>
            <div className="col-span-6">
                 <input type="email" placeholder="Email" name="email" className="outline-none px-5 py-4 text-xl bg-white rounded-xl w-full" />
            </div>
            <div className="col-span-6">
                 <input type="password" placeholder="Password" name="password" className="outline-none px-5 py-4 text-xl bg-white rounded-xl w-full" />
            </div>
            <div className="col-span-12 ">
                 <textarea type="text" rows={8} placeholder=" your Message" className="outline-none px-5 py-4 text-xl placeholder-green-600 bg-white rounded-xl w-full" />
            </div>
            <div className="col-span-12">
                    <Link to={``}>
                    <button className="bg-[#FF3811] py-2.5 text-white font-bold w-full rounded-xl mt-3 text-2xl ">Order Confirm</button>
                </Link>
            </div>
             
        </div>
           
      </div>
    </div>
  );
};

export default Chekout;
