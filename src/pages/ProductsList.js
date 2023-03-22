import React from "react";
import ProductsListTable from "../tables/ProductsListTable";
import { ToastContainer, toast } from "react-toastify";

const ProductsList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        // height: 30,
      }}
    >
      <div>
        <ProductsListTable />
      </div>
    </div>
  );
};

export default ProductsList;
