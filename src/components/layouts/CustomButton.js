import CartIcon from "../assets/CartIcon";
import classes from "./CustomButton.module.css";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const CustomButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>{props.iconName}</span>
      {/* <span style={{ minWidth: 71 }}>{props.title}</span> */}
    </button>
  );
};

export default CustomButton;
