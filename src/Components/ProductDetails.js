import React from "react";
import image1 from "../../src//Images///coffee-2676642_960_720.jpg";




const ProductDetails = () => {
  return (
    <div>
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src={image1}
                class="aspect-square w-full rounded-xl object-cover"
              />

              <div class="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="aspect-square w-full rounded-xl object-cover"
                />

               
              </div>
            </div>

            <div class="sticky top-0">
              <strong class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pre Order
              </strong>

              <div class="mt-8 flex justify-between">
                <div class="max-w-[35ch]">
                  <h1 class="text-2xl font-bold">
                    Fun Product That Does Something Cool
                  </h1>

                  <p class="mt-0.5 text-sm">Highest Rated Product</p>

                  <div class="mt-2 -ml-0.5 flex">
                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p class="text-lg font-bold">$119.99</p>
              </div>

              <details class="group relative mt-4">
                <summary class="block">
                  <div>
                    <div class="prose max-w-none group-open:hidden">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa veniam dicta beatae eos ex error culpa delectus rem
                        tenetur, architecto quam nesciunt, dolor veritatis nisi
                        minus inventore, rerum at recusandae?
                      </p>
                    </div>

                    <span class="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div class="prose max-w-none pb-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam sapiente nobis ea veritatis error consequatur
                    nisi exercitationem iure laudantium culpa, animi temporibus
                    non! Maxime et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>

              <form class="mt-8">
                <fieldset>
                  <legend class="mb-1 text-sm font-medium">Color</legend>

                  <div class="flow-root">
                    <div class="-m-0.5 flex flex-wrap">
                      <label for="color_tt" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="color"
                          id="color_tt"
                          class="peer sr-only"
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Texas Tea
                        </span>
                      </label>

                      <label for="color_fr" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="color"
                          id="color_fr"
                          class="peer sr-only"
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Fiesta Red
                        </span>
                      </label>

                      <label for="color_cb" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="color"
                          id="color_cb"
                          class="peer sr-only"
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Cobalt Blue
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset class="mt-4">
                  <legend class="mb-1 text-sm font-medium">Size</legend>

                  <div class="flow-root">
                    <div class="-m-0.5 flex flex-wrap">
                      <label for="size_xs" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_xs"
                          class="peer sr-only"
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          XS
                        </span>
                      </label>

                      <label for="size_s" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_s"
                          class="peer sr-only"
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          S
                        </span>
                      </label>

                      <label for="size_m" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_m"
                          class="peer sr-only"
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          M
                        </span>
                      </label>

                      <label for="size_l" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_l"
                          class="peer sr-only"
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          L
                        </span>
                      </label>

                      <label for="size_xl" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_xl"
                          class="peer sr-only"
                        />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          XL
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div class="mt-8 flex">
                  <div>
                    <label for="quantity" class="sr-only">
                      Qty
                    </label>

                    <input
                      type="number"
                      id="quantity"
                      min="1"
                     
                      class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                  

                  <button
                    type="submit"
                    class="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
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

                <ul>
                  <li>Smooth neck design</li>
                  <li>Breathable fabric</li>
                  <li>Odour prevention</li>
                  <li>Made from recycled materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ProductDetails;
