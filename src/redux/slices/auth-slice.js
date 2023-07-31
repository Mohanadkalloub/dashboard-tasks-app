import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auto-slice',
    initialState :
    {
    loggedIn : JSON.parse(localStorage.getItem('loggedIn')) ,
    token : localStorage.getItem('token'),
    userId :localStorage.getItem('userId'),
    },
    reducers : {
        signOut(state,action){
            state.loggedIn = false; 
        },
        setToken(state,action) {
            state.loggedIn = true;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
        }
    }
});

export const authSliceReducer = authSlice.reducer;
export const authSliceActions = authSlice.actions;