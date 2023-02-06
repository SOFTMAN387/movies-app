import {configureStore,createSlice} from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movie",
    initialState:{
        currentUser:[],
        favourite:[]

    },
    reducers:{
        loginUser:(state,action)=>{
            state.currentUser=action.payload;
        },
        logoutUser:(state)=>{
            state.currentUser=[];
        },
        addFavourite:(state,action)=>{
           state.favourite=state.favourite.push(action.payload);
        }

    },
});
export const actions =movieSlice.actions;
const store=configureStore(
    {reducer:movieSlice.reducer,});
export default store;