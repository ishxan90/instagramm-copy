import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        searchUserName(state, {payload}){
            return payload
        }

    }
})

export const selectSearch = (state) => state.search

export const searchReducer = searchSlice.reducer 

export const {searchUserName} = searchSlice.actions