import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function AddProductForm() {
  const [data, setData] = useState("");
  const [productName, setProductName] = useState();
  const [productDes, setProductDes] = useState();
  const [productCategory, setProductCategory] = useState();
  const [stock, setStock] = useState();
  const [productPrice, setProductPrice] = useState();
  const [check, setCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const headers = {
    "Content-Type": "application/json",
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // alert("working");
      // console.log(values);
      const res = await axios.post(
        `http://localhost:8008/user/insert-product`,
        {
          product_name: productName,
          product_description: productDes,
          product_category: productCategory,
          stock_quantity: stock,
          p_price: productPrice,
        },
        { headers },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 200) {
        // alert("working");
        // setData(res.data.result);
        setLoading(false);
        window.location.href = "/ViewUsers";
        // console.log(">>", res.data.result);
        // console.log(res);

        //   toast.success(res.data);
        //   toast.success(res.data, {
        //     position: toast.POSITION.TOP_RIGHT,
        //   });
        // console.log(">>>>>", res.data.result.verified);
      } else {
        alert(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={addProduct}>
      <h3>Add New Product</h3>

      <div className="mb-3">
        <label>Product Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Product Descritption</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Description"
          value={productDes}
          onChange={(e) => setProductDes(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Product Category</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Category"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Stock Quantity</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Stock Quantity"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        {!isLoading && (
          <button type="submit" className="btn btn-primary">
            Add
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
  );
}

export default AddProductForm;
