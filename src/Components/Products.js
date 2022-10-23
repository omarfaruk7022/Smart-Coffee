import React from "react";
import { Link } from "react-router-dom";
import bag1 from "../../src//Images//bag-2.png";
import bag2 from "../../src//Images//bag-3.png";

const Products = () => {
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

          <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            <Link to="/productDetail" class="block">
              <div class="flex justify-center">
                <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                  New
                </strong>
              </div>

              <img
                alt="Trainer"
                src={bag1}
                class="-mt-3 h-96 w-full object-cover"
              />

              <h3 class="mt-4 text-sm text-black/90">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-4 flex items-center justify-between font-bold">
                <p class="text-lg">$189.99</p>

                <p class="text-xs uppercase tracking-wide">6 Colors</p>
              </div>
            </Link>

            <Link to="/productDetail"  class="block">
              <div class="flex justify-center">
                <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                  New
                </strong>
              </div>

              <img
                alt="Trainer"
                src={bag2}
                class="-mt-3 h-96 w-full object-cover"
              />

              <h3 class="mt-4 text-sm text-black/90">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-4 flex items-center justify-between font-bold">
                <p class="text-lg">$189.99</p>

                <p class="text-xs uppercase tracking-wide">6 Colors</p>
              </div>
            </Link>

            <Link to="/productDetail"  class="block">
              <div class="flex justify-center">
                <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                  New
                </strong>
              </div>

              <img
                alt="Trainer"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="-mt-3 h-96 w-full object-cover"
              />

              <h3 class="mt-4 text-sm text-black/90">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-4 flex items-center justify-between font-bold">
                <p class="text-lg">$189.99</p>

                <p class="text-xs uppercase tracking-wide">6 Colors</p>
              </div>
            </Link>

            <Link to="/productDetail"  class="block">
              <div class="flex justify-center">
                <strong class="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                  New
                </strong>
              </div>

              <img
                alt="Trainer"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="-mt-3 h-96 w-full object-cover"
              />

              <h3 class="mt-4 text-sm text-black/90">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-4 flex items-center justify-between font-bold">
                <p class="text-lg">$189.99</p>

                <p class="text-xs uppercase tracking-wide">6 Colors</p>
              </div>
            </Link>
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
