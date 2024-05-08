

const ChooseUs = () => {
    const img1 = 'https://i.ibb.co/hVmvbtq/Group-71.jpg';
    const img2 = 'https://i.ibb.co/QQ9M9T6/Group-38729.png';
    const img3 = 'https://i.ibb.co/2jsfR8v/Group.jpg';
    const img4 = 'https://i.ibb.co/FHtkrmz/Wrench.jpg';
    const img5 = 'https://i.ibb.co/n3yFZY2/Group-38731.jpg';
    const img6 = 'https://i.ibb.co/zG8FX9h/410711579-689088426664368-2757672026851321301-n.jpg';

    return (
        <div>
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-red-500">Core Features</h2>
                <h2 className="text-5xl font-bold">Why Choose Us</h2>
                <p className="lg:w-[700px] mx-auto opacity-80 font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.   </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6  gap-5 my-8 ">
                <div className="border rounded-xl p-8 hover:bg-[#FF3811] hover:text-white mx-auto  flex flex-col justify-center items-center">
                    <img className=" lg:w-[75px]    rounded-xl" src={img1} alt="" />
                    <p  className="mt-3">Expert Team</p>
                </div>

                <div className="border rounded-xl mx-auto p-8 hover:bg-[#FF3811] hover:text-white flex flex-col justify-center items-center">
                    <img className="bg-black rounded-xl lg:w-[75px] " src={img2} alt="" />
                    <p  className="mt-3">Timely Delivery</p>
                </div>

                <div className="border rounded-xl mx-auto-xl p-8 hover:bg-[#FF3811] hover:text-white  flex flex-col justify-center items-center">
                    <img className="lg:w-[75px]   rounded-xl" src={img3} alt="" />
                    <p  className="mt-3">24/7 Support</p>
                </div>

                <div className="border rounded-xl mx-auto p-8 hover:bg-[#FF3811] hover:text-white  flex flex-col justify-center items-center">
                    <img className="lg:w-[75px]   rounded-xl" src={img4} alt="" />
                    <p  className="mt-3">Best Equipment</p>
                </div>

                <div className="border rounded-xl mx-auto p-8 hover:bg-[#FF3811] hover:text-white  flex flex-col justify-center items-center">
                    <img className="lg:w-[75px]  rounded-xl" src={img5} alt="" />
                    <p  className="mt-3">Timely Delivery</p>
                </div>

                <div className="border rounded-xl mx-auto p-8 hover:bg-[#FF3811] hover:text-white  flex flex-col justify-center items-center">
                    <img className="lg:w-[75px]   rounded-xl" src={img6} alt="" />
                    <p className="mt-3">100% Guranty</p>
                </div>

            </div>
            
        </div>
    );
};

export default ChooseUs;