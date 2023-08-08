import { createSlice } from "@reduxjs/toolkit";
import { ascendingOrder, decendingOrder } from "../../utils/sort";

const updateLocalStorage = (state) =>
    localStorage.setItem("ShowAll_Product", JSON.stringify(state.showAllProduct));

const initialState = {
    showAllProduct: localStorage.getItem("ShowAll_Product")
        ? JSON.parse(localStorage.getItem("ShowAll_Product"))
        : {},
};

export const filterProductSlice = createSlice({
    name: "filterProduct",
    initialState,
    updateLocalStorage,
    reducers: {
        showAllProduct: (state, action) => {
            state.showAllProduct = { ...action.payload }
            updateLocalStorage(state);
        },
        filterByColor: (state, action) => {
            const { color, list, sortOption } = action.payload;
            state.showAllProduct.filterProducts = [...list.products]

            state.showAllProduct.filterProducts =
                sortOption && sortOption === 'lowest price'
                    ? state.showAllProduct.filterProducts = ascendingOrder(state.showAllProduct.filterProducts)
                    : sortOption === 'highest price'
                        ? state.showAllProduct.filterProducts = decendingOrder(state.showAllProduct.filterProducts)
                        : [...list.products]

            if (color !== 'All') {
                state.showAllProduct.filterProducts = state.showAllProduct.filterProducts.filter(product => product.color === color)
            }
        },
        filterBySort: (state, action) => {
            const { sort, list, colorOption } = action.payload;
            state.showAllProduct.filterProducts = [...list.products]
            const productFound = colorOption === 'All' || state.showAllProduct.filterProducts.some(product => product.color === colorOption)

            productFound
                ? state.showAllProduct.filterProducts = [...list.products]
                : state.showAllProduct.filterProducts = []

            if (sort !== "All") {
                if (sort === 'lowest price') {
                    state.showAllProduct.filterProducts = ascendingOrder(state.showAllProduct.filterProducts)
                } else if (sort === 'highest price') {
                    state.showAllProduct.filterProducts = decendingOrder(state.showAllProduct.filterProducts)
                }
            }
        }
    }
});

export const { showAllProduct, filterBySort, filterByColor } = filterProductSlice.actions;

export default filterProductSlice.reducer;
