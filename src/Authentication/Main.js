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
import ViewUsers from "./pages/ViewUsers";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/ViewUsers" element={<ViewUsers />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
