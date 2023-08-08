import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./functions/productsApi";
import cartReducer from "./functions/cartSlice";
import wishListReducer from "./functions/wishListSlice";
import productDetailReducer from "./functions/productDetailSlice";
import categoriesReducer from './functions/categoriesApi'
import filterProductReducer from './functions/filterProductSlice'

export default configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishListItems: wishListReducer,
    productDetail: productDetailReducer,
    categories: categoriesReducer,
    filterProduct: filterProductReducer,
  },
});
