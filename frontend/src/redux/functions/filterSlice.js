import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterResult: {},
};

export const filterSlice = createSlice({
    name: 'filterResult',
    initialState,
    reducers: {
        filter: (state, action) => {
            const { value, list } = action.payload;
            state.filterResult = [...list];
            const findColor = state.filterResult.map(product => product.color)
            const result = findColor.map(color => color)
            console.log(findColor);
            console.log(result);
            console.log(state.filterResult);
        }
    },
})

export const { filter } = filterSlice.actions;

export default filterSlice.reducer;