import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../Logout/LogoutButton';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    // const [user, setUser]=useState(null);
    const {user, handleLogout}=useContext(AuthContext);

       
 
    
    return (
        <div className="navbar bg-[#193D3D] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case  text-xl">HouseHunter</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <span className='text-[8px]'>{user?user:'no user'}</span>
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[100] p-2 hover:text-white hover:bg-[#04AA6D] shadow menu menu-sm dropdown-content bg-[#193D3D] rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;