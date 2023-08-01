import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAllProduct: {},
};

export const showAllProductSlice = createSlice({
  name: "showAllProduct",
  initialState,
  reducers: {
    showAllProduct: (state, action) => {
      console.log(action.payload);
      state.showAllProduct = { ...action.payload }
      console.log(state.showAllProduct);
    },
  },
});

export const { showAllProduct } = showAllProductSlice.actions;

export default showAllProductSlice.reducer;
