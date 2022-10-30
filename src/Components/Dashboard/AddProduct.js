import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import swal from "sweetalert";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgStorageKey = "7bd193c3ab5dcf0453572e262a763279";

  const onSubmit = async (data) => {
    // console.log("data", data);
    const image = data.image[0];
    const formData = new FormData();
    console.log(formData);
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const inputData = {
            name: data.name,
            stock: data.stock,
            price: Number(data.price),
            flavor: data.flavour,
            flavor3: data.flavour3,
            flavor2: data.flavour2,
            image: img,
          };
          console.log(inputData);

          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(inputData),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                swal("Success!", "ProductAdded Successfully!", "success");
                reset();
              } else {
                swal("Error!", inserted.error, "error");
              }
            });
        }
      });
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl  mt-12 text-amber-900">Add a new Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          
        </div>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Stock status </span>
          </label>
          <select
            {...register("stock")}
            className="input-bordered select w-full max-w-xs "
          >
            <option>Out off stock</option>
            <option>Limited</option>
            <option>Available</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price")}
          />
        </div>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Flavour 1 </span>
          </label>
          <input
            type="text"
            placeholder="Flavour3"
            className="input input-bordered w-full max-w-xs"
            {...register("flavour3")}
          />
        </div>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Flavour 2 </span>
          </label>
          <input
            type="text"
            placeholder="Flavour2"
            className="input input-bordered w-full max-w-xs"
            {...register("flavour2")}
          />
        </div>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Flavour 3 </span>
          </label>
          <input
            type="text"
            placeholder="Flavour"
            className="input input-bordered w-full max-w-xs"
            {...register("flavour")}
          />
        </div>

        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white bg-amber-800 hover:bg-amber-900"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
