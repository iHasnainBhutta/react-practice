import React from "react";
import AddProductForm from "../forms/AddProductForm";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <AddProductForm />
      </div>
    </div>
  );
};

export default Login;
