import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// / Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
  };

  const img1 = "https://res.cloudinary.com/dqescabbl/image/upload/v1726651251/1_hamwak.jpg";
  const img2 = "https://res.cloudinary.com/dqescabbl/image/upload/v1726651309/2_qdwfcg.jpg";
  const img3 = 'https://res.cloudinary.com/dqescabbl/image/upload/v1726651334/3_lqvibz.jpg';
  const img4 = 'https://res.cloudinary.com/dqescabbl/image/upload/v1726651366/4_ksehgy.jpg';
  const img5 = "https://res.cloudinary.com/dqescabbl/image/upload/v1726651396/5_wwysxu.jpg";
  const img6 = "https://res.cloudinary.com/dqescabbl/image/upload/v1726651425/6_nlkmu0.jpg";

  return (
    <div className="carousel w-full lg:h-[600px] h-[400px] rounded-xl scroll-smooth">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} className="w-full" />
          <div className="absolute  lg:h-full md:h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:w-1/2 lg:pl-12 md:pl-10 pl-5">
              <h2 className="text-4xl lg:text-6xl md:text-5xl  font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                <button className="btn btn-error ">Discover More</button>

                <button className="btn btn-outline btn-accent">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full" />
          <div className="absolute  lg:h-full md:h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:w-1/2 lg:pl-12 md:pl-10 pl-5">
              <h2 className="text-4xl lg:text-6xl md:text-5xl  font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                <button className="btn btn-error ">Discover More</button>

                <button className="btn btn-outline btn-accent">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="w-full" />
          <div className="absolute  lg:h-full md:h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:w-1/2 lg:pl-12 md:pl-10 pl-5">
              <h2 className="text-4xl lg:text-6xl md:text-5xl  font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                <button className="btn btn-error ">Discover More</button>

                <button className="btn btn-outline btn-accent">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full" />

          <div className="absolute  lg:h-full md:h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:w-1/2 lg:pl-12 md:pl-10 pl-5">
              <h2 className="text-4xl lg:text-6xl md:text-5xl  font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                <button className="btn btn-error ">Discover More</button>

                <button className="btn btn-outline btn-accent">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full" />

          <div className="absolute  lg:h-full md:h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:w-1/2 lg:pl-12 md:pl-10 pl-5">
              <h2 className="text-4xl lg:text-6xl md:text-5xl  font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                <button className="btn btn-error ">Discover More</button>

                <button className="btn btn-outline btn-accent">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full" />

          <div className="absolute  lg:h-full md:h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white lg:space-y-7 space-y-4 py-5 md:w-1/2 lg:w-1/2 lg:pl-12 md:pl-10 pl-5">
              <h2 className="text-4xl lg:text-6xl md:text-5xl  font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                <button className="btn btn-error ">Discover More</button>

                <button className="btn btn-outline btn-accent">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle className="bg-pink-400" cx="24" cy="24" r="30"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
