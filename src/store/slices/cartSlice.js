import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
};

//   const initialStateReducer2 = {
//     data: [],
//     isLoading: false,
//   };
const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        setCartItems: (state = initialState, action) => {
            console.log(action.payload);
            const { newPrice, title, url, id } = action.payload;
            const newItem = {
                id: id,
                newPrice: newPrice,
                title: title,
                image: url,
                subTotal: newPrice,
            };
            const existingItem = state.items.find(item => item.id === id);

            if (!existingItem) {
                return {
                    ...state,
                    items: [...state.items, newItem],
                };
            }
            return state;
            // if (existingItem === -1) {
            //     state.items.push(newItem);
            // } 
            // else {
            //     state.items[existingItem] = {
            //         ...state.items[existingItem],
            //         subTotal: newPrice,
            //     };
            // }
        },
        removeCartItems: (state = initialState) => {
            state.items = [];
        },
        updateCart: (state = initialState, action) => {
            const { id, val } = action.payload;
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            subTotal: item.newPrice * Number(val),
                        };
                    }
                    return item;
                }),
            };
        },
        setAlltoCartItems: (state = initialState, action) => {
            const newItems = action.payload;
            const itemsWithSubTotal = newItems.map(item => ({
                ...item,
                subTotal: item.newPrice
            }));

            return {
                ...state,
                items: [...state.items, ...itemsWithSubTotal]
            };
        },
        subTotalOfCartItems: (state = initialState) => {
            state.total = state.items.reduce((total, item) => Number(total) + Number(item.newPrice), 0);
        },
        removeSubTotal: (state = initialState) => {
           
             state.total = 0
        },
        updateSubTotal: (state = initialState) => {
            state.total = state.items.reduce((total, item) => Number(total) + Number(item.subTotal), 0);
        }
    },
});

export const { setCartItems } = cartSlice.actions;
export const { removeCartItems } = cartSlice.actions;
export const { updateCart } = cartSlice.actions;
export const { setAlltoCartItems } = cartSlice.actions;
export const { subTotalOfCartItems } = cartSlice.actions;
export const { removeSubTotal } = cartSlice.actions;
export const { updateSubTotal } = cartSlice.actions;
export default cartSlice.reducer;
