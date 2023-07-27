import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasks-slice";
import { authSliceReducer } from "./slices/auth-slice";

export const reduxStore = configureStore({
    reducer : {
        tasks : tasksReducer,
        auth : authSliceReducer,
    }
});