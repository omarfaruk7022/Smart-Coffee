import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import img from "../../../src//Images//logo-white.svg";
import ViewCart from "../ViewCart";
import { useQuery } from "react-query";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const handleSignOut = () => {
    signOut(auth);
  };
  const {
    data: cartedProduct,
    isLoading,
    refetch,
  } = useQuery("cartedProduct", () =>
    fetch(`http://localhost:5000/cartList/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
  );
  const total = cartedProduct?.length;
  console.log(total);
  const [show, setShow] = useState(false);
  const showComponent = () => {
    setShow(true);
  };
  return (
    <div className="max-h-screen">
      <div className="navbar  bg-accent h-20 text-white  flex justify-between">
        <div className="navbar-start lg:ml-28">
          <div className="dropdown ">
            <img src={img} alt="" />
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <>
                <li>
                  <Link
                    to="/"
                    class="block  h-12 leading-[3rem] border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current text-[12px] "
                  >
                    Home
                  </Link>
                </li>

                <li>
                  {user ? (
                    <button onClick={handleSignOut} className="btn btn-ghost">
                      Logout
                    </button>
                  ) : (
                    <Link
                      className="block h-12   leading-[3rem] text-[13px] border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
                      to="/login"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </>
            </ul>
          </div>
        </div>
        <div className="navbar-start hidden lg:flex  ">
          <ul className="menu menu-horizontal p-0  lg:space-x-4 ">
            <>
              <Link
                to="/"
                class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-amber-900 ease-in-out duration-200 hover:border-current text-[14px] "
              >
                Home
              </Link>

              {user ? (
                <>
                  <button
                    onClick={handleSignOut}
                    className="block h-12 leading-[3rem]  border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current text-[14px] "
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <button className="block h-12  leading-[3rem] text-[14px] border-b-4 border-transparent hover:text-amber-900 hover:border-current ">
                    Login/Register
                  </button>
                </Link>
              )}
            </>
          </ul>
        </div>
        {user && (
          <>
            <div class="relative">
              <button
                onClick={showComponent}
                class="block mr-5 h-12 leading-[3rem]  border-transparent hover:text-amber-900 ease-in-out duration-200 hover:border-current text-[14px] "
              >
               <li class=" block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-700">
                <a href="#" role="button" class="relative flex">
                  <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {total}
                  </span>
                </a>
              </li>
              </button>
              
            
            </div>
          </>
        )}
        <div className="lg:mr-28">
          {user?.displayName && (
            <>
              <p className="text-[11px] mt-3.5  ">{user?.displayName}</p>
            </>
          )}
          {user && !user?.displayName && (
            <>
              <h1 className="text-[11px] mt-3.5  ">Unknown user</h1>
            </>
          )}
          {user?.photoURL && (
            <>
              <div className="avatar online mt-1">
                <div className="w-10 h-10  rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </>
          )}

          {user && !user?.photoURL && (
            <>
              <div class="overflow-hidden relative w-10 h-10 bg-gray-300 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute -left-1 w-12 h-12 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </>
          )}
        </div>
      </div>

      <ViewCart show={show} setShow={(bool) => setShow(bool)} />
    </div>
  );
};

export default Navbar;
