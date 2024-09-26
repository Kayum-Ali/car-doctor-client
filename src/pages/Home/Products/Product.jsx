import propTypes from 'prop-types'

const Product = ({ product }) => {
    const { title, img, price } = product;
    return (
        <div>
            <div className='border p-4 rounded-xl'>
                <div className='bg-[#F3F3F3]  flex justify-center  rounded-xl '>
                    <img className='w-[150px] h-[225px] py-10' src={img} alt="" />
                </div>

                <div className='text-center my-5'>
                    <div className="rating">
                        <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <p className='text-xl text-red-600  font-medium'>Price : ${price}</p>
                </div>
            </div>

        </div>
    );
};

Product.propTypes = {
    product: propTypes.object.isRequired
}

export default Product;