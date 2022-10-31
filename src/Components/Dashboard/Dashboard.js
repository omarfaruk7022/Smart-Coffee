import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Shared/Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [admin] = useAdmin(user);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(` https://smart-coffee-server-production.up.railway.app/cartList`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
  );
  const { data: products } = useQuery("products", () =>
    fetch(` https://smart-coffee-server-production.up.railway.app/products`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
  );
  const { data: users } = useQuery("users", () =>
    fetch(" https://smart-coffee-server-production.up.railway.app/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  refetch();
  const totalOrder = orders?.length;
  const totalProduct = products?.length;
  const totalUsers = users?.length;

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>
      {user && admin && (
        <>
          <div className="drawer-side drop-shadow-2xl">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu  overflow-y-auto w-48 bg-base-100 text-base-content ">
              <li>
                <Link
                  className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
                  to="/dashboard"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
                  to="/dashboard/deleteProduct"
                >
                  Manage Products ({totalProduct})
                </Link>
              </li>
              <li>
                <Link
                  className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
                  to="/dashboard/allOrders"
                >
                  All Orders ({totalOrder})
                </Link>
              </li>
              <li>
                <Link
                  className="block  h-15 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
                  to="/dashboard/users"
                >
                  All Users ({totalUsers})
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
