
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AvailableCamp from "../pages/AvailableCamp/AvailableCamp";
import CampDetails from "../components/SectionTitle/CampDetails";
import Dashboard from "../Layout/Dashboard";
import RegisteredCamps from "../pages/Dashboard/Analytics/RegisteredCamps/RegisteredCamps";
import AddCamp from "../pages/Dashboard/AddCamp/AddCamp";
import ManagCamp from "../pages/Dashboard/ManagCamp/ManagCamp";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import UserRegister from "../pages/Dashboard/UserDashbord/UserRegister";
import AnalyTics from "../pages/Dashboard/UserDashbord/analyTics";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminProfile from "../pages/Dashboard/AddminProfile/AdminProfile";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";




export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'available',
          element:<AvailableCamp/>
        },
          {
            path:"campdetails/:id",
            element:<CampDetails/>,
            loader:({params}) => fetch(`https://medical-camp-server-iota.vercel.app/camp/${params.id}`)
          },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]
    },

    {
      path:'dashboard',
      element:<Dashboard/>,
      children: [
        {
          path:'addminprofile',
          element:<AdminProfile/>
        },
       {
          path:'addcamp',
          element:<AddCamp/>
       },
       {
          path:'managcamp',
          element:<ManagCamp/>
       },
       {
          path:'updateItem/:id',
          element:<UpdateItem/>,
          loader:({params}) => fetch(`https://medical-camp-server-iota.vercel.app/camp/${params.id}`)
       },
       {
        path:'manageregisteredcamps',
        element:<RegisteredCamps/>
       },
       //user dashboard route
       {
          path:'useregister',
          element:<UserRegister/>
       },
       {
        path:"analytics",
        element:<AnalyTics></AnalyTics>
       },
       {
        path:'userprofile',
        element:<UserProfile/>
       },
       {
        path:'payment',
        element:<Payment/>
       },
       {
        path:'paymenthistory',
        element:<PaymentHistory></PaymentHistory>
       }
      ]
    }
  ]);