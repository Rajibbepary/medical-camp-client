import {  NavLink } from "react-router-dom";
import logo from '../../../assets/banner/medical-camp-logo-designs-health-service-clinic-hospital-symbols_1093924-875.avif'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const links = <div className='flex uppercase max-sm:flex-col gap-1'>
    
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to='/available'>Available Camps</NavLink></li>
    <li><NavLink to='/'>
    
    
  <div className="badge badge-secondary">
  <FaShoppingCart className="mr-2"/>
    +{}</div>
    </NavLink></li>
   
    </div>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
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
    <a className="btn btn-ghost text-xl">
      <img src={logo} className="w-12" alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>

  {/* dropdown part start */}
 
  <div className="navbar-end mr-6">
  { (
              <ul>
                <NavLink to='/login'>Join US </NavLink>
              </ul>
          )}
           {(
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={''}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
             <li className=" bg-white text-black"><NavLink to='/dashboard/cart'>Dashboard</NavLink></li>
              <li className='mt-2 bg-white text-black'>
                <button
                  onClick={''}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
  </div>
</div>
    );
};

export default Navbar;