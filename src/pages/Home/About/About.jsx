

const About = () => {
    const img1= 'https://i.ibb.co/DfX4mN2/person.jpg'
    const img2= 'https://i.ibb.co/xzfNjKf/parts.jpg'
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 my-14 py-10">
            {/* img div */}
            <div className="col-span-5 relative">
                <img className="rounded-xl " src={img1} alt="" />
                <img className=" absolute -bottom-14 border-[10px] border-white rounded-xl  -right-16  w-[300px] h-[300px]" src={img2} alt="" />
            </div>
            {/* content div */}
            <div className="col-span-7 ml-5">
                <p className="text-red-500 font-medium mb-5">About us</p>
                <h1 className="font-bold text-5xl w-[376px] ">We are qualified & of experience in this field</h1>
                <p className=" mt-8  w-[489px] opacity-80 font-medium ml-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>

                <p className="mt-8 w-[489px] opacity-80 font-medium ml-3">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
               
                <button className="bg-[#FF3811] px-4 py-2 mt-5 text-white rounded-xl">Get More Info</button>
            </div>
            
            
        </div>
    );
};

export default About;