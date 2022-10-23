import React from "react";
import Gallery from "./Pages/Gallery";
import Prices from "./Prices";
import Products from "./Products";

import Banner from "./Shared/Banner";

const Home = () => {
  return (
    <div >
      <Banner/>
      <Gallery/>
      <Prices/>
      <Products/>
    </div>
  );
};

export default Home;
