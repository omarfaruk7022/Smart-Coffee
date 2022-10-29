import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
      
        <Outlet />
      </div>
      <div className="drawer-side drop-shadow-2xl">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu  overflow-y-auto w-48 bg-base-100 text-base-content ">
          <li >
            <Link  className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current " to="/dashboard/addProduct">Add Product</Link>
          </li>
          <li>
            <Link className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "  to="/dashboard/deleteProduct">Delete Product</Link>
          </li>
       
         
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
