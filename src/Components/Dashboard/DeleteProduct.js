import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import swal from "sweetalert";
import Loader from "../Shared/Loader";

const DeleteProduct = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch(` https://smart-coffee-server-production.up.railway.app/products`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
  );
  refetch();
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          ` https://smart-coffee-server-production.up.railway.app/products/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            swal("Yayy", "Company Deleted Successfully", "success");
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div class="overflow-x-auto relative shadow-md ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                Stock Status
              </th>
              <th scope="col" class="py-3 px-6">
                Flavour
              </th>
              <th scope="col" class="py-3 px-6">
                Flavour 2
              </th>
              <th scope="col" class="py-3 px-6">
                Flavour 3
              </th>

              <th scope="col" class="py-3 px-6">
                Delete
              </th>
              {/* {admin?.data?.role === "admin" && (
                  <>
                    <th scope="col" class="py-3 px-6">
                      Edit
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Delete
                    </th>
                  </>
                )} */}
            </tr>
          </thead>
          {products?.map((product, index) => (
            <>
              <tbody>
                <tr class="bg-white border-b  ">
                  <td class="py-4 px-6">{index + 1}.</td>
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {product?.name}
                  </th>
                  <td class="py-4 px-6">{product?.price}</td>

                  <td class="py-4 px-6">{product?.stock}</td>
                  <td>
                    {product?.flavor  ? (
                      <>
                        <td class="py-4 px-6">{product?.flavor}</td>
                      </>
                    ) : (
                      <h1 className="ml-8 ">N/A</h1>
                    )}
                  </td>
                  <td>
                    {product?.flavor2  ? (
                      <>
                        <td class="py-4 px-6">{product?.flavor2}</td>
                      </>
                    ) : (
                      <h1 className="ml-8">N/A</h1>
                    )}
                  </td>
                  <td>
                    {product?.flavor3 ? (
                      <>
                        <td class="py-4 px-6">{product?.flavor3}</td>
                      </>
                    ) : (
                      <h1 className="ml-8">N/A</h1>
                    )}
                  </td>

                  

                  <td class="py-4 px-6">
                    <button
                      onClick={() => handleDelete(product._id)}
                      type="button"
                      class="btn btn-xs  bg-red-500"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default DeleteProduct;
