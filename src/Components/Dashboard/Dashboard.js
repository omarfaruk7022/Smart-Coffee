import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [ isAdmin, setIsAdmin ] = useState();
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/users/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      })
  },[email]);
 
  

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>
      {isAdmin?.data?.role === 'admin' && (
        <>
          <div className="drawer-side drop-shadow-2xl">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu  overflow-y-auto w-48 bg-base-100 text-base-content ">
              <li>
                <Link
                  className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
                  to="/dashboard/addProduct"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
                  to="/dashboard/deleteProduct"
                >
                  Manage Products
                </Link>
              </li>
              <li>
                <Link
                  className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
                  to="/dashboard/allOrders"
                >
                 All Orders
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
