import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersApi";


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        currentUser: {}
    },
    reducers: {
        toggleCurrentUser(state, {payload}){
            if(state.data.some(el => 
                (el.email === payload.login || 
                el.username === payload.login) && 
                payload.password === el.password))
                {
                    return {
                        ...state,
                        currentUser: state.data.find(el => 
                            (el.email === payload.login || 
                            el.username === payload.login) && 
                            payload.password === el.password)
                    }
                }
                return state 
        },
        logOut(state, {payload}){
            return {
                ...state,
                currentUser: {}
            }
        }
    },

    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                data: payload
            }
        },
    }
})

export const selectUsers = (state) => state.users

export const usersReducer = usersSlice.reducer 

export const { toggleCurrentUser,  logOut} = usersSlice.actions
