
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx"
import { asynclike } from "../store/Actions/productAction.jsx";


const Product = ()=>{
const disptach = useDispatch()
  const {product} = useSelector((state)=> state.productReducer)
  const {like} = useSelector((state)=> state.productReducer)
console.log(like);
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
              <div key={index} className="w-[20vw] h-[20vw] flex flex-col  rounded bg-white ">
            <Link   to={`/product/${item.id}`} >
             <div className="w-[20vw] h-[17vw] flex flex-col justify-between"  >
             <div className="w-full h-[12vw] flex items-center justify-center pb-[1vw] ">
               <img className="w-full h-[10vw] object-contain"  src={item.image} alt="" />
             </div>
          
             <div>
              <h2 className="text-[1vw] pl-[1vw]  ">{item.title}</h2>
              </div>
              </div>
             </Link>
             <div className="w-full h-[3vw] flex items-enter justify-around ">
              <h3 className="text-[1.5vw]">₹{item.price}</h3>
<h4>
{like.includes(item.id) ? (<> <i onClick={()=>dataLike(item.id)} className="ri-heart-3-fill text-red-500 text-2xl cursor-pointer">  </i></>)
:
(<> <i onClick={()=>dataLike(item.id)} className="ri-heart-3-line text-2xl  bcursor-pointer">  </i></>)}
 




  </h4>
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