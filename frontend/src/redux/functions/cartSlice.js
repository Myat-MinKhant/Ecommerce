import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) =>
  localStorage.setItem("Cart_items", JSON.stringify(state.cartItems));

const initialState = {
  cartItems: localStorage.getItem("Cart_items")
    ? JSON.parse(localStorage.getItem("Cart_items"))
    : [],
  cartSubTotal: 0,
  cartFinalTotal: 0,
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  updateLocalStorage,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        updateLocalStorage(state);
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        console.log(action.payload);
        updateLocalStorage(state);
      }
    },

    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = newCartItems;
      updateLocalStorage(state);
    },

    increaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity >= 1) {
        state.cartItems[itemIndex].quantity += 1;
        updateLocalStorage(state);
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        updateLocalStorage(state);
      }
    },

    getSubTotal: (state, action) => {
      //(data.reduce((a,v) =>  a = a + v.prix , 0 ))
      let { subTotal, totalQuantity } = state.cartItems.reduce(
        (cart, item) => {
          const { price, quantity } = item;
          const total = price * quantity;

          cart.subTotal += total;
          cart.totalQuantity += quantity;

          return cart;
        },
        {
          subTotal: 0,
          totalQuantity: 0,
        }
      );
      state.cartSubTotal = subTotal;
      state.cartTotalQuantity = totalQuantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  getSubTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
