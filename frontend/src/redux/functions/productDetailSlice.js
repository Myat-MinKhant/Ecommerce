import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetail: {},
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    productDetailShow: (state, action) => {
      console.log(action.payload);
      state.productDetail = { ...action.payload };
      console.log(state);
    },
  },
});

export const { productDetailShow } = productDetailSlice.actions;

export default productDetailSlice.reducer;
