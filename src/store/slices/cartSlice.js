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
            const target = state.items.findIndex(
                (item) => item.id === payload.id
            );
            state.items.splice(target, 1);
        },
        deleteFromCart: (state, { payload, type }) => {
            state.items = state.items.filter((item) => item.id !== payload.id);
            toast("item is removed from cart");
        },
        clearCart: (state, { payload, type }) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, deleteFromCart, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
