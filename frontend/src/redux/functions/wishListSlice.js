import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) =>
  localStorage.setItem("Wishlist_items", JSON.stringify(state.wishListItems));

const initialState = {
  wishListItems: localStorage.getItem("Wishlist_items")
    ? JSON.parse(localStorage.getItem("Wishlist_items"))
    : [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  updateLocalStorage,
  reducers: {
    addToWishList: (state, action) => {
      const itemIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const newWishListItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.wishListItems = newWishListItems;
        updateLocalStorage(state);
      } else {
        state.wishListItems.push(action.payload);
        updateLocalStorage(state);
      }
    },
  },
});

export const { addToWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
