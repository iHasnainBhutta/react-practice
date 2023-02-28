import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useNavigate } from "react-router-dom";

function ResetForm() {
  const [data, setData] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [check, setCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  console.log(password);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
  };
  //   const handleSubmit = async () => {
  //     try {
  //       const response = await axios
  //         .post("http://localhost:8008/user/user-login", {
  //           email: email,
  //           password: password,
  //         })
  //         .then((response) => {
  //           if (response.data) {
  //             alert(response);
  //           }
  //           return response.data;
  //         });
  //       alert(response);
  //     } catch (err) {
  //       alert(err.response.data);
  //     }
  //   };

  //   useEffect(() => {
  //     const res = axios.post(
  //       "http://localhost:8008/user/user-login",
  //       { email: email, password: password },
  //       { headers }
  //     );
  //     if (res.status === 200) {
  //       setCheck(true);
  //       //   toast.success(res.data);
  //       //   toast.success(res.data, {
  //       //     position: toast.POSITION.TOP_RIGHT,
  //       //   });
  //       setLoading(false);
  //       setData(res);
  //       console.log(res);
  //     } else {
  //       setLoading(false);
  //       alert(res.data.message);
  //     }
  //   });

  const submit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.patch(
        `http://localhost:8008/user/reset-password/${id}`,
        { password: password },
        { headers },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setLoading(false);
        setData(res);
        //   toast.success(res.data);
        navigate("/login");
      } else {
        setLoading(false);
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={submit}>
      <h3>Reset password</h3>

      <div className="mb-3">
        <label>Enter Password</label>
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
        <label>Enter Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        {!isLoading && (
          <button type="submit" className="btn btn-primary">
            Continue
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
            <span className="visually-hidden">Please Wait</span>
          </Button>
        )}
      </div>

      <a href="/login">Return to Login</a>
    </form>
  );
}

// <Form>
//   <h3>Login</h3>

//   <Form.Group
//     className="mb-3"
//     controlId="formBasicEmail"
//     style={{ marginTop: 30 }}
//   >
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     {/* <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text> */}
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Remember me" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>

export default ResetForm;
