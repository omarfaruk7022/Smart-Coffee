import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const AllOrders = () => {
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
  refetch();

  const handleStatus = (e, id) => {
    e.preventDefault();
    const status = e.target.status?.value;

    const inputData = {
      status,
    };
    if (status) {
      fetch(
        ` https://smart-coffee-server-production.up.railway.app/cartList/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(inputData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          swal("Yayy", "Status Updated Successfully", "success");
        });
    }
  };

  return (
    <div>
      <div class="overflow-x-auto relative shadow-md  ">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" class="py-3 px-6">
                No.
              </th>
              <th scope="col" class="py-3 px-6">
                Product name
              </th>

              <th scope="col" class="py-3 px-6">
                Price
              </th>

              <th scope="col" class="py-3 px-6">
                Flavour
              </th>
              <th scope="col" class="py-3 px-6">
                Package
              </th>
              <th scope="col" class="py-3 px-6">
                Phone number
              </th>
              <th scope="col" class="py-3 px-6">
                Address
              </th>
              <th scope="col" class="py-3 px-6">
                Time And Date
              </th>
              <th scope="col" class="py-3 px-6">
                Quantity
              </th>

              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {orders?.map((order, index) => (
            <>
              <tbody>
                <tr class="bg-white border-b ">
                  <td class="py-4 px-6">{index + 1}.</td>
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {order?.name}
                  </th>

                  <td class="py-4 px-6">{order?.price}</td>

                  <td class="py-4 px-6">{order?.flavour}</td>
                  <td class="py-4 px-6">{order?.packages}</td>
                  <td class="py-4 px-6">{order?.phone}</td>
                  <td class="py-4 px-6">{order?.address}</td>
                  <td class="py-4 px-6">
                    {order?.taskTime} {order?.taskDate}
                  </td>
                  <td class="py-4 px-6">{order?.quantity}</td>
                  <td class="py-4 px-6">
                    {order?.status === "Processing" && (
                      <>
                        <div className="flex">
                          {order?.status}
                          <div role="status" className="ml-3">
                            <svg
                              class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-green-400"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                            <span class="sr-only">Loading...</span>
                          </div>
                        </div>
                      </>
                    )}
                    {order?.status === "Delivered" && (
                      <>
                        <div className="flex">
                          {order?.status}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 ml-3 text-green-400 "
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </>
                    )}
                    {order?.status === "On the way" && <>{order?.status}......</>}
                  </td>
                  <td class="py-4 px-6">
                    <form
                      className="lg:flex  items-center"
                      onSubmit={(e) => handleStatus(e, order?._id)}
                    >
                      <div className="form-control  ">
                        <select
                          name="status"
                          className="select select-bordered"
                        >
                          {order?.status ? (
                            <>
                              <option className="text-black" default>
                                {order?.status}
                              </option>
                            </>
                          ) : (
                            <>
                              <option>Select </option>
                            </>
                          )}
                          <option className="text-black">Processing</option>
                          <option className="text-black">On the way </option>
                          <option className="text-black">Delivered</option>
                        </select>
                      </div>

                      <div className="ml-2">
                        <button className="w-[75px] btn btn-outline btn-success">
                          Save
                        </button>
                      </div>
                    </form>
                  </td>

                  {/* {admin?.data?.role === "admin" && (
                        <> */}

                  {/* <td class="py-4 px-6">
                      <button
                        onClick={() => handleDelete(product._id)}
                        type="button"
                        class="btn btn-outline bg-red-500"
                      >
                        Delete
                      </button>
                    </td> */}

                  {/* )} */}
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
