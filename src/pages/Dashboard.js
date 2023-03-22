import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const Dashboard = () => {
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

  const Contents = [
    {
      id: 1,
      title: "Add Product",
      btnTitle: "ADD PRODUCT",
      href: "/AddProduct",
      icon: FaPlus,
    },
    {
      id: 2,
      title: "View Product",
      btnTitle: "VIEW PRODUCT",
      href: "/ProductsList",
      icon: FaEye,
    },
    {
      id: 3,
      title: "Edit Product",
      btnTitle: "EDIT PRODUCT",

      href: "#",
      icon: FaEdit,
    },
    {
      id: 1,
      title: "Delete Product",
      btnTitle: "DELETE PRODUCT",
      icon: FaTrash,
      href: "/deleteProduct",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div class="container">
        <div class="row">
          {Contents.map((e) => (
            <div class="col-md-3">
              <div className="productList">
                <Card
                  style={{
                    width: "18rem",
                    alignItems: "center",
                    padding: 15,
                    height: "10rem",
                    //   margin: 20,
                    flexDirection: "row",
                    borderRadius: 20,
                    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <Card.Body>
                    <e.icon
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        right: 30,
                        marginTop: 3,
                      }}
                    />

                    <Card.Title>{e.title}</Card.Title>

                    {/* <Button
                      key={e.id}
                      variant="primary"
                      onClick={() => (window.location.href = e.href)}
                    >
                      {e.btnTitle}
                    </Button> */}

                    <Card.Link href={e.href}>{e.btnTitle}</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-start",

          margin: 20,
          border: "1px solid",
          maxWidth: "15%",
          minWidth: "12%",
          borderRadius: 20,
          height: "100px",
          overflow: "hidden",
        }}
      >
        <Card style={{ width: "100%", height: "100%" }}>
          <Card.Body>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Card.Title>Add Product</Card.Title>
              <FaPlus />
            </div>
            <Card.Link href="/AddProduct">ADD PRODUCT</Card.Link>
          </Card.Body>
        </Card>
      </div> */}
    </div>
  );
};

export default Dashboard;
