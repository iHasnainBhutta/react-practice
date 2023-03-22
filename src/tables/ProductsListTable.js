import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import LoginForm from "../forms/LoginForm";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// import { Button } from "react-bootstrap";
import { Products } from "../components/layouts/ProductCard";
import contents from "../content";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import CustomButton from "../components/layouts/CustomButton";
import { type } from "@testing-library/user-event/dist/type";

const ProductsListTable = (props) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [data, setData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  let img = `http://localhost:8008/`;
  const navigate = useNavigate();

  // const handleChange = (event) => {
  //   // Update the state with the checked item
  //   setCheckedItems({
  //     ...checkedItems,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    try {
      //   e.preventDefault();

      // alert("working");
      // console.log(values);
      const res = await axios.get(
        "http://localhost:8008/user/view-product",
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

  const deleteRow = async (product) => {
    const { p_id } = product;
    // console.log("DeleteFunction>", product);
    try {
      //   e.preventDefault();

      // alert("working");
      // console.log(values);
      const res = await axios.delete(
        selectedRows.length >= 2
          ? `http://localhost:8008/user/delete-multi-products`
          : `http://localhost:8008/user/delete-product/${p_id}`,
        selectedRows.length >= 2 ? { data: selectedRows } : { data: product },
        { headers },
        {
          withCredentials: true,
        }
      );
      // alert(">>");
      console.log(selectedRows);
      console.log("res", res);
      if (res.status === 200) {
        // setData(res.data.result);
        const filteredRows = data.filter(
          (product, index) => product.p_id !== p_id
        );
        const filteredMultiRows = data.filter(
          (product, index) => product.p_id !== selectedRows[index]
        );

        // selectedRows.length >= 2 ? (product.p_id !== selectedRows[index]): p_id
        console.log(">", filteredRows);

        setData(selectedRows.length >= 2 ? filteredMultiRows : filteredRows);

        // const selectedTempRow = data.filter((product, index) =>
        //   product.p_id !== selectedRows[index]
        // );
        // console.log("#############", selectedTempRow);

        // const combinedArr = data.map(item1 => sele.map(item2 => item1 + item2)).flat();

        // const uniqueIds = combinedArr.filter((item, index) => combinedArr.indexOf(item) === index);

        // console.log(uniqueIds);

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
        navigate("/ProductsList", { replace: true });
        setSelectedRows([])

        // console.log("Result ", res.data.result);
      } else {
        console.error(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [handleDelBtn, setHandleDelBtn] = useState(false);
  useEffect(() => {
    if (selectedRows.length > 1 && selectedRows.length <= data.length) {
      setIsTrue(true);
      // console.log(">", selectedRows.length > 1 && selectedRows.length < data.length);
    } else if (selectedRows.length <= 1) {
      setIsTrue(false);
      console.log(">>here");
    }
  }, [selectedRows]);

  console.log(selectedRows);
  const handleSelectAllRows = () => {
    const selected = selectedRows.length !== data.length;
    setIsTrue(!isTrue);
    setSelectedRows(selected ? data.map((row) => row.p_id) : []);
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  return (
    // <div className="App">
    //   {data.map((contents) => (
    //     <Products
    //       key={contents.p_id}
    //       image={img + contents.image_url}
    //       name={contents.product_name}
    //       price={contents.p_price}
    //       // totalSales={contents.totalSales}
    //       // timeLeft={contents.timeLeft}
    //       // rating={contents.rating}
    //     />
    //   ))}
    // </div>
    <div style={{ marginTop: 50 }}>
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
          // border: "1px solid",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
        }}>
        {isTrue && <CustomButton iconName={<FaTrash />} onClick={deleteRow} />}
        <CustomButton
          iconName={<FaPlus />}
          onClick={() => (window.location.href = "/AddProduct")}
        />
      </div>
      <Table striped bordered responsive style={{ marginTop: 3 }}>
        <thead>
          <tr>
            <th>
              {/* <input
                type="checkbox"
                name="selectall"
                checked={!data.some((product) => product?.isChecked !== true)}
                onChange={handleOnChange}
              /> */}

              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={handleSelectAllRows}
              />
            </th>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Category</th>
            <th>Stock Quantity</th>
            <th>Product Price</th>
            {/* <th>Password</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => {
            return (
              <tr key={i.id}>
                <td key={i.id}>
                  {" "}
                  {/* <input
                    type="checkbox"
                    id="topping"
                    name={i.p_id}
                    // checked={i?.isChecked || false}
                    // onChange={handleOnChange}
                    checked={i?.isChecked || selectedRows.includes(i.p_id)}
                    onChange={() => handleSelectRow(i.p_id)}
                  /> */}
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(i.p_id)}
                    onChange={() => handleSelectRow(i.p_id)}
                  />
                </td>
                <td>{i.p_id}</td>
                <div
                  style={{
                    overflow: "hidden",
                    height: 50,
                    width: 60,
                    padding: 4,
                  }}>
                  <img
                    src={img + i.image_url}
                    alt="product-img"
                    style={{ height: "100%", width: "100%" }}
                    // className="productImage"
                  ></img>
                </div>

                <td>{i.product_name}</td>
                <td>{i.product_description}</td>
                <td>{i.product_category}</td>
                <td>{i.stock_quantity}</td>
                <td>{i.p_price}</td>
                {/* <td>{i.password}</td> */}
                <td key={i.id}>
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{
                        backgroundColor: "#010e4d",
                        // borderRadius: 100,
                        // padding: "0.50rem 0.9rem",
                      }}
                      tog></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="">Edit</Dropdown.Item>
                      <Dropdown.Item onClick={() => deleteRow(i)}>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <Button onSubmit={console.log(">>>>>>>>>>>>>>", i.user_id)}>Delete</Button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsListTable;
