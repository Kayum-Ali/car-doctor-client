import { useContext, useEffect, useState } from "react";
import { AuthCoontext } from "../../Context/AuthContext";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const MyBookings = () => {
  const img =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1726651366/4_ksehgy.jpg";
  const { user } = useContext(AuthCoontext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setBookings(res.data);
    });
    // fetch(`http://localhost:5000/bookings?email=${user.email}&sort=1`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //     console.log(typeof data[0].price);
    //     console.log(data[0].price);
    //   });
  }, []);

  const style = {
    backgroundColor: "red",
    clipPath: "polygon(18% 81%, 79% 81%, 99% 100%, 0% 100%)",
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want Delete this Service ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Service has been deleted.",
          icon: "success",
        });
      }
    });
  };

//   confirmed
const handleBookingConfirm = (id) =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You want to Confirmed this Service ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmed"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: 'Confirm' }),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaining = bookings.map(booking => booking._id === id? {...booking, status: 'Confirm' } : booking)
          setBookings(remaining);
        } 
      })
      Swal.fire({
        title: "Confirmed!",
        text: "Your Service has been Confirmed",
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
        <section className="container px-4 mx-auto">
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr className="lg:*:text-2xl *:font-bold">
                        <th className="">Action</th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 ">
                      {bookings?.map((booking) => (
                        <BookingRow
                          key={booking._id}
                          booking={booking}
                          handleDelete={handleDelete}
                          handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------- */}
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
