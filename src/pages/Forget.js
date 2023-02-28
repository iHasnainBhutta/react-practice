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
    //   .then((res) => {

    //   })

    //   .catch((err) => {
    //     alert("Something Went Wrong!");
    //     setLoading(false);
    //     // console.log(err);
    //   });
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

export default Forget;
