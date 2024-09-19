import { useContext, useEffect, useState } from "react";
import { AuthCoontext } from "../../Context/AuthContext";


const MyBookings = () => {
    const {user}= useContext(AuthCoontext)
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user.email}&sort=1`)
        .then(res => res.json())
        .then(data => {
            setBookings(data)
            console.log( typeof data[0].price)
            console.log(data[0].price)
        })
    },[])
    return (
        <div>
            <h1>My Bookings {bookings.length}</h1>
            {bookings.map(booking => (
                <div key={booking._id}>
                    <h2>Car: {booking.car}</h2>
                    <h2>Date: {booking.date}</h2>
                    <h2>Time: {booking.time}</h2>
                    <h2>Price: ${booking.price}</h2>
                </div>
            ))}

            {bookings.length === 0 && <h2>No bookings found</h2>}

            {bookings.length > 0 && <h2>Total Cost: ${bookings.reduce((acc, booking) => acc + +booking.price, 0)}</h2>}

            {bookings.length > 0 && <h2>Total Duration: {bookings.reduce((acc, booking) => acc + booking.duration, 0)} hours</h2>}

            
            
        </div>
    );
};

export default MyBookings;