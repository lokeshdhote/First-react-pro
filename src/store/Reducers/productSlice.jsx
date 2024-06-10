import { createSlice } from "@reduxjs/toolkit";

const  initialState ={
   product:[],
   like:[]
}
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
       productsLoad:(state,action)=>{
           state.product =action.payload
        },
        productsLike:(state,action)=>{
            state.like.push(action.payload)
        }
    }

})

export default productSlice.reducer
export const { productsLoad,productsLike} =productSlice.actions