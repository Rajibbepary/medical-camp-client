import { CgProfile } from "react-icons/cg";
import { FaCampground, FaFreeCodeCamp, FaHome, FaRegRegistered } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
const {user} = useAuth()
 
  //  const isAdmin = false;
  const isAdmin= user?.email == ''

    return (
        <div className="flex lg:flex-row max-sm:flex-col ">
             <Helmet>
                                   <title>MCMS | Dashboard</title>
                                 </Helmet>
            <div className="w-74 min-h-screen bg-slate-500  text-white ">
                <ul className="menu flex gap-2 px-3">

                 {
                    isAdmin ? <>
                        <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/addminprofile'><CgProfile /> Organizer Profile</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/addcamp'><FaFreeCodeCamp /> Add A Camp</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/managcamp'> <FaCampground />Manage Camps</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/manageregisteredcamps'><FaRegRegistered /> Registered Camps</NavLink></li>
                    </>:
                    <>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/analytics'><IoAnalyticsSharp /> Analytics</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/userprofile'><CgProfile /> Participant Profile</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/useregister'> <FaCampground />Registered Camps</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/paymenthistory'><MdOutlinePayment /> Payment History</NavLink></li>
                    </>
                 }   
 
                    <div className="divider">or</div>
                    <li className="lg:text-xl font-semibold"><NavLink to='/'><FaHome /> Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-6">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;