import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { URL } from "../api/urls";
import { Link } from "react-router-dom";
import emailIcon from "../components/assets/emailIcon.svg";
import passwordIcon from "../components/assets/passwordIcon.svg";
import userIcon from "../components/assets/userIcon.svg";
import styles from "./LoginForm.module.css";

function Signup() {
  const [data, setData] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [IsAccepted, setIsAccepted] = useState();
  const [check, setCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  console.log(email, password);

  const headers = {
    "Content-Type": "application/json",
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      // alert("working");
      // console.log(values);
      const res = await axios.post(
        URL + "user-register",
        { email: email, password: password },
        { headers },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        if (!res.data.result.verified) {
          setLoading(false);
          setVerified(false);
          setData(res);
          setCheck(true);
        } else {
          setLoading(false);
          setVerified(true);
          setCheck(true);
          setData(res);
        }
        //   toast.success(res.data);
        //   toast.success(res.data, {
        //     position: toast.POSITION.TOP_RIGHT,
        //   });
        setTimeout(() => {
          window.location.href = "/login";
          // history.back();
        }, 2000);
        console.log(">>>>>", res.data.result.verified);
      } else {
        setLoading(false);
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return !check ? (
    // <form onSubmit={submit}>
    //   <h3>Sign Up</h3>

    //   <div className="mb-3">
    //     <label>Email address</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       placeholder="Enter email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //   </div>

    //   <div className="mb-3">
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       placeholder="Enter password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </div>

    //   <div className="d-grid">
    //     {!isLoading && (
    //       <button type="submit" className="btn btn-primary">
    //         Sign up
    //       </button>
    //     )}

    //     {isLoading && (
    //       <Button variant="primary" disabled>
    //         <Spinner
    //           as="span"
    //           animation="border"
    //           size="sm"
    //           role="status"
    //           aria-hidden="true"
    //         />
    //         <span className="visually-hidden"> Processing</span>
    //       </Button>
    //     )}
    //   </div>

    //   <p>
    //     Already have an account? <a href="/login">Login</a>
    //   </p>
    // </form>

    <div className={styles.container}>
      <form className={styles.formLogin} onSubmit={submit} autoComplete="off">
        <h2>Sign Up</h2>
        <div>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
          />
          <img src={userIcon} alt="" />
        </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <img src={emailIcon} alt="" />
          </div>
        </div>
        <div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <img src={passwordIcon} alt="" />
          </div>
        </div>
        <div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
            />
            <img src={passwordIcon} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.terms}>
            <input
              type="checkbox"
              name="IsAccepted"
              value={IsAccepted}
              id="accept"
              onChange={(e) => setIsAccepted(e.target.value)}
            />
            <label htmlFor="accept" style={{marginTop: 4}}>I accept terms of privacy policy</label>
          </div>
        </div>
        <div>
          <button type="submit">Create Account</button>
          <span
            style={{
              color: "#a29494",
              textAlign: "center",
              display: "inline-block",
              width: "100%",
            }}
          >
            Already have a account? <Link to="/login">Sign In</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  ) : (
    <>
      {!verified && (
        <div>
          {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}

          <h4>
            User Registration successfull! <a href="/login">Login</a>
          </h4>
        </div>
      )}

      {verified && (
        <div>
          <h4>Welcome back</h4>
        </div>
      )}
    </>
  );
}

export default Signup;
