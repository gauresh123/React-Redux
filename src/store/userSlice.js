import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nm : "",
    balance : 50000,
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        usnm: (state,action)=>{
            state.nm = action.payload
        },
        chkbal: (state,action)=>{
            state.balance = action.payload
        },
    },
})



export const {usnm,chkbal} = userSlice.actions;


export default userSlice.reducer;
