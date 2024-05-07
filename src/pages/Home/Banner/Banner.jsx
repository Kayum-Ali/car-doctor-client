

const Banner = () => {

    const img1 = 'https://i.ibb.co/xHytvLN/1.jpg';
    const img2 = 'https://i.ibb.co/TKM0pwy/2.jpg';
    // const img3 = 'https://i.ibb.co/R9Xqfrm/3.jpg';
    // const img4 = 'https://i.ibb.co/Jy5gvFF/4.jpg';
    const img5 = 'https://i.ibb.co/RgK7F6m/5.jpg';
    const img6 = 'https://i.ibb.co/d6Nr0H8/6.jpg';
    return (
        <div className="carousel w-full h-[600px] rounded-xl scroll-smooth">

            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <div className="text-white space-y-7 w-1/2 pl-12">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>

                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-5 bottom-0">

                    <a href="#slide4" className="w-[50px] rounded-full flex justify-center items-center h-[50px] bg-slate-300 focus:bg-red-400 ">❮</a>

                    <a href="#slide2" className="w-[50px] rounded-full flex justify-center items-center h-[50px] bg-slate-300 focus:bg-red-400 ">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <div className="text-white space-y-7 w-1/2 pl-12">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>

                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>



                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">

                    <a href="#slide1" className="w-[50px] rounded-full flex justify-center items-center h-[50px] bg-slate-300 focus:bg-red-400 ">❮</a>

                    <a href="#slide3" className="w-[50px] rounded-full flex justify-center items-center h-[50px] bg-slate-300 focus:bg-red-400 ">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <div className="text-white space-y-7 w-1/2 pl-12">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>

                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>



                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide2" className="w-[50px] rounded-full flex justify-center items-center h-[50px] bg-slate-300 focus:bg-red-400 ">❮</a>

                    <a href="#slide4" className="w-[50px] rounded-full flex justify-center items-center h-[50px] bg-slate-300 focus:bg-red-400 ">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />

                <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <div className="text-white space-y-7 w-1/2 pl-12">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>

                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>



                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="w-[50px] rounded-full flex justify-center items-center h-[50px] bg-slate-300 focus:bg-red-400 ">❮</a>

                    <a href="#slide1" className="w-[50px] rounded-full flex justify-center items-center h-[50px] bg-slate-300 focus:bg-red-400 ">❯</a>
                </div>
            </div>

            
        </div>
    );
};

export default Banner;