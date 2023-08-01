import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    return fetch("https://ecommerce-myatminkhant.onrender.com/products/categories").then(
      (res) => res.json()
    );
  }
);

const initialState = {
  categories: [],
  loading: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = "success";
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.loading = "pending";
    },
  },
});

export default categoriesSlice.reducer;