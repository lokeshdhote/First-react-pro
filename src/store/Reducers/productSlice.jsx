import { createSlice } from "@reduxjs/toolkit";

const  initialState ={
   product:[],
  
}
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
       productsLoad:(state,action)=>{
           state.product = action.payload
        //    state.product.push(action.payload)
        },
    //     productsLike:(state,action)=>{
           
    // if(state.like.indexOf(action.payload)==-1){
    //      state.like.push(action.payload)
         
    //     }
    //   else{
    //     state.like.splice(state.like.indexOf(action.payload) ,1)
    //   }
    //     },
    //     productsCart:(state,action)=>{
          

    // if(state.cart.indexOf(action.payload)==-1){
    //     state.cart.push(action.payload)
        
    //    }
    //  else{
    //    state.cart.splice(state.cart.indexOf(action.payload) ,1)
    //  }  
    //     }
    
        singleProduct:(state,action)=>{
            state.data =action.payload
            
        },
        Productlike:(state,action)=>{
            state.like =action.payload
         
        },
        LoginUser:(state,action)=>{
            state.LoginUser =action.payload
   
        },
        resgistedin:(state,action)=>{
            state.RegisterUser =action.payload
   
        },
        loggedout:(state,action)=>{
            state.logout=action.payload
        }

    }

})

export default productSlice.reducer
export const { productsLoad,productsLike, productsCart, singleProduct,Productlike,LoginUser,  resgistedin,loggedout} =productSlice.actions