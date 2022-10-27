import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import image1 from "../../src//Images///coffee-2676642_960_720.jpg";
import auth from "../firebase.init";
import ViewCart from "./ViewCart";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const [packagePrice, setPackagePrice] = useState();
  const [person, setPerson] = useState();

  const [user] = useAuthState(auth);
  const email = user?.email;

  const handleAddToCart = (e) => {
    e.preventDefault();
    const flavour = e.target.flavour.value;
    const quantity = e.target.quantity.value;
    const packages = e.target.package.value;
    const name = product?.name;
    const price = packagePrice;

    const inputData = {
      flavour,
      quantity,
      packages,
      name,
      price,
      email,
    };

    if (
      flavour &&
      quantity &&
      packages &&
      name &&
      price !== undefined &&
      price > 0
    ) {
      fetch(`http://localhost:5000/addToCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      })
        .then((res) => res.json())
        .then((data) => {
          swal("Good job!", "Product added !", "success");
        });
    }
  };
  const handlePersonChange = (e) => {
    setPerson(e.target.value);
  };

  const handleFlavourChange = (e) => {
    const quantity = e.target.value;

    if (person === "1 Person") {
      let personPrice = product?.price * 1 * quantity;
      setPackagePrice(personPrice);
    } else if (person === "2 Person") {
      let personPrice = product?.price * 2 * quantity;
      let twoPrice =
        personPrice - Number(0.25) > 0 ? personPrice - Number(0.25) : 0;
      setPackagePrice(twoPrice);
    } else if (person === "3 Person") {
      let personPrice = product?.price * 3 * quantity;
      let threePrice =
        personPrice - Number(0.75) > 0 ? personPrice - Number(0.75) : 0;
      setPackagePrice(threePrice);
    } else if (person === "Family") {
      let personPrice = product?.price * 4 * quantity;
      let familyPrice =
        personPrice - Number(1) > 0 ? personPrice - Number(1) : 0;
      setPackagePrice(familyPrice);
    }

    console.log(packagePrice);
  };

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
                  <h1 class="text-2xl font-bold">{product?.name}</h1>

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
                {packagePrice && (
                  <>
                    <p class="text-lg font-bold">$ {packagePrice}</p>
                  </>
                )}
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

              <form class="mt-8" onSubmit={handleAddToCart}>
                <fieldset>
                  <legend class="mb-1 text-sm font-medium">Flavour</legend>

                  <div class="flow-root">
                    <div class="-m-0.5 flex flex-wrap">
                      {product?.flavor3 && (
                        <>
                          <label class="cursor-pointer p-0.5">
                            <input
                              type="radio"
                              name="flavour"
                              class="peer sr-only"
                              value={product?.flavor3}
                            />

                            <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                              {product?.flavor3}
                            </span>
                          </label>
                        </>
                      )}
                      {product?.flavor2 && (
                        <>
                          <label class="cursor-pointer p-0.5">
                            <input
                              type="radio"
                              name="flavour"
                              class="peer sr-only"
                              value={product?.flavor2}
                            />

                            <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                              {product?.flavor2}
                            </span>
                          </label>
                        </>
                      )}
                      {product?.flavor && (
                        <>
                          <label class="cursor-pointer p-0.5">
                            <input
                              type="radio"
                              name="flavour"
                              class="peer sr-only"
                              value={product?.flavor}
                            ></input>
                            <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                              {product?.flavor}
                            </span>
                          </label>
                        </>
                      )}
                    </div>
                  </div>
                </fieldset>

                <fieldset class="mt-4">
                  <legend class="mb-1 text-sm font-medium">Package</legend>

                  <div class="flow-root">
                    <div class="-m-0.5 flex flex-wrap">
                      <label for="size_xs" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="package"
                          id="size_xs"
                          class="peer sr-only"
                          value="1 Person"
                          onChange={handlePersonChange}
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          1 Person
                        </span>
                      </label>

                      <label for="size_s" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="package"
                          id="size_s"
                          class="peer sr-only"
                          value="2 Person"
                          onChange={handlePersonChange}
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          2 Person
                        </span>
                      </label>

                      <label for="size_m" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="package"
                          id="size_m"
                          class="peer sr-only"
                          value="3 Person"
                          onChange={handlePersonChange}
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          3 Person
                        </span>
                      </label>

                      <label for="size_xl" class="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="package"
                          id="size_xl"
                          class="peer sr-only"
                          value="Family"
                          onChange={handlePersonChange}
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Family
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset class="mt-4">
                  <legend class="mb-1 text-sm font-medium">Quantity</legend>
                  <div class=" flex">
                    <div>
                      <input
                        name="quantity"
                        type="number"
                        id="quantity"
                        min="1"
                        defaultValue={1}
                        max={10}
                        onChange={handleFlavourChange}
                        class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </div>

                    <>
                      <button
                        type="submit"
                        class="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                      >
                        Add to Cart
                      </button>
                    </>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
