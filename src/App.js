import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import RequireAuth from "./Components/RequireAuth";
import Navbar from "./Components/Shared/Navbar";
import Arabica from "./Components/Pages/Arabica";
import Rabusta from "./Components/Pages/Rabusta";
import RedEye from "./Components/Pages/RedEye";
import Americano from "./Components/Pages/Americano";
import Footer from "./Components/Shared/Footer";
import ProductDetails from "./Components/ProductDetails";
import ViewCart from "./Components/ViewCart";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arabica" element={<Arabica />} />
        <Route path="/rabusta" element={<Rabusta />} />
        <Route path="/redeye" element={<RedEye />} />
        <Route path="/americano" element={<Americano />} />
        <Route
          path="/productDetail/:id"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/viewCart"
          element={
            <RequireAuth>
              <ViewCart />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
