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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </>
  );
}

export default App;
