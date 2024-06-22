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
    
    },
    singleProduct: (state, action) => {
      state.data = action.payload;
    },
    Productlike: (state, action) => {
      state.like = action.payload;
    },
    userwishlist: (state, action) => {
      state.user = action.payload;
    },
   addCart:(state, action) => {
    state.cartdata = action.payload;
  },
  removeItemCart:(state, action) => {
    state.cartdata = action.payload;
  },
  addMoreQunatity:(state, action) => {
    state.cartdata = action.payload;
  },
  cart:(state, action) => {
    state.cartdata = action.payload;
  },
  profile:(state,action) =>{
  state.profileData =action.payload
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
  profile,
  productsLike,
  productsCart,
  singleProduct,
  Productlike,
  Login,
  LogedUser,
  resgistedin,
  loggedout,
  productCreate,
  clearErr,clearMsg,LogedUserError,LogedUserRequest,
  userwishlist,
  cart,
  removeItemCart,
  addMoreQunatity,
  addCart,
} = productSlice.actions;
