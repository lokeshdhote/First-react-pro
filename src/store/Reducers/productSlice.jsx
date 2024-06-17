import { createSlice } from "@reduxjs/toolkit";

const  initialState ={
   product:[],
   like:[],
   cart:[],
}
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
       productsLoad:(state,action)=>{
           state.product = action.payload
        //    state.product.push(action.payload)
        },
        productsLike:(state,action)=>{
           
    if(state.like.indexOf(action.payload)==-1){
         state.like.push(action.payload)
         
        }
      else{
        state.like.splice(state.like.indexOf(action.payload) ,1)
      }
        },
        productsCart:(state,action)=>{
          

    if(state.cart.indexOf(action.payload)==-1){
        state.cart.push(action.payload)
        
       }
     else{
       state.cart.splice(state.cart.indexOf(action.payload) ,1)
     }  
        },
        singleProduct:(state,action)=>{
            state.data =action.payload
            
        }

    }

})

export default productSlice.reducer
export const { productsLoad,productsLike, productsCart, singleProduct} =productSlice.actions