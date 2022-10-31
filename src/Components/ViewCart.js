import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loader from "./Shared/Loader";

const ViewCart = ({ show, setShow }) => {
  const [totalPrice, setTotalPrice] = useState();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const {
    data: cartedProduct,
    isLoading,
    refetch,
  } = useQuery("cartedProduct", () =>
    fetch(
      ` https://smart-coffee-server-production.up.railway.app/cartList/${email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
  );
  refetch();

  useEffect(() => {
    const total = cartedProduct?.reduce((total, prd) => total + prd.price, 0);
    setTotalPrice(total);
  }, [cartedProduct]);
  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = (id) => {
    fetch(
      ` https://smart-coffee-server-production.up.railway.app/cartList/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <Transition.Root show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setShow}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <>
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            <span className="ml-5 ">Your cart</span>
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setShow(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {cartedProduct?.map((product) => (
                                  <li key={product?._id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product?.image}
                                        alt={product?.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href={product?.href}>
                                              {product?.name}
                                            </a>
                                          </h3>
                                          <p className="ml-4">
                                            $ {product?.price}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {product?.flavour}
                                        </p>
                                        <p className="text-gray-500">
                                          Qty {product?.quantity}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {product?.phone}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {product?.address}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="mt-1 text-sm text-green-400">
                                          {product?.status}
                                        </p>

                                        <div className="flex">
                                          <button
                                            onClick={() =>
                                              handleDelete(product?._id)
                                            }
                                            type="button"
                                            className="font-medium text-indigo-600 hover:underline hover:text-indigo-500"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$ {totalPrice}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                         
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setShow(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
export default ViewCart;
