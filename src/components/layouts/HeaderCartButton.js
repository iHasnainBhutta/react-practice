import CartIcon from "../assets/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span style={{ minWidth: 71 }}>Your Cart</span>
      {props.totalCart > 0 && (
        <span className={classes.badge}>{props.totalCart}</span>
      )}
    </button>
  );
};

export default HeaderCartButton;
