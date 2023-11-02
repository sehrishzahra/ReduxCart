
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import json from '../../Data.json'
// import axios from "axios";
// import { useDispatch } from 'react-redux'

// export const createAsynData = createAsyncThunk('data/createAsynData', async () => {
//     const dispatch = useDispatch();
//     const response = await axios.get('Data.json');
//     console.log(response)
//     dispatch(setData(response));
//     return response;
// })

// export const fetchDatafromJson = createAsyncThunk(
//     'allData',
//     async () => {
//         const response = await axios.get(json)
//         const result = response.json();
//         return response
//     }
// )

const initialState = {
    data: []
}

const StoreData = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state = initialState, action) => {
            console.log(action.payload)
            state.data = action.payload;
        },
    },
    // extraReducers: {
    //     [fetchDatafromJson.pending]: (state) => {
    //         state.loading = true;
    //         console.log("pending")
    //     },
    //     [fetchDatafromJson.fulfilled]: (state, payload) => {
    //         console.log("fulfilled : ")
    //         return { ...state, data: payload }
    //     },
    //     [fetchDatafromJson.rejected]: (state) => {
    //         state.error = true
    //         console.log("rejected")
    //     }
    // }
});

export const { setData } = StoreData.actions;
export default StoreData.reducer;

