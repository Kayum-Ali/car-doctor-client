

import quats from '../../../assets/quote.svg'

const Testimonial = () => {

  const data = [
    {
      "id": 1,
      "author_name": "John Doe",
      "author_img": "https://i.ibb.co/zNdxccv/download-3.jpg",
      "post_name": "Businessman",
      "description": "Embark on a mesmerizing journey through space and time, as John Doe, a passionate astrophysicist, unveils the wonders of our universe. From the majestic galaxies to the mysterious black holes, dive deep into the realms of cosmic beauty and scientific discovery."
    },
    {
      "id": 2,
      "author_name": "Jane Smith",
      "author_img": "https://i.ibb.co/MnRhyW0/download-2.jpg",
      "post_name": "The Art of Cooking",
      "description": "Indulge your senses and ignite your culinary creativity with Jane Smith, an acclaimed chef, as she shares her passion for the art of cooking. From mouthwatering recipes passed down through generations to innovative culinary experiments, join Jane on a gastronomic adventure that will tantalize your taste buds and inspire your kitchen endeavors."
    },
    {
      "id": 3,
      "author_name": "Michael Johnson",
      "author_img": "https://i.ibb.co/LJm9Sbv/images-3.jpg",
      "post_name": "Fitness Lifestyle",
      "description": "Transform your body, mind, and spirit with Michael Johnson, a seasoned fitness coach, as he guides you on a journey toward optimal health and well-being. Discover the power of exercise, nutrition, and mindfulness practices to sculpt your physique, boost your energy levels, and unleash your full potential."
    },
    {
      "id": 4,
      "author_name": "Emily Brown",
      "author_img": "https://i.ibb.co/6mnwxwC/images-2.jpg",
      "post_name": "Travel Diaries",
      "description": "Embark on an exhilarating adventure around the globe with Emily Brown, an intrepid traveler, as she chronicles her awe-inspiring experiences and unforgettable encounters. From the bustling streets of vibrant cities to the serene landscapes of remote corners of the world, join Emily on a journey of discovery, exploration, and cultural immersion."
    },
    {
      "id": 5,
      "author_name": "David Lee",
      "author_img": "https://i.ibb.co/GJ2x4QT/download-1.jpg",
      "post_name": "Tech Talks",
      "description": "Stay ahead of the curve in the fast-paced world of technology with David Lee, a tech enthusiast and industry expert, as he unpacks the latest trends, breakthroughs, and innovations shaping our digital future. From cutting-edge gadgets to groundbreaking scientific discoveries, join David for insightful discussions and in-depth analyses that will keep you informed and inspired."
    },
    {
      "id": 6,
      "author_name": "Sarah Johnson",
      "author_img": "https://i.ibb.co/FYHd3nc/images-1.jpg",
      "post_name": "Healthy Living",
      "description": "Nurture your body, mind, and soul with Sarah Johnson, a holistic wellness coach, as she shares her wisdom and practical tips for embracing a balanced and fulfilling lifestyle. From nutritious recipes to invigorating workouts and mindfulness practices, embark on a journey toward optimal health, vitality, and happiness with Sarah as your guide."
    },
    {
      "id": 7,
      "author_name": "Robert Smith",
      "author_img": "https://i.ibb.co/s5kgvrM/download.jpg",
      "post_name": "Financial Freedom",
      "description": "Take control of your financial destiny and unlock the path to financial freedom with Robert Smith, a seasoned investor and financial strategist, as he demystifies the world of personal finance and wealth management. From savvy budgeting tips to savvy investment strategies, join Robert on a journey toward financial empowerment, security, and abundance."
    },
    {
      "id": 8,
      "author_name": "Olivia Garcia",
      "author_img": "https://i.ibb.co/F582B5B/images.jpg",
      "post_name": "Art Appreciation",
      "description": "Immerse yourself in the captivating world of art with Olivia Garcia, an art historian and curator, as she unveils the rich tapestry of artistic expression spanning centuries and continents. From iconic masterpieces to groundbreaking contemporary works, embark on a visual journey that will deepen your appreciation for the beauty, complexity, and significance of art in our lives."
    }
  ]



  return (
    <div className="my-24">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-red-500">Testimonial</h2>
        <h2 className="text-5xl font-bold">What Customer Says</h2>
        <p className="lg:w-[700px] mx-auto opacity-80 font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.   </p>
      </div>



      {/* slider */}
      <div>
        <div className="carousel w-full">
          <div id="slide5" className="carousel-item relative w-full">
            <div className='flex gap-5 p-16 flex-col lg:flex-row'>
                  {/* 1st div */}
               <div className='border rounded-xl p-10'>
                  <div className="flex items-center gap-5">
                     <img className="rounded-full w-[100px]" src={data[0].author_img} alt="" />
                  <div>
                       <h2 className='text-xl font-bold'>{data[0].author_name}</h2>
                       <h2 className='text-red-500'>{data[0].post_name}</h2>
                  </div>
                     <img className='w-[50px] ml-20' src={quats} alt="" />
                </div>
                    <p className='opacity-80 my-5'>{data[0].description}</p>
                <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
              {/* 2nd div */}
              <div className='border rounded-xl p-10'>
                  <div className="flex items-center gap-5">
                     <img className="rounded-full w-[100px]" src={data[1].author_img} alt="" />
                  <div>
                       <h2 className='text-xl font-bold'>{data[1].author_name}</h2>
                       <h2 className='text-red-500'>{data[1].post_name}</h2>
                  </div>
                     <img className='w-[50px] ml-20' src={quats} alt="" />
                </div>
                    <p className='opacity-80 my-5'>{data[1].description}</p>
                <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>


             
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide8" className="btn btn-circle">❮</a>
              <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide6" className="carousel-item relative w-full">
           
          <div className='flex gap-5 p-16 flex-col lg:flex-row'>
                  {/* 1st div */}
               <div className='border rounded-xl p-10'>
                  <div className="flex items-center gap-5">
                     <img className="rounded-full w-[100px]" src={data[2].author_img} alt="" />
                  <div>
                       <h2 className='text-xl font-bold'>{data[2].author_name}</h2>
                       <h2 className='text-red-500'>{data[2].post_name}</h2>
                  </div>
                     <img className='w-[50px] ml-20' src={quats} alt="" />
                </div>
                    <p className='opacity-80 my-5'>{data[2].description}</p>
                <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
              {/* 2nd div */}
              <div className='border rounded-xl p-10'>
                  <div className="flex items-center gap-5">
                     <img className="rounded-full w-[100px]" src={data[3].author_img} alt="" />
                  <div>
                       <h2 className='text-xl font-bold'>{data[3].author_name}</h2>
                       <h2 className='text-red-500'>{data[3].post_name}</h2>
                  </div>
                     <img className='w-[50px] ml-20' src={quats} alt="" />
                </div>
                    <p className='opacity-80 my-5'>{data[3].description}</p>
                <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>


             
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">❮</a>
              <a href="#slide7" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
          <div className='flex gap-5 p-16 flex-col lg:flex-row'>
                  {/* 1st div */}
               <div className='border rounded-xl p-10'>
                  <div className="flex items-center gap-5">
                     <img className="rounded-full w-[100px]" src={data[4].author_img} alt="" />
                  <div>
                       <h2 className='text-xl font-bold'>{data[4].author_name}</h2>
                       <h2 className='text-red-500'>{data[4].post_name}</h2>
                  </div>
                     <img className='w-[50px] ml-20' src={quats} alt="" />
                </div>
                    <p className='opacity-80 my-5'>{data[4].description}</p>
                <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
              {/* 2nd div */}
              <div className='border rounded-xl p-10'>
                  <div className="flex items-center gap-5">
                     <img className="rounded-full w-[100px]" src={data[5].author_img} alt="" />
                  <div>
                       <h2 className='text-xl font-bold'>{data[5].author_name}</h2>
                       <h2 className='text-red-500'>{data[5].post_name}</h2>
                  </div>
                     <img className='w-[50px] ml-20' src={quats} alt="" />
                </div>
                    <p className='opacity-80 my-5'>{data[5].description}</p>
                <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>


             
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" className="btn btn-circle">❮</a>
              <a href="#slide8" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide8" className="carousel-item relative w-full">
          <div className='flex gap-5 p-16 flex-col lg:flex-row'>
                  {/* 1st div */}
               <div className='border rounded-xl p-10'>
                  <div className="flex items-center gap-5">
                     <img className="rounded-full w-[100px]" src={data[6].author_img} alt="" />
                  <div>
                       <h2 className='text-xl font-bold'>{data[6].author_name}</h2>
                       <h2 className='text-red-500'>{data[6].post_name}</h2>
                  </div>
                     <img className='w-[50px] ml-20' src={quats} alt="" />
                </div>
                    <p className='opacity-80 my-5'>{data[6].description}</p>
                <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
              {/* 2nd div */}
              <div className='border rounded-xl p-10'>
                  <div className="flex items-center gap-5">
                     <img className="rounded-full w-[100px]" src={data[7].author_img} alt="" />
                  <div>
                       <h2 className='text-xl font-bold'>{data[7].author_name}</h2>
                       <h2 className='text-red-500'>{data[7].post_name}</h2>
                  </div>
                     <img className='w-[50px] ml-20' src={quats} alt="" />
                </div>
                    <p className='opacity-80 my-5'>{data[7].description}</p>
                <div className="rating">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>


             
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide7" className="btn btn-circle">❮</a>
              <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
};

export default Testimonial;