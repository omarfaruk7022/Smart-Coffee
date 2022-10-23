import React from "react";
import image1 from "../../src//Images///majak-mazak.gif"

const ProductDetails = () => {
  return (
    <div>
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 class="text-2xl font-bold lg:text-3xl">
              Simple Clothes Basic Tee
            </h1>

            <p class="mt-1 text-sm text-gray-500">SKU: #012345</p>
          </div>

          <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div class="lg:col-span-3">
              <div class="relative mt-4">
                <img
                  alt="Tee"
                  src={image1}
                  class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />

                <div class="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>

                  <span class="ml-1.5 text-xs"> Hover to zoom </span>
                </div>
              </div>

              <ul class="mt-1 flex gap-1">
                <li>
                  <img
                    alt="Tee"
                    src={image1}
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={image1}
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={image1}
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={image1}
                    class="h-16 w-16 rounded-md object-cover"
                  />
                </li>
              </ul>
            </div>

            <div class="lg:sticky lg:top-0">
              <form class="space-y-4 lg:pt-8">
                <fieldset>
                  <legend class="text-lg font-bold">Color</legend>

                  <div class="mt-2 flex gap-1">
                    <label for="color_green" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_green"
                        name="color"
                        class="peer sr-only"
                        checked
                      />

                      <span class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_blue" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_blue"
                        name="color"
                        class="peer sr-only"
                      />

                      <span class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_pink" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_pink"
                        name="color"
                        class="peer sr-only"
                      />

                      <span class="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_red" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_red"
                        name="color"
                        class="peer sr-only"
                      />

                      <span class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_indigo" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_indigo"
                        name="color"
                        class="peer sr-only"
                      />

                      <span class="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend class="text-lg font-bold">Material</legend>

                  <div class="mt-2 flex gap-1">
                    <label for="material_cotton" class="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        class="peer sr-only"
                        checked
                      />

                      <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        Cotton
                      </span>
                    </label>

                    <label for="material_wool" class="cursor-pointer">
                      <input
                        type="radio"
                        id="material_wool"
                        name="material"
                        class="peer sr-only"
                        checked
                      />

                      <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        Wool
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div class="rounded border bg-gray-100 p-4">
                  <p class="text-sm">
                    <span class="block">
                      {" "}
                      Pay as low as $3/mo with 0% APR.{" "}
                    </span>

                    <a href="" class="mt-1 inline-block underline">
                      {" "}
                      Find out more{" "}
                    </a>
                  </p>
                </div>

                <div>
                  <p class="text-xl font-bold">$1256469646531642121.99</p>
                </div>

                <button
                  type="submit"
                  class="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  class="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Notify when on sale
                </button>
              </form>
            </div>

            <div class="lg:col-span-3">
              <div class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem ad labore nostrum, a explicabo iste est dolorem deserunt
                  id ullam magni accusamus saepe, nulla sed sint reiciendis,
                  aperiam cumque officiis!
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!
                </p>

                <h2 className="text-2xl font-bold">Features</h2>

                {/* <ul>
                  <li>Smooth neck design</li>
                  <li>Breathable fabric</li>
                  <li>Odour prevention</li>
                  <li>Made from recycled materials</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
