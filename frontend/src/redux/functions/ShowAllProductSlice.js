import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) =>
  localStorage.setItem("ShowAll_Product", JSON.stringify(state.showAllProduct));

const initialState = {
  showAllProduct: localStorage.getItem("ShowAll_Product")
    ? JSON.parse(localStorage.getItem("ShowAll_Product"))
    : {},
};

export const showAllProductSlice = createSlice({
  name: "showAllProduct",
  initialState,
  updateLocalStorage,
  reducers: {
    showAllProducts: (state, action) => {
      // console.log(action.payload);
      state.showAllProduct = { ...action.payload }
      updateLocalStorage(state);
      // console.log(state.showAllProduct);
    },
    filterByColor: (state, action) => {
      const { value, list } = action.payload;
      if (value === "All") {
        state.showAllProduct.filterProducts = [...list.products];
      } else {
        state.showAllProduct = { ...list };
        state.showAllProduct.filterProducts = state.showAllProduct.products.filter(product => product.color === value.toLowerCase());
      }
      // state.showAllProduct.filterProducts = state.showAllProduct.products.filter(product => product.color === value.toLowerCase());
      // console.log(action.payload);
    },
    filterByPriceLowestToHighest: (state, action) => {
      if (!state.showAllProduct.filterProducts) {
        state.showAllProduct.filterProducts = [...action.payload.products];
      }
      state.showAllProduct.filterProducts = state.showAllProduct.filterProducts?.sort((a, b) => (a.price > b.price) ? 1 : -1);
    },
    filterByPriceHighestToLowest: (state, action) => {
      if (!state.showAllProduct.filterProducts) {
        state.showAllProduct.filterProducts = [...action.payload.products];
      }
      state.showAllProduct.filterProducts = state.showAllProduct.filterProducts?.sort((a, b) => (a.price < b.price) ? 1 : -1);
    },
  },
});

export const { showAllProducts, filterByColor, filterByPriceLowestToHighest, filterByPriceHighestToLowest } = showAllProductSlice.actions;

export default showAllProductSlice.reducer;
