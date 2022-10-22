import React from "react";
import image1 from "../../../src//Images//3.webp";
import image2 from "../../../src//Images//5.webp";
import image3 from "../../../src//Images//4-pqzgkxhynzztejsq0n5zo51t7ynswrljm10gh652gc.webp";
import image4 from "../../../src//Images//coffee-2676642_960_720.jpg";
import image5 from "../../../src//Images//coffee-1117933__340.webp";
import image6 from "../../../src//Images//coffee-20486__340.webp";
import image7 from "../../../src//Images//coffee-beans-2258839__340.jpg";
import image8 from "../../../src//Images//coffee-4512564_960_720.jpg";
import image9 from "../../../src//Images//coffee-beans-2258869__340.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <section className=" dark:bg-gray-800 dark:text-gray-50">
        <div className=" grid grid-cols-2  mx-auto md:grid-cols-4">
          <img
            src={image4}
            alt=""
            className="h-[700px] w-[955px] col-span-2 row-span-2 hidden lg:block shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          />
          <Link to="/arabica">
            <img
              class="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={image1}
              alt="image description"
            />
          </Link>
          <Link to="/rabusta">
            <img
              class="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={image2}
              alt="image description"
            />
          </Link>
          <Link to="/redeye">
            <img
              class="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={image3}
              alt="image description"
            />
          </Link>

          <Link to="/americano">
            <img
              class="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={image5}
              alt="image description"
            />
          </Link>
          <img
            class="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src={image6}
            alt="image description"
          />
          <img
            class="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src={image7}
            alt="image description"
          />
          <img
            class="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src={image8}
            alt="image description"
          />
          <img
            class="w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src={image9}
            alt="image description"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
