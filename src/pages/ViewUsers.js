import React from "react";
import LoginForm from "../forms/LoginForm";
import { ToastContainer, toast } from "react-toastify";
import AllUsers from "../tables/AllUsers";
const ViewUsers = () => {
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
        <AllUsers />
      </div>
    </div>
  );
};

export default ViewUsers;
