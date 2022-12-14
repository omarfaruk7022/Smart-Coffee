import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(" https://smart-coffee-server-production.up.railway.app/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 my-28">
          <div>
            <span class="inline-block h-1 w-12 bg-red-700"></span>

            <h2 class="mt-1 text-2xl font-extrabold  tracking-wide lg:text-3xl uppercase ">
              Coffee Shop
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-4 gap-y-8">
            {products?.map((product) => (
              <>
                <div class="mt-8 ">
                  <a class="block">
                    <div class="flex justify-center">
                      <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                        New
                      </strong>
                    </div>

                    <img
                      alt="Trainer"
                      src={product?.image}
                      class="-mt-3 w-full h-96  object-cover"
                    />

                    <h3 class="mt-4 text-xl font-bold text-amber-900">
                      {product?.name}
                    </h3>

                    <div class="mt-4 flex items-center justify-between font-bold">
                      <p class="text-lg">$ {product?.price}</p>

                      <p class="text-xs uppercase tracking-wide">
                        {product?.stock}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate(`/productDetail/${product?._id}`)}
                      class="mt-5 inline-block rounded border  border-current px-8 py-3 text-sm font-medium text-amber-900 transition hover:shadow-2xl focus:outline-none focus:ring active:text-amber-900 w-full text-center"
                    >
                      View Details
                    </button>
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
