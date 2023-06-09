import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import LoginForm from "../forms/LoginForm";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Products } from "../components/layouts/ProductCard";
import contents from "../content";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { URL, IMG_URL } from "../api/urls";
import Lottie from "react-lottie";
import * as animationData from "../components/assets/empty.json";

const ProductsView = (props) => {
  const [data, setData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const items = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  console.log("here ", items);

  const handleOnChange = (e) => {
    const { name, checked } = e.target;
    // alert(name);
    if (name === "selectall") {
      const checkedValue = data.map((user) => {
        return { ...user, isChecked: checked };
      });
      // console.log(checkedValue);
      setData(checkedValue);
    } else {
      let items = [];
      const checkedValue = data.map((user) => {
        if (user.p_id == name) {
          return { ...user, isChecked: checked };
        } else {
          return user;
          // console.log("Else", user.p_id, name);
        }
      });
    }
  };

  const headers = {
    "Content-Type": "application/json",
  };

  // let IMG_URL = `http://localhost:8008/`;

  const [rows, setRows] = useState(data);

  const deleteRow = async (rowId) => {
    // console.log(rowId);
    try {
      //   e.preventDefault();

      const res = await axios.delete(
        URL + `delete-product/${rowId}`,
        { headers },
        {
          withCredentials: true,
        }
      );
      // console.log(res);
      if (res.status === 200) {
        setData(res.data.result);

        const filteredRows = rows.filter((row) => row.user_id !== rowId);
        setRows(filteredRows);
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

  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    try {
      //   e.preventDefault();

      const res = await axios.get(
        URL + "view-product",
        { headers },
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        setData(res.data.result);

        if (res.data.result.length === 0) {
          setIsEmpty(false);
        }
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!isEmpty && <Lottie options={defaultOptions} height={200} width={200} />}
      <div className="row p-20">
        {data.map((contents) => (
          <Products
            key={contents.p_id}
            image={IMG_URL + contents.image_url}
            name={contents.product_name}
            price={contents.p_price}
            onClick={() => dispatch(addToCart(contents))}
            // totalSales={contents.totalSales}
            // timeLeft={contents.timeLeft}
            // rating={contents.rating}
          />
        ))}
      </div>
    </div>
    // <Table striped bordered responsive>
    //   <thead>
    //     <tr>
    //       <th>
    //         <input
    //           type="checkbox"
    //           name="selectall"
    //           checked={!data.some((user) => user?.isChecked !== true)}
    //           onChange={handleOnChange}
    //         />
    //         {isChecked ? "Select all" : " "}
    //       </th>
    //       <th>#</th>
    //       <th>Product Name</th>
    //       <th>Product Description</th>
    //       <th>Product Category</th>
    //       <th>Stock Quantity</th>
    //       <th>Product Price</th>
    //       {/* <th>Password</th> */}
    //       <th>Action</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((i) => {
    //       return (
    //         <tr key={i.id}>
    //           <td key={i.id}>
    //             {" "}
    //             <input
    //               type="checkbox"
    //               id="topping"
    //               name={i.p_id}
    //               checked={i?.isChecked || false}
    //               onChange={handleOnChange}
    //             />
    //           </td>
    //           <td>{i.p_id}</td>
    //           <td>{i.product_name}</td>
    //           <td>{i.product_description}</td>
    //           <td>{i.product_category}</td>
    //           <td>{i.stock_quantity}</td>
    //           <td>{i.p_price}</td>
    //           {/* <td>{i.password}</td> */}
    //           <td key={i.id}>
    //             <button onClick={() => (window.location.href = "/AddProduct")}>
    //               Add
    //             </button>
    //             <button
    //               style={{ marginLeft: 10 }}
    //               onClick={() => deleteRow(i.p_id)}
    //             >
    //               Delete
    //             </button>
    //             {/* <Button onSubmit={console.log(">>>>>>>>>>>>>>", i.user_id)}>Delete</Button> */}
    //           </td>
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </Table>
  );
};

// import { useTable } from "react-table";
// const AllUsers = () => {
//   const data = React.useMemo(
//     () => [
//       {
//         col1: "Hello",
//         col2: "World",
//       },
//       {
//         col1: "react-table",
//         col2: "rocks",
//       },
//       {
//         col1: "whatever",
//         col2: "you want",
//       },
//     ],
//     []
//   );

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Column 1",
//         accessor: "col1", // accessor is the "key" in the data
//       },
//       {
//         Header: "Column 2",
//         accessor: "col2",
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });
//   return (
//     <table {...getTableProps()} style={{ border: " 1px solid black" }}>
//       <thead style={{ border: " 1px solid black" }}>
//         {
//           // Loop over the header rows
//           headerGroups.map((headerGroup) => (
//             // Apply the header row props
//             <tr
//               {...headerGroup.getHeaderGroupProps()}
//               style={{ border: " 1px solid black" }}
//             >
//               {
//                 // Loop over the headers in each row
//                 headerGroup.headers.map((column) => (
//                   // Apply the header cell props
//                   <th
//                     {...column.getHeaderProps()}
//                     style={{ border: " 1px solid black" }}
//                   >
//                     {
//                       // Render the header
//                       column.render("Header")
//                     }
//                   </th>
//                 ))
//               }
//             </tr>
//           ))
//         }
//       </thead>
//       {/* Apply the table body props */}
//       <tbody {...getTableBodyProps()} style={{ border: " 1px solid black" }}>
//         {
//           // Loop over the table rows
//           rows.map((row) => {
//             // Prepare the row for display
//             prepareRow(row);
//             return (
//               // Apply the row props
//               <tr {...row.getRowProps()} style={{ border: " 1px solid black" }}>
//                 {
//                   // Loop over the rows cells
//                   row.cells.map((cell) => {
//                     // Apply the cell props
//                     return (
//                       <td
//                         {...cell.getCellProps()}
//                         style={{ border: " 1px solid black" }}
//                       >
//                         {
//                           // Render the cell contents
//                           cell.render("Cell")
//                         }
//                       </td>
//                     );
//                   })
//                 }
//               </tr>
//             );
//           })
//         }
//       </tbody>
//     </table>
//   );
// };

export default ProductsView;
