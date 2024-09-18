import { useLoaderData } from "react-router-dom";


const Chekout = () => {
    const data = useLoaderData();

    return (
        <div>
            <h1>Chekout Page</h1>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>


            
        </div>
    );
};

export default Chekout;