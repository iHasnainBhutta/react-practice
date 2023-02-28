import React from "react";
import LoginForm from "../forms/LoginForm";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
     

      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
