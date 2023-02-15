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
            const target = state.items.findIndex(
                (item) => item.id === payload.id
            );
            state.items.splice(target, 1);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
