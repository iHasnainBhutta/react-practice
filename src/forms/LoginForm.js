import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import emailIcon from "../components/assets/emailIcon.svg";
import passwordIcon from "../components/assets/passwordIcon.svg";

import { URL } from "../api/urls";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [data, setData] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [check, setCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [touched, setTouched] = useState({});
  console.log(email, password);

  const headers = {
    "Content-Type": "application/json",
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      // alert("working");
      // console.log(values);
      const res = await axios.post(
        URL + "user-login",
        { email: email, password: password },
        { headers },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        // console.log(res.data.result.token);
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
          const result = await res.data.result.token;
          localStorage.setItem("user-info", result);
          window.location.href = "/";

          // setTimeout(() => {
          //   window.location.href = "/home";
          //   // history.back();
          // }, 2000);
        }
        //   toast.success(res.data);
        //   toast.success(res.data, {
        //     position: toast.POSITION.TOP_RIGHT,
        //   });
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
    <div className={styles.container}>
      <form className={styles.formLogin} onSubmit={submit} autoComplete="off">
        <h2>Sign In</h2>
        <div>
          <div>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="E-mail"
              autoComplete="off"
            />
            <img src={emailIcon} alt="" />
          </div>
        </div>
        <div>
          <div>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
              autoComplete="off"
              onFocus={focusHandler}
            />
            <img src={passwordIcon} alt="" />
          </div>
        </div>

        <div>
          {!isLoading && <button type="submit">Login</button>}
          {isLoading && (
            <button type="submit" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Login
            </button>
          )}
          <span
            style={{
              color: "#a29494",
              textAlign: "center",
              display: "inline-block",
              width: "100%",
            }}
          >
            Don't have a account? <Link to="/signup">Create account</Link>
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

          <h4>Login successfully!</h4>
          <h5>An email sent to your account please verify</h5>
        </div>
      )}

      {/* {verified && (
        <div>
          <h4>Welcome back</h4>
        </div>
      )} */}
    </>
  );
}

export default LoginForm;
