

export {  productsLoad } from "../Reducers/productSlice.jsx";

import { useState } from "react";
import {  productsLike, productsLoad,productsCart } from "../Reducers/productSlice.jsx";
import axios from "axios";
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