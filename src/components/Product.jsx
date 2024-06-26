import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import Card from "./Card";
import { getProduct, searchPage } from "../store/Actions/productAction";

const Product = () => {
  const dispatch = useDispatch();
  const [search ,setsearch] = useState("")
  const searchHandler = (e)=>{
    setsearch(e.target.value)
dispatch(searchPage({search}))
  }
  const { product,searchData, like} = useSelector((state) => state.productReducer);
console.log(searchData);
  // Fetch product data when the component mounts
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="min-w-screen min-h-screen bg-emerald-700">
      <Nav />
      <div className="min-w-screen flex items-center justify-center pt-[2vw]">
        <input
          type="text" 
           onChange={(e)=> searchHandler(e)}
          className="rounded-full w-[40vw] h-[3.5vw] pl-[2vw] outline-none"
          placeholder="Search"
        />
      </div>
      <div className="pl-[3vw] pt-[3vw]">
        { searchData && searchData.length>0 ? 
        (
           searchData.length > 0 ? (
            <Card product={searchData} like={like} />
          ) : (
            <h4 className="text-2xl text-stone-400 font-[500] mx-auto">
              No products available!
            </h4>
        )
      )
      :( 
         product && product.length > 0 ? (
        <Card product={product} like={like} />
      ) : (
        <h4 className="text-2xl text-stone-400 font-[500] mx-auto">
          No products available!
        </h4>
        )
      )
      }


     
      
      </div>
    </div>
  );
};

export default Product;
