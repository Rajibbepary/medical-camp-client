import {  NavLink } from "react-router-dom";
import logo from '../../../assets/banner/medical_care_logo-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { IoMdKey } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { IoLocation } from "react-icons/io5";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  console.log(user)

    const links = <div className='flex max-sm:bg-none  max-sm:text-black uppercase max-sm:flex-col gap-1'>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to='/available'>Available Camps</NavLink></li>
   
    </div>

    return (
        <div className="navbar  bg-opacity-40 max-w-screen-xl bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="">
      <img src={logo} className="w-20 object-cover" alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
        {/* dropdown part start */}
 
  <div className="navbar-end mr-6">
  {!user && (
            
              <ul>
                <NavLink to='/login'>Login</NavLink>
              </ul>
            
          )}
           {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <div className="flex items-center justify-center " >
                <img src={user?.photoURL} className="w-10 h-10 border-2 border-green-600 rounded-full object-cover" alt=""/>
              </div>
              <li className="mt-2 bg-white text-black text-center font-semibold">{user?.displayName}</li>
              <li className="mt-2 bg-white text-black text-center ">{user?.email}</li>
              <div className="mt-2 bg-white text-black"> <div className="flex gap-2 text-center text-xl justify-center"><IoMdKey /> <MdOutlinePayment /> <IoLocation /></div></div>
              <li className='mt-2 bg-white text-black'>
                <NavLink to='/dashbord'> Dashbord</NavLink>
                </li>
              <li className='mt-2 bg-white text-black'>
                <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

  {/* dropdown part end */}
  </div>
</div>
    );
};

export default Navbar;