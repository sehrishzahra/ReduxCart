import { configureStore } from '@reduxjs/toolkit'
import StoreData from './slices/StoreData'
import whishlistSlice from './slices/whishlistSlice'
import cartSlice from './slices/cartSlice'
import {searchReducer} from './slices/searchedProductsSlice'
import {searchStateReducer} from './slices/searchedProductsSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
// import allProjectsToCart from './slices/allProjectsToCart'
const persistConfig = {
    key : 'root' ,
    version : 1, 
    storage
}
const reducer = combineReducers({
    data: StoreData ,
    wishlist : whishlistSlice ,
    cartItems : cartSlice ,
    searchProducts : searchReducer ,
    searchStatus : searchStateReducer ,
    // reducer2 : allProjectsToCart
})

const persistedReducer = persistReducer(persistConfig , reducer)

export const store = configureStore({
    reducer: persistedReducer
})