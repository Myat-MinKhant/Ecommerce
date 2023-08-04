import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterProduct: {},
};

export const filterSlice = createSlice({
    name: 'filterProduct',
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filterProduct = { ...action.payload }
            console.log(state.filterProduct);
        }
    },
})

export const { filter } = filterSlice.actions;

export default filterSlice.reducer;