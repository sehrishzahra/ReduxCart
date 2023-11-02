

import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState : [] ,
    reducers: {
        setWishlist: (state , action) => {
            console.log(action.payload)
            return [...state, action.payload];
        },
    },
});

export const { setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;