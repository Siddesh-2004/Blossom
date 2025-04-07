import { createSlice } from "@reduxjs/toolkit";
const initialState={
    userName:null,
}
export const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        addUserName:()=>{
           state.userName=action.payload
        }
    }
})
export const {addUserName}=loginSlice.actions
export default loginSlice.reducer