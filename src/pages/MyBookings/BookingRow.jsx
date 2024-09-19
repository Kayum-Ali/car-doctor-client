import { RxCross1 } from "react-icons/rx";
import propTypes from "prop-types";
const BookingRow = ({booking, handleDelete}) => {
  const {_id,customarName,date,img,service,price} = booking;
  return (
    
   
      <tr>
        <th className="hidden lg:flex justify-center items-center  md:block">
          <button onClick={()=> handleDelete(_id)} className="btn btn-circle mt-5"> <RxCross1></RxCross1></button>
        </th>
        <td className="w-full lg:w-auto">
            <div className="w-full lg:w-auto">
            <img className="lg:w-40 w-[90px] h-[70px]  md:w-28 lg:h-32  md:h-24 rounded-xl"
                  src={img}
                  alt="Service image"
                />
            </div>
        </td>
        <td className="ml-3">
            <div>
              <div className="font-bold lg:text-2xl md:text-xl ">{customarName}</div>
              <div className="opacity-80 lg:text-xl">{service}</div>
            </div>
        
        </td>
        <td>
           <h2 className="lg:text-2xl">${price}</h2>
        </td>
        <td>  <h2 className="lg:text-2xl">{date}</h2></td>
        <th>
          <button className="lg:px-5  px-4 py-2.5 lg:text-xl lg:font-bold text-white bg-black block lg:hidden mb-2 rounded-xl">Delete</button>
          <button className="lg:px-5  px-4 py-2.5 lg:text-xl lg:font-bold text-white bg-[#FF3811] rounded-xl">Pending</button>
        </th>
      </tr>
   
  );
};

BookingRow.propTypes = {
  booking: propTypes.object.isRequired,
  handleDelete: propTypes.func.isRequired,
};

export default BookingRow;
