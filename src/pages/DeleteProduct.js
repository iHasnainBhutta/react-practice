import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL, IMG_URL } from "../api/urls";

const DeleteProduct = (props) => {
  const [productId, setProductId] = useState();
  const [data, setData] = useState([]);
  //   const [currentProduct, setCurrentProduct] = useState([]);
  console.log("!!!!!!!", data);
  const navigate = useNavigate();

  const DelProductHandler = async (e) => {
    console.log(">>>>>>>>>>>>>>>>........................", e);
    const { p_id, image_url } = e;

    try {
      // alert("working");
      // console.log(values);
      const res = await axios.delete(
        // `http://localhost:8008/user/delete-product/${e}`,
        URL + `delete-product/${p_id}`,
        { data: e },
        { headers },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 200) {
        setData(res.data.result);

        const filteredRows = data.filter((product) => product.p_id !== e.p_id);
        setData(filteredRows);
        toast.success("Product Delete Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        // toast("Wow so easy!");

        navigate("/deleteProduct", { replace: true });
        // setTimeout(() => {
        //   // history.back();
        // }, 3000);

        // window.location.href = "/deleteProduct";
        console.log(">>", res.data.result);
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
  useEffect(() => {
    getData();
  }, []);

  const headers = {
    "Content-Type": "application/json",
  };
  console.log(">>", data);
  //   console.log(columns[1].Header);
  // console.log(">>>>>>>>>>>>>>>>>>>>>..", data[0].verified);
  const getData = async (e) => {
    try {
      //   e.preventDefault();

      // alert("working");
      // console.log(values);
      const res = await axios.get(
        URL + "view-product",
        { headers },
        {
          withCredentials: true,
        }
      );
      //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", res.status);
      if (res.status === 200) {
        setData(res.data.result);
        // console.log(">>", res.data.result);
        // console.log(res);

        //   toast.success(res.data);
        //   toast.success(res.data, {
        //     position: toast.POSITION.TOP_RIGHT,
        //   });
        // console.log(">>>>>", res.data.result.verified);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // let img = `http://localhost:8008/`;

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "Right",
        // alignItems: "Right",
        // height: "100vh",
        flexDirection: "column",
      }}
    >
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          margin: 20,
          //   flexDirection:"row"
        }}
      >
        <h3>Delete Products</h3>
      </div>
      <br></br>

      <div class="container">
        <div class="row">
          {data.map((products) => (
            <div class="col-md-4">
              <div className="productList">
                <Card
                  style={{
                    width: "20rem",
                    alignItems: "center",
                    padding: 15,
                    height: "15rem",
                    //   margin: 20,
                    flexDirection: "row",
                    borderRadius: 20,
                    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <Card
                    style={{
                      borderRadius: 120,
                      overflow: "hidden",
                      //   height: screenSize.dynamicHeight / 3,
                      //   width: screenSize.dynamicWidth / 12,
                      height: 125,
                      width: screenSize.dynamicWidth / 12,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                        borderWidth: 0,
                      }}
                      src={
                        products.image_url != null
                          ? IMG_URL + products.image_url
                          : require("../components/assets/empty.jpg")
                      }
                      onResize=""
                    />
                  </Card>
                  <Card.Body>
                    <Card.Title>{products.product_name}</Card.Title>
                    <Card.Text>${products.p_price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => DelProductHandler(products)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* {data.map((products) => (
        <div
          style={{
            //   position: "relative",
            display: "flex",
            //   justifyContent: "center",
            width: "100%",
            margin: 20,
            //   border: "2px solid",
          }}
        >
          <Card style={{maxWidth: "16%", minWidth:"16%"}}>
            <Card.Body>
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div
                  style={{
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    //   border: "2px solid",
                    overflow: "hidden",
                    Minwidth: 80,
                    maxWidth: 80,
                    minHeight: 80,
                    maxHeight: 80,
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={img + products.image_url}
                    //   src={require("../components/assets/shopping.png")}
                    alt="product-img"
                    //   onResize={"contain"}
                    // className="productImage"
                  />
                </div>
                <div style={{  marginLeft: 8 }}>
                  <h3 className="productName">{products.product_name}</h3>
                  <div
                    style={{
                      // border: "1px solid",
                      alignItems: "center",
                      justifySelf: "center",
                      // marginLeft: 5,
                    }}
                    className="productPrice"
                  >
                    ${products.p_price}
                  </div>
                </div>
                <div style={{ marginTop: 2, width: "55px", height: 30 }}>
                  <button
                    style={{
                      borderRadius: " 50%",
                      height: "100%",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      backgroundColor: "#fff",
                      border: 0.1,
                      boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25);",
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))} */}
    </div>
  );
};

export default DeleteProduct;
