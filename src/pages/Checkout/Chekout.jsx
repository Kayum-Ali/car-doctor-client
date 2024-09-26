import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthCoontext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const Chekout = () => {
  const service = useLoaderData();
  document.title = 'car Doctor'+ " || " +'Chekout';
  const img =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1726651366/4_ksehgy.jpg";

  const style = {
    backgroundColor: "red",
    clipPath: "polygon(18% 81%, 79% 81%, 99% 100%, 0% 100%)",
  };

  const {user} = useContext(AuthCoontext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit')
    const form = e.target;
    const name  = form.name.value;
    const date = form.date.value;
    const email = user?.email || form.email.value;
    const order = {
     customarName:  name,
      date,
      email,
      img: service.img,
      service: service.title,
      service_id : service._id,
      price: service.price
    }
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
          Swal.fire({
            title: `${service.title}`,
            text: "Order Successfully Added to Bookings",
            imageUrl: `${service.img}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
        }
    })

  }
console.log(service)
  return (
    <div className="p-3">
       
      <div className="w-full lg:h-[400px] h-[400px] relative rounded-xl scroll-smooth my-10">
        <img src={img} className="w-full h-full rounded-xl " />
        <h2 className="absolute lg:bottom-3 bottom-2 md:bottom-3  lg:text-xl text-base font-medium lg:font-bold z-20 text-white left-[55%] md:left-1/2 lg:left-1/2 -translate-x-1/2">
          Home/Service Details/Check Out
        </h2>
        <div className="absolute  lg:h-full md:h-full h-full w-full flex items-center  rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h2 className="w-full text-white text-7xl pl-8">Check Out</h2>
        </div>
        <div
          style={style}
          className="absolute bottom-0 -translate-x-1/2 h-[300px] md:h-[350px] md:w-[350px] w-[300px] lg:h-[400px] lg:w-[420px] left-1/2"
        ></div>
      </div>

      <div className="bg-[#F3F3F3] lg:p-20 p-10 rounded-xl">
      <h2 className="text-center text-4xl font-medium py-10">Book Service : {service.title}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 gap-5">
            <div className="lg:col-span-6 md:col-span-6 ">
                <label htmlFor="" className="px-2 py-4 block  text-2xl">Name</label>
                 <input type="text" required placeholder="Name" name="name" defaultValue={user?.displayName} className="outline-none px-5 py-4 text-xl bg-white rounded-xl w-full" />
            </div>
            <div className="lg:col-span-6 md:col-span-6">
            <label htmlFor="" className="px-2 py-4 block  text-2xl">Date</label>
                 <input type="date" required placeholder="date" name="date" className="outline-none px-5 py-4 text-xl bg-white rounded-xl w-full" />
            </div>
            <div className="lg:col-span-6 md:col-span-6">
            <label htmlFor="" className="px-2 py-4 block  text-2xl">Email</label>
                 <input type="email"  placeholder="Email" defaultValue={user?.email} readOnly name="email" className="outline-none px-5 py-4 text-xl bg-white rounded-xl w-full" />
            </div>
            <div className="lg:col-span-6 md:col-span-6">
            <label htmlFor="" className="px-2 py-4 block  text-2xl">Due Amount</label>
                 <input type="text"  name="price" defaultValue={'$' + service.price} className="outline-none px-5 py-4 text-xl bg-white rounded-xl w-full" />
            </div>
            <div className="lg:col-span-12 md:col-span-12 ">
                 <textarea type="text" rows={8} placeholder=" your Message" className="outline-none px-5 py-4 text-xl placeholder-green-600 bg-white rounded-xl w-full" />
            </div>
            <div className="lg:col-span-12 md:col-span-12">
                   
                    <button className="bg-[#FF3811] py-2.5 text-white font-bold w-full rounded-xl mt-3 text-2xl ">Order Confirm</button>
                
            </div>
             
        </form>
           
      </div>
    </div>
  );
};

export default Chekout;
