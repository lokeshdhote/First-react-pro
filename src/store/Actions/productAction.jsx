

export {  productsLoad } from "../Reducers/productSlice.jsx";

import { useState } from "react";
import {  productsLike, productsLoad,productsCart , singleProduct,Productlike,LoginUser, resgistedin,loggedout} from "../Reducers/productSlice.jsx";
import axios from "../../util/axios.jsx";
export const asyncload = () => async (dispatch, getState)=>{
    try {
        // const  response = await axios.get("https://fakestoreapi.com/products");

        // dispatch( productsLoad(response.data))

        
      
    } catch (error) {
        console.log(error);
    }

}
export const asynclike = (id) => async (dispatch, getState)=>{
    try {
      

      dispatch(productsLike(id))
      
    } catch (error) {
        console.log(error);
    }

}
export const asynccart = (id) => async (dispatch, getState)=>{
    try {
      

      dispatch(productsCart(id))
      
    } catch (error) {
        console.log(error);
    }

}

export const getProduct = ()=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get("/products")

  dispatch(productsLoad(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const getSingleProduct = (id)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get(`/detail/${id}`)
   dispatch( singleProduct(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const likeProduct = (id)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get(`/like/${id}`)
   dispatch( Productlike(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const logedUser = ()=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get("/LoginUser")
     console.log(data);
  //  dispatch( LoginUser(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const logedin = (user)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.post("/login",user)
     console.log(data);
   dispatch( LoginUser(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const registered = (registeruser)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.post("/register",registeruser)
     
   dispatch(resgistedin(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const Logout = ()=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get("/logout")
     
   dispatch(loggedout(data))
    
    } catch (error) {
      console.log(error);
    }

  }