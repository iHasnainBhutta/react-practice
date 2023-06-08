import { createSlice } from "@reduxjs/toolkit";


const initialState = { cart: [], items: "", totalQuantity: 0, totalPrice: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {payload} = action
      console.log("action", payload);
      // let find = state.cart.findIndex(
      //   (item) => item.p_id === action.payload.p_id
      // );
      // if (find >= 0) {
      //   state.cart[find].totalQuantity += 1;
      //   console.log(state.cart[find].totalQuantity);
      // } else {
        // const newItem = { ...payload, totalQuantity: 1 };
        // state.cart.push(newItem);

        const { p_id } = action.payload;

        const item = state.cart.find((item) => item.p_id === p_id);
        if (item) {
          item.totalQuantity += 1;
        }
        else{
          const newItem = { ...payload, totalQuantity: 1 };
        state.cart.push(newItem);
        }
      // state.cart.push(action.payload);

      // }
    },
    incrementQuantity: (state, action) => {
      const { p_id } = action.payload;

      const item = state.cart.find((item) => item.p_id === p_id);
      if (item) {
        item.totalQuantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { p_id } = action.payload;
      const item = state.cart.find((item) => item.p_id === p_id);

      if (item && item.totalQuantity > 1) {
        item.totalQuantity -= 1;
      }
    },
  },
});

export const { addToCart, decrementQuantity, incrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
