

import Nav from "./Nav.jsx"
import Card from "./Card.jsx";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getProduct } from "../store/Actions/productAction.jsx";
// import { productsLike } from "../store/Reducers/productSlice.jsx";


const Product = ()=>{
  const dispatch = useDispatch(); 

  const {product} = useSelector((state)=> state.productReducer)
  
const {like} = useSelector((state)=> state.productReducer)



  useEffect(() => {
    dispatch(getProduct())

  }, [dispatch])
  

return (
  <div className="min-w-screen min-h-screen bg-emerald-700  ">
  
  <Nav/>
  {/* w-screen   pl-[4vw]   flex items-center  */}
  
  <div className="min-w-screen flex  items-center justify-center   pt-[2vw]  ">
   {/* <Link to={"/"} className="  text-white text-2xl  " >     <i class="ri-arrow-left-line"></i></Link> */}

    <input type="text" className=" rounded-full w-[40vw] h-[3.5vw] pl-[2vw] outline-none" placeholder="search" />
  </div>
  <div className="pl-[3vw] pt-[3vw]  " >
  <Card product={product} like={like}/>
  </div>

  </div>
)
}
export default Product