
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AvailableCamp from "../pages/AvailableCamp/AvailableCamp";
import CampDetails from "../components/SectionTitle/CampDetails";


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
            path:'camp-details',
            element:<CampDetails/>,
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
  ]);