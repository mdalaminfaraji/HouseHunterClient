import React, { useContext } from 'react';
import Navbar from '../../Navbar/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Dashboard = () => {
    const {userRole, loading}=useContext(AuthContext);
    if(loading){
       return <progress className="progress w-56"></progress>
    }
    
    console.log(userRole);
    let ComponentToRender=null;

    if(userRole=="House Owner"){
            ComponentToRender = <>
            <li className='border-4 shadow-md my-2 text-white bg-[#193D3D] text-xl rounded-2xl hover:bg-[#04AA6D] '><NavLink to='/dashboard/ownerHome'>House Owner home</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink > Manage Home</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white bg-[#193D3D] text-xl rounded-2xl hover:bg-[#04AA6D]'><NavLink to="/dashboard/addHouse"> Add New house</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink > Booking home</NavLink></li>
            
            </>
    }
    else if(userRole=="House Renter"){
           ComponentToRender=<>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink >House Owner home</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink > Manage Home</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink > Add New house</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink > Booking home</NavLink></li>
           </>

    }

    return (
        <>
        <Navbar></Navbar>
          <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
         {ComponentToRender}
          </ul>
        
        </div>
      </div>
        </>
      
    );
};

export default Dashboard;