import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(" https://smart-coffee-server-production.up.railway.app/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <span class="inline-block h-1 w-12 bg-red-700"></span>

            <h2 class="mt-1 text-2xl font-extrabold  tracking-wide lg:text-3xl uppercase ">
              Coffee Shop
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-4 gap-y-8">
            {products?.slice(0, 8).map((product) => (
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
        <div className="px-52 my-12">
          <button
            onClick={() => navigate(`/allProducts`)}
            class="flex ml-auto group relative items-center overflow-hidden rounded-md border border-current px-8 py-3 focus:outline-none focus:ring transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300  bg-amber-900 text-white font-bold"
            href="/download"
          >
            <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span class="text-sm font-medium transition-all group-hover:mr-4">
              See more
            </span>
          </button>
          {/* <button
          className="px- flex ml-auto mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300  bg-amber-900 text-white font-bold py-3 px-4 rounded-full"
          onClick={() => navigate(`/allProducts`)}
        >
          See more 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button> */}
        </div>
      </section>
    </div>
  );
};

export default Products;
