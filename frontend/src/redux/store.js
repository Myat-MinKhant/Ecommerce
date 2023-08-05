import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./functions/productsApi";
import cartReducer from "./functions/cartSlice";
import wishListReducer from "./functions/wishListSlice";
import productDetailReducer from "./functions/productDetailSlice";
import categoriesReducer from './functions/categoriesApi'
import showAllProductReducer from './functions/ShowAllProductSlice'

export default configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishListItems: wishListReducer,
    productDetail: productDetailReducer,
    categories: categoriesReducer,
    showAllProduct: showAllProductReducer,
    filterResult: showAllProductReducer,
  },
});
