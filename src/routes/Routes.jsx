
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
import AnalyTics from "../pages/Dashboard/Analytics/analytics";
import RegisteredCamps from "../pages/Dashboard/Analytics/RegisteredCamps/RegisteredCamps";



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
            loader:({params}) => fetch(`http://localhost:5000/camp/${params.id}`)
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
        path:'analytics',
        element:<AnalyTics/>
       },
       {
        path:'manageregisteredcamps',
        element:<RegisteredCamps/>
       }
      ]
    }
  ]);