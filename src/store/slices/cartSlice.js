import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, { payload, type }) => {
            state.items.push(payload);
        },
        removeItem: (state, { payload, type }) => {
            state.items = state.items.filter((item) => item.id !== payload.id);
        },
    },
});

export const { addItem,removeItem } = cartSlice.actions;

export default cartSlice.reducer;
