import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layouts/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "../src/pages/Signup";
import Men from "../src/pages/Men";
import Women from "../src/pages/Women";
import Kids from "../src/pages/Kids";
import NewArrivals from "../src/pages/NewArrivals";
import Sale from "../src/pages/Sale";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Forget from "./pages/Forget";
import ResetPassword from "./pages/ResetPassword";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./pages/Dashboard";
import DeleteProduct from "./pages/DeleteProduct";
import ProductsList from "./pages/ProductsList";
import SingleProductView from "./pages/SingleProductView";

function App(props) {
  const [check, isCheck] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      isCheck(true);
    } else {
      isCheck(false);
    }
  }, []);

  return (
    <>
      <Navbar
        title={check ? "LOGOUT" : "LOGIN"}
        isLogin={check ? true : false}
        url={check ? true : false}
      />
      {!check && (
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
        </Routes>
      )}
      <Routes>

      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      </Routes>
      {check && (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/deleteProduct" element={<DeleteProduct />} />
          <Route path="/ProductsList" element={<ProductsList />} />
          <Route path="/product-view" element={<SingleProductView />} />
        </Routes>
      )}
    </>
  );
}

export default App;
