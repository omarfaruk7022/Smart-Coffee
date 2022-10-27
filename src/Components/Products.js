import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import bag1 from "../../src//Images//bag-2.png";
import bag2 from "../../src//Images//bag-3.png";

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <span class="inline-block h-1 w-12 bg-red-700"></span>

            <h2 class="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
              Trainers
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
                      src={bag1}
                      class="-mt-3 w-full h-96  object-cover"
                    />

                    <h3 class="mt-4 text-sm text-black/90">{product?.stock}</h3>

                    <div class="mt-4 flex items-center justify-between font-bold">
                      <p class="text-lg">$189.99</p>

                      <p class="text-xs uppercase tracking-wide">6 Colors</p>
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
    // <div className="grid lg:grid-cols-3 gap-5 ">
    //   <div className="m-auto">
    //     {" "}
    //     <img className="w-[300px] h-[300px] " src={bag1} alt="" />
    //     <button>Shop now </button>
    //   </div>
    //   <div>
    //     {" "}
    //     <img className="w-[300px] h-[300px] m-auto" src={bag2} alt="" />
    //   </div>
    //   <div>
    //     {" "}
    //     <img className="w-[300px] h-[300px] m-auto" src={bag2} alt="" />
    //   </div>
    // </div>
  );
};

export default Products;
