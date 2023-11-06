import { configureStore } from '@reduxjs/toolkit'
import StoreData from './slices/StoreData'
import wishlistSlice from './slices/wishlistSlice'
import cartSlice from './slices/cartSlice'
import { searchReducer } from './slices/searchedProductsSlice'
import { searchStateReducer } from './slices/searchedProductsSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    data: StoreData,
    wishlist: wishlistSlice,
    cartItems: cartSlice,
    searchProducts: searchReducer,
    searchStatus: searchStateReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})

// const cartPersistConfig = {
//     key: 'cart',
//     version: 1,
//     storage,
//     whitelist: ['cartItems']
//   };

//   const rootReducer = combineReducers({
//     data: StoreData,
//     wishlist:whishlistSlice,
//     cartItems: persistReducer(cartPersistConfig, cartSlice),
//     searchProducts: searchReducer,
//     searchStatus: searchStateReducer,
//   });