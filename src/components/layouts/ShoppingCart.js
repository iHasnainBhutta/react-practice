import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = (props) => {
  let [count, setCount] = useState(0);
  let [totalprice, setTotalPrice] = useState();

  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };
  // console.log(">>>>>>>>>>>>>>>>>>>>", count);
  function decrementCount() {
    count = !count <= 0 ? count - 1 : 0;
    setCount(count);
  }

  const { cart } = useSelector((state) => state.allCart);

  // console.log("cart---->", cart[0].p_price);
  let img = `http://localhost:8008/`;

  const [dataAray, setDataArray] = useState(cart);

  const separateArray = [];

  const items = [];
  let total_=0;

  let myArray = "";
  useEffect(() => {
    // cart.map((data) => console.log("ider",data[], items));

    // for (let i = 0; i < cart.length; i++) {
    //   let admin = [];
    //   admin.push(cart[i].p_price);

    //   items.push(admin)
    // items.push(admin);
    // console.log("ider", cart[i] )
    let total = 0;
    if (cart) {
      myArray = Object.values(cart).map((arr) => arr.p_price);
      setTotalPrice(myArray);
    }
    // }
  }, []);
  
  console.log("!!", totalprice);
  
  for (let i = 0; i <totalprice?.length; i++) {
    total_ =  total_ + totalprice[i];
    // console.log("Heres",totalprice[i], total_);
  }
  const ShipCharge = 45;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
      <section classNameName="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {props.count} items</h5>
                </div>
                <div className="card-body">
                  {cart.map((data) => (
                    <>
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0"></div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}></div>

                          <p className="text-start text-md-center">
                            {/* <strong>$17.99</strong> */}
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light">
                            <img src={img + data.image_url} className="w-100" />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}></div>
                            </a>
                          </div>
                        </div>
                        <hr className="my-4" />

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{data.product_name}</strong>
                          </p>
                          <p>{data.product_category}</p>
                          <p>{data.product_description}</p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ alignItems: "center" }}>
                            <button
                              style={{
                                marginRight: 10,
                                borderRadius: 30,
                                height: 28,
                                width: "30%",
                              }}
                              className="btn-primary px-3 ms-1"
                              onClick={decrementCount}>
                              <div
                                style={{
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}>
                                <FaMinus />
                              </div>
                            </button>

                            <div
                              style={{ marginTop: 24 }}
                              className="form-outline">
                              <input
                                id="form1"
                                min="9"
                                name="quantity"
                                value={count}
                                type="number"
                                className="form-control"
                                style={{
                                  border: "1px solid",
                                  alignSelf: "center",
                                }}
                              />
                              <label className="form-label" for="form1">
                                Quantity
                              </label>
                            </div>

                            <button
                              style={{
                                marginLeft: 10,
                                borderRadius: 30,
                                height: 28,
                                width: "30%",
                              }}
                              className="btn-primary px-3 ms-1"
                              onClick={incrementCount}>
                              <div
                                style={{
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}>
                                <FaPlus />
                              </div>
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>Rs. {data.p_price} PKR</strong>
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                    style={{ padding: 3 }}
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                    style={{ padding: 3 }}
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                    style={{ padding: 3 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {cart.map((data) => (
                      <>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          {data.product_name}
                          <span>Rs. {data.p_price} PKR</span>
                        </li>
                      </>
                    ))}
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>{ShipCharge} PKR</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                       
                          <strong>Rs. {total_ + ShipCharge} PKR </strong>
                    
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
