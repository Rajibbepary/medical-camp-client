import { CgProfile } from "react-icons/cg";
import { FaCampground, FaFreeCodeCamp, FaHome, FaRegRegistered } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
const {user} = useAuth()
    //TODO:get isAdmin value from the database
  //  const isAdmin = false;
  const isAdmin= user?.email == 'rajib635356@gmail.com'

    return (
        <div className="flex">
            <div className="w-74 min-h-screen bg-slate-500  text-white ">
                <ul className="menu flex gap-2 px-3">

                 {
                    isAdmin ? <>
                        <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/organizer'><CgProfile /> Organizer Profile</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/addcamp'><FaFreeCodeCamp /> Add A Camp</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/managecamps'> <FaCampground />Manage Camps</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/manageregisteredcamps'><FaRegRegistered /> Registered Camps</NavLink></li>
                    </>:
                    <>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/analytics'><IoAnalyticsSharp /> Analytics</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/Participant'><CgProfile /> Participant Profile</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/RegisteredCamps'> <FaCampground />Registered Camps</NavLink></li>
                    <li className="lg:text-xl font-semibold"><NavLink to='/dashboard/Payment History'><MdOutlinePayment /> Payment History</NavLink></li>
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