
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx"
import { asynclike } from "../store/Actions/productAction.jsx";


const Product = ()=>{
const disptach = useDispatch()
  const {product} = useSelector((state)=> state.productReducer)

const dataLike = (id)=>{
   
  disptach(asynclike(id))
}



return (
  <div className="min-w-screen min-h-screen bg-emerald-700  ">
  <Nav/>
  <div className="min-w-screen flex  items-center justify-center pt-[2vw]  ">
    <input type="text" className=" rounded-full w-[40vw] h-[3.5vw] pl-[2vw] outline-none" placeholder="search" />
  </div>
<div className="flex gap-[2vw] flex-wrap items-center justify-between px-[3vw] py-[4vw]  " >
      {product && product.length > 0 ? (
          product.map((item, index) => {
            return(
              <div className="w-[20vw] h-[20vw] flex flex-col  rounded bg-white ">
            <Link key={index}  to={`/product/${item.id}`} >
             <div className="w-[20vw] h-[17vw] flex flex-col justify-between"  >
             <div className="w-full h-[12vw] flex items-center justify-center pb-[1vw] ">
               <img className="w-full h-[10vw] object-contain"  src={item.image} alt="" />
             </div>
          
             <div>
              <h2 className="text-[1vw] pl-[1vw]  ">{item.title}</h2>
              </div>
              </div>
             </Link>
             <div className="w-full h-[3vw] flex items-enter justify-around pb-[1vw]">
              <h3>₹{item.price}</h3>
<h4><i onClick={()=>dataLike(item.id)} className="ri-heart-3-line cursor-pointer"></i></h4>
             </div>
            
            
             </div>
           
            )
          })
      ) : (
          <p>No products available</p>
      )}
      </div>
  </div>
)
}
export default Product