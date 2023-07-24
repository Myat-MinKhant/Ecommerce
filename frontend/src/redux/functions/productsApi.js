import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return fetch("http://localhost:5000/products").then((res) => res.json());
  }
);

const initialState = {
  products: [],
  loading: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = "success";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = "pending";
    },
  },
});

export default productSlice.reducer;
