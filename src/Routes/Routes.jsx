import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import ErrorPage from "../pages/ErrorPage";

import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails";
import Chekout from "../pages/Checkout/Chekout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
       {
        path: '/',
        element: <Home></Home>
       },
       {
        path:'/login',
        element: <Login></Login>
       },
       {
        path:'/signup',
        element:<SignUp></SignUp>
       },{
        path: '/service-details/:_id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params._id}`)
        
       },
       {
        path: '/checkout/:_id',
        element: <Chekout></Chekout>,
        loader: ({params})=> fetch(`http://localhost:5000/checkout/${params._id}`)
       }
      ]
    },
  ]);
  export default router