import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./functions/productsApi";
import cartReducer from "./functions/cartSlice";
import wishListReducer from "./functions/wishListSlice";
import productDetailReducer from "./functions/productDetailSlice";
import showMoreReducer from "./functions/showAllSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishListItems: wishListReducer,
    productDetail: productDetailReducer,
    showMore: showMoreReducer,
  },
});
