import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div>
             <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-red-500">Popular Products</h2>
                <h2 className="text-5xl font-bold">Browse Our Products</h2>
                <p className="lg:w-[700px] mx-auto opacity-80 font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.  </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                {
                    products?.map((product => <Product key={product.id} product={product}></Product>))
                }
            </div>

            <div className="mx-auto mt-5 mb-12 text-center font-bold ">
                <h2 className="btn btn-outline btn-error text-white">More Products</h2>
            </div>
            <hr className="my-3" />
            
        </div>
    );
};

export default Products;