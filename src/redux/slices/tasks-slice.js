import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name : "tasks-slice" , 
    initialState : {data : [] , filteredData : [] ,task : {} } , 
    reducers : {
        create(state , action) {
            state.data = [action.payload , ...state.data];
            state.filteredData = state.data;
        } , 
        read(state , action) {
            state.data = action.payload;
            state.filteredData = state.data;
        } ,
        delete(state,action) {
            const filteredTasks = state.data.filter((element) => element.id != action.payload);
            state.data = filteredTasks;
            state.filteredData = state.data;
        } , 
        showDetails(state,action) {
            state.task = state.data.find((element) => element.id == action.payload)
        },
        filterByCategory(state , action) {
            if(action.payload != "all") {
                let result = state.data.filter((element) => element.categroy == action.payload)
                state.filteredData = result;
            }else {
                state.filteredData = state.data;
            }
        }, 
        search(state , action){
            if(action.payload != "") {
                let result = state.data.filter((element) => element.name.includes(action.payload));
                state.filteredData = result;
            }else {
                state.filteredData = state.data;
            }
        }
    }
});

export const tasksReducer = tasksSlice.reducer;
export const tasksAction = tasksSlice.actions;