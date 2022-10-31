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
      <div class="overflow-x-auto relative shadow-md ">
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
          {orders?.map((order,index) => (
            <>
              <tbody>
                <tr class="bg-white border-b  ">
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
                  <td class="py-4 px-6">{order?.quantity}</td>
                  <td class="py-4 px-6">{order?.status}</td>
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
