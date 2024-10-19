import { RxCross1 } from "react-icons/rx";
import propTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
const BookingRow = ({ booking, handleDelete, handleBookingConfirm}) => {
  const { _id, customarName, date, img, service, price,status } = booking;
  return (
    // <tr>
    //   <th className="hidden lg:flex justify-center items-center  md:block">
    //
    //   </th>
    //   <td className="w-full lg:w-auto">
    //       <div className="w-full lg:w-auto">
    //       <img className=""
    //             src={img}
    //             alt="Service image"
    //           />
    //       </div>
    //   </td>
    //   <td className="ml-3">
    //       <div>
    //         <div className="font-bold lg:text-2xl md:text-xl ">{customarName}</div>
    //         <div className="opacity-80 lg:text-xl">{service}</div>
    //       </div>

    //   </td>
    //   <td>
    //      <h2 className="lg:text-2xl">${price}</h2>
    //   </td>
    //   <td>  <h2 className="lg:text-2xl">{date}</h2></td>
    //   <th>
    //     <button className="lg:px-5  px-4 py-2.5 lg:text-xl lg:font-bold text-white bg-black block lg:hidden mb-2 rounded-xl">Delete</button>
    //
    //   </th>
    // </tr>

    // -----------------------------------
    <tr>
      <td className="px-2 py-4 text-sm text-center font-medium text-gray-700 whitespace-nowrap">
        <button onClick={() => handleDelete(_id)} className="btn btn-circle ">
          {" "}
          <RxCross1></RxCross1>
        </button>
        <button className="btn btn-circle ml-5">
          {" "}
          <FaEdit></FaEdit>
        </button>
      </td>
      <td className="px-2 py-2">
        <img
          className="lg:w-40 w-[90px] h-[70px]  md:w-28 lg:h-32  md:h-24 rounded-xl"
          src={img}
          alt=""
        />
      </td>
      <td className=" px-2 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <div>
          <h2 className="font-medium text-gray-800  ">{customarName}</h2>
          <p className="text-sm font-normal text-gray-600 ">{service}</p>
        </div>
      </td>
      <td className="px-2 py-4 text-sm text-gray-500  whitespace-nowrap">
        {price}
      </td>
      <td className="px-2 py-4 text-sm whitespace-nowrap">{date}</td>
      <td className=" py-4 text-sm whitespace-nowrap">
        {
          status === "Confirm"? <span className="lg:px-5  px-4 py-2.5 lg:text-xl lg:font-bold text-white bg-[#547bdc] rounded-xl">Confirmed</span> :
           <button onClick={()=> handleBookingConfirm(_id)} className="lg:px-5  px-4 py-2.5 lg:text-xl lg:font-bold text-white bg-[#FF3811] rounded-xl">
          Confirm
           </button>
        }
      </td>
    </tr>
  );
};

BookingRow.propTypes = {
  booking: propTypes.object.isRequired,
  handleDelete: propTypes.func.isRequired,
  handleBookingConfirm: propTypes.func.isRequired,
};

export default BookingRow;
