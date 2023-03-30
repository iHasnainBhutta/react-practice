import React from "react";
import ResetForm from "../forms/ResetPasswordForm";
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
        <ResetForm />
      </div>
    </div>
  );
};

export default Login;
