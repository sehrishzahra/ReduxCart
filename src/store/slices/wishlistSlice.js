

import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        setWishlist: (state, action) => {
            console.log(action.payload)
            return [...state, action.payload];
        },
        resetWishlist: (state) => {
            state = [];
        },
    },
});

export const { setWishlist } = wishlistSlice.actions;
export const { resetWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;