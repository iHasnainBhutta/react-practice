import React from "react";
import LoginForm from "../forms/LoginForm";
import { ToastContainer, toast } from "react-toastify";
import ProductsView from "../tables/ProductsView";
const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
      }}
    >
      <div style={{ marginTop: "30px" }}>
        <ProductsView />
      </div>
    </div>
  );
};

export default Products;
