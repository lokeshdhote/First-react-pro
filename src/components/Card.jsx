import { useDispatch, useSelector } from "react-redux"

import { asynclike, likeProduct } from "../store/Actions/productAction.jsx";
import { Link } from "react-router-dom";



const Card = ({product,like})=>{
    const disptach = useDispatch()
   
  const dataLike = (id)=>{
     
    disptach(likeProduct(id))
  }
    return(
    <div className="  flex gap-[2vw] flex-wrap items-center px-[3vw]" >
        {product && product.length > 0 ? (
            product.map((item, index) => {
              return(
                <div key={index} className="w-[20vw] h-[20vw] flex flex-col  rounded bg-white ">
              <Link   to={`/product/${item._id}`} >
               <div className="w-[20vw] h-[17vw] flex flex-col justify-between"  >
               <div className="w-full h-[12vw] flex items-center justify-center pb-[1vw] ">
                 <img className="w-full h-[10vw] object-contain"  src={item.img} alt="" />
               </div>
            
               <div>
                <h2 className="text-[1vw] pl-[1vw]  ">{item.title}</h2>
                </div>
                </div>
               </Link>
               <div className="w-full h-[3vw] flex items-enter justify-around ">
                <h3 className="text-[1.5vw]">₹{item.price}</h3>
  <h4>
  {/* {like.includes(item._id) ? (<> <i onClick={()=>dataLike(item._id)} className="ri-heart-3-fill text-red-500 text-2xl cursor-pointer">  </i></>)
  :
  (<> <i onClick={()=>dataLike(item._id)} className="ri-heart-3-line text-2xl  cursor-pointer">  </i></>)} */}
  
    </h4>
               </div>
              
              
               </div>
             
              )
            })
        ) : (
            <h4 className="text-2xl ">No products available !</h4>
        )}
        </div>)
}
export default Card



