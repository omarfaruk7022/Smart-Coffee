import React from "react";
import Gallery from "./Pages/Gallery";
import Prices from "./Prices";

import Banner from "./Shared/Banner";

const Home = () => {
  return (
    <div >
      <Banner/>
      <Gallery/>
      <Prices/>
    </div>
  );
};

export default Home;
