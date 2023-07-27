import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auto-slice',
    initialState : {loggedIn : JSON.parse(localStorage.getItem('loggedIn'))},
    reducers : {
        signIn(state,action) {
            state.loggedIn = true;
        },
        signOut(state,action){
            state.loggedIn = false;
        },
    }
});

export const authSliceReducer = authSlice.reducer;
export const authSliceActions = authSlice.actions;