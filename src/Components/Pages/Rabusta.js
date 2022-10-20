import React from "react";

const Rabusta = () => {
  return (
    <div>
      <section class="relative bg-[url(https://i.ibb.co/Ps2cKCc/coffee-563797-960-720.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/35 sm:to-white/25"></div>

        <div class="relative lg:ml-52 max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center ">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-bold sm:text-5xl lg:mt-12  text-black">
              Your guide to
              <strong class="block font-bold text-accent">
                the world of <br /> drinking great <br /> coffee.
              </strong>
            </h1>

            <div className="font-bold">
              <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                Your guide to the world of drinking great coffee.
              </p>
              <p>
                The suppliers and producers we work with are at the top of their
                game. It’s our role to carry the magic from their hands to your
                table.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rabusta;
