import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
            toast("item is removed from cart")
        },
    },
});

export const { addItem,removeItem } = cartSlice.actions;

export default cartSlice.reducer;
