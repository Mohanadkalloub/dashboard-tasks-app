import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasks-slice";

export const reduxStore = configureStore({
    reducer : {
        tasks : tasksReducer,
    }
})