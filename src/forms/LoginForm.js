import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function LoginForm() {
  const [data, setData] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
        "http://localhost:8008/user/user-login",
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
    <form onSubmit={submit}>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
        {!isLoading && (
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        )}

        {isLoading && (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden"> Login</span>
          </Button>
        )}
      </div>
      <p className="forgot-password">
        Forgot <a href="/forget">password?</a>
      </p>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </form>
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

      {verified && (
        <div>
          <h4>Welcome back</h4>
        </div>
      )}
    </>
  );
}

export default LoginForm;
