import React from "react";
import Signup from "../forms/SignupForm";


const Login = () => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: "60vh",
    }}
  >
     

      <div>
        <Signup />
      </div>
    </div>
  );
};

export default Login;
