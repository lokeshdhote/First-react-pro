import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  loading:false
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productsLoad: (state, action) => {
      state.product = action.payload;
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

    singleProduct: (state, action) => {
      state.data = action.payload;
    },
    Productlike: (state, action) => {
      state.like = action.payload;
    },
    LogedUserRequest: (state, action) => {
      (state.message = null), (state.error = null),
      state.loading = true
    },
    LogedUser: (state, action) => {
      (state.LogedUser = action.payload),
        (state.message = "Login Successfully"),
        state.loading = false
    },
    LogedUserError: (state, action) => {
      state.error = "Error while logging",
      state.loading = false
    },
    Login: (state, action) => {
      state.Login = action.payload;
    },
    resgistedin: (state, action) => {
      state.RegisterUser = action.payload;
    },
    loggedout: (state, action) => {
      state.logout = action.payload;
    },
    productCreate: (state, action) => {
      state.craetedProduct = action.payload;
    },
    clearMsg: (state, action) => {
      state.message = null;
    },
    clearErr: (state, action) => {
      state.error = null;
    },
  },
});

export default productSlice.reducer;
export const {
  productsLoad,
  productsLike,
  productsCart,
  singleProduct,
  Productlike,
  Login,
  LogedUser,
  resgistedin,
  loggedout,
  productCreate,
  clearErr,clearMsg,LogedUserError,LogedUserRequest
} = productSlice.actions;
