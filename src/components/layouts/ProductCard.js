import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
  FaTrash,
} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import styles from './ProductCard2.module.css'


export function Products(props) {
  const navigate = useNavigate();
  return (
    // <div
    //   className="productList"
    //   // onClick={() => navigate("/product-view",)}
    // >
    //   <div key={props.id} className="productCard">
    //     <img src={props.image} alt="product-img" className="productImage"></img>

    //     <FaShoppingCart
    //       onClick={() => navigate("/product-view")}
    //       className={"productCard__cart"}
    //     />
    //     <FaRegBookmark className={"productCard__wishlist"} />
    //     <FaFireAlt className={"productCard__fastSelling"} />

    //     <div className="productCard__content">
    //       <h3 className="productName">{props.name}</h3>
    //       <div className="displayStack__1">
    //         <div className="productPrice">${props.price}</div>
    //         <div className="productSales">{props.totalSales} units sold</div>
    //       </div>
    //       <div className="displayStack__2">
    //         <div className="productRating">
    //           {[...Array(props.rating)].map((index) => (
    //             <FaStar id={index + 1} key={index} />
    //           ))}
    //         </div>
    //         <div className="productTime">{props.timeLeft} days left</div>
    //       </div>

    //       <button
    //         onClick={props.onClick}
    //         style={{ borderRadius: 30 }}
    //         className="btn-primary">
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className={styles.productcard}>
    <img className= {styles.productImage} src={props.image} />
    <div className={styles.productDetails}>
      <h3 className={styles.productName}>{props.name}</h3>
      <p className={styles.productPrice}>${props.price}</p>
    </div>
    <button className={styles.buyButton}   onClick={props.onClick} >
      Add to Cart
    </button>
  </div>

  );
}
