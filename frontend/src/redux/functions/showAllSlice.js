import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showMore: {
        index: 5,
        showMore: false,
    }
};

export const showMoreSlice = createSlice({
    name: "showMore",
    initialState,
    reducers: {
        showMore: (state, action) => {
            state.index = state.index + 5;
            if (state.index >= action.length) {
                state.showMore(true)
            } else {
                state.showMore(false)
            }
        }
    },
});

export const { showMore } = showMoreSlice.actions;

export default showMoreSlice.reducer;