import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import img from "../../../src//Images//logo-white.svg";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  console.log(user);
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
                      className="block h-12 font-bold leading-[3rem] text-[13px] border-b-4 border-transparent hover:hover:text-amber-900 hover:border-current "
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
        <div className="lg:mr-28">
          {user?.displayName && (
            <>
              <p className="text-[11px] mt-3.5 font-bold">
                {user?.displayName}
              </p>
            </>
          )}
          {user && !user?.displayName && (
            <>
              <h1 className="text-[11px] mt-3.5 font-bold ">Unknown User</h1>
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
    </div>
  );
};

export default Navbar;
