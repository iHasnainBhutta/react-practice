import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useParams, useNavigate } from "react-router-dom";

function ResetForm() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [check, setCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  // console.log(password);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
  };

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
        setCheck(true);
        setLoading(false);
        //   toast.success(res.data);
        setInterval(navigate("/login"), 2000);
      } else {
        setLoading(false);
        alert(res);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return !check ? (
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
  ) : (
    <div>
      <h3>Thank you! your password has been changed</h3>
    </div>
  );
}

export default ResetForm;
