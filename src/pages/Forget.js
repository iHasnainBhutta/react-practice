import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function Forget() {
  const [email, setEmail] = useState();
  const [check, setCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  console.log(email);

  const headers = {
    "Content-Type": "application/json",
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      // alert("working");
      // console.log(values);
      const res = await axios.patch(
        "http://localhost:8008/user/forgot-password",
        { email: email },
        { headers },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        //   toast.success(res.data);
        //   toast.success(res.data, {
        //     position: toast.POSITION.TOP_RIGHT,
        //   });
        setLoading(false);
        alert("Email sent to your account!");
      } else {
        // setLoading(false);
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <form onSubmit={submit}>
        <h3>Reset Password</h3>

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

        <div className="d-grid">
          {!isLoading && (
            <button type="submit" className="btn btn-primary">
              Send Link
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
              <span className="visually-hidden"> Processing</span>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Forget;
