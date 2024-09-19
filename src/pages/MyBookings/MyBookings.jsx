import { useContext, useEffect, useState } from "react";
import { AuthCoontext } from "../../Context/AuthContext";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const MyBookings = () => {
  const img ="https://res.cloudinary.com/dqescabbl/image/upload/v1726651366/4_ksehgy.jpg";
  const { user } = useContext(AuthCoontext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}&sort=1`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(typeof data[0].price);
        console.log(data[0].price);
      });
  }, []);

  const style = {
    backgroundColor: "red",
    clipPath: "polygon(18% 81%, 79% 81%, 99% 100%, 0% 100%)",
  };


  const handleDelete = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You want Delete this Service ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
              })
             .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);

                }
                 
              })
          Swal.fire({
            title: "Deleted!",
            text: "Your Service has been deleted.",
            icon: "success"
          });
        }
      });
  
  }
  return (
    <div>
        <div className="w-full lg:h-[500px] h-[400px] relative rounded-xl scroll-smooth my-10">
        <img src={img} className="w-full h-full rounded-xl " />
        <h2 className="absolute bottom-3  lg:text-xl font-bold z-20 text-white left-1/2 -translate-x-1/2">
          My Bookings
        </h2>
        <div className="absolute  lg:h-full md:h-full h-full w-full flex items-center  rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h2 className="w-full text-white text-7xl pl-8">Cart Details</h2>
        </div>
        <div
          style={style}
          className="absolute bottom-0 -translate-x-1/2 h-[300px] w-[300px] left-1/2"
        ></div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="lg:*:text-2xl *:font-bold">
              <th className="lg:block hidden md:block">
                Action
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
              {
                bookings.map((booking) => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)
              }
          </tbody>
         
        
        </table>
      </div>
      {bookings.map((booking) => (
        <div key={booking._id}>
          <h2>Car: {booking.car}</h2>
          <h2>Date: {booking.date}</h2>
          <h2>Time: {booking.time}</h2>
          <h2>Price: ${booking.price}</h2>
        </div>
      ))}

      {bookings.length === 0 && <h2>No bookings found</h2>}

      {bookings.length > 0 && (
        <h2>
          Total Cost: $
          {bookings.reduce((acc, booking) => acc + +booking.price, 0)}
        </h2>
      )}

      {bookings.length > 0 && (
        <h2>
          Total Duration:{" "}
          {bookings.reduce((acc, booking) => acc + booking.duration, 0)} hours
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
