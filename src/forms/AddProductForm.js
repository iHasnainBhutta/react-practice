import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import FormData from "form-data";
import { resolveUrl } from "../api/urls";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function AddProductForm() {
  const [data, setData] = useState("");
  const [productName, setProductName] = useState();
  const [productImage, setProductImage] = useState();
  console.log(">Image", productImage ? productImage[0] : "");
  const [productDes, setProductDes] = useState();
  const [productCategory, setProductCategory] = useState();
  const [stock, setStock] = useState();
  const [productPrice, setProductPrice] = useState();
  const [check, setCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const headers = {
    "Content-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  };

  const addProduct = async (e) => {
    e.preventDefault();
    // console.log(">>>>>>>>>>>>>>>>>>", productImage[0]);
    // const imageName = resolveUrl(productImage);
    // console.log(filename);
    const formData = new FormData();
    formData.append("image_url", productImage[0], productImage[0].name);
    formData.append("product_name", productName);
    formData.append("product_description", productDes);
    formData.append("product_category", productCategory);
    formData.append("stock_quantity", stock);
    formData.append("p_price", productPrice);
    console.log(">>", formData);
    try {
      setLoading(true);

      // alert("working");
      // console.log(values);
      const res = await axios.post(
        `http://localhost:8008/user/insert-product`,
        // {
        //   product_name: productName,
        //   product_description: productDes,
        //   product_category: productCategory,
        //   stock_quantity: stock,
        //   p_price: productPrice,
        // },
        formData,
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
        toast.success("Product Added Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });

            setTimeout(() => {
              navigate("/products", { replace: true });
          // history.back();
        }, 2000);

        // window.location.href = "/home";
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        // draggable
        // pauseOnHover
        theme="light"
      />
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
        <label>Product Image</label>
        <input
          type="file"
          className="form-control"
          placeholder="Upload Product Image Here.."
          onChange={(e) => setProductImage(e.target.files)}
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
          <button style={{     maxHeight: 30,
            maxWidth: 43}} type="submit" className="btn btn-primary">
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
