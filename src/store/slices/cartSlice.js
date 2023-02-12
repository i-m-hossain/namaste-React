import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, { payload, type }) => {
            console.log(payload)
            state.items.push(payload)
        },
    },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
