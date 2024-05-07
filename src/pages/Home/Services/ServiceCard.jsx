import { FaArrowRightLong } from "react-icons/fa6";
import pt from 'prop-types'
const ServiceCard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className=' shadow-xl border p-5 rounded-xl'>
            <img className='h-[247px] rounded-xl w-full' src={img} alt="" />
            <h2 className='font-bold text-2xl mt-3'>{title}</h2>
            <div className="flex justify-between items-center text-red-400 font-bold mt-3">
                <p className=''>Price : {price}</p>
                <FaArrowRightLong></FaArrowRightLong>
            </div>

        </div>
    );
};
ServiceCard.propTypes = {
    service: pt.object.isRequired,
}

export default ServiceCard;