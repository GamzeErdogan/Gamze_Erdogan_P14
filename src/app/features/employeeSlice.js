import { createSlice } from "@reduxjs/toolkit";
import { employeeList } from "../../data/employeeList";

const initialState = {
    employeeList : employeeList,
}

export const employeeSlice = createSlice({
    name : 'addList',
    initialState,
    reducers : {
        //actions here........
        addEmployee : (state,action) => {
            state.employeeList.unshift(action.payload)
        },
    }
});

export const {addEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;