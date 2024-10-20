import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";

import Chekout from "../pages/Checkout/Chekout";
import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";




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
        
       },
       {
        path:'/signup',
        element:<SignUp></SignUp>
       },{
        path: '/service-details/:_id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:7001/services/${params._id}`)
        
       },
       {
        path: '/checkout/:_id',
        element: <Chekout></Chekout>,
        loader: ({params})=> fetch(`http://localhost:7001/checkout/${params._id}`)
       },
       {
        path: '/my-bookings',
        element: <PrivateRoute> <MyBookings></MyBookings></PrivateRoute>
       }
      ]
    },
  ]);
  export default router