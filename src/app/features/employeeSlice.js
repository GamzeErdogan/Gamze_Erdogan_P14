import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeeList : [],
}

export const employeeSlice = createSlice({
    name : 'addList',
    initialState,
    actions : {
        //listenin guncellenmesini istiyorum
        uploadEmployeeList : () => {},
    }
});

export const {uploadEmployeeList} = employeeSlice.actions;

export default employeeSlice.reducer;