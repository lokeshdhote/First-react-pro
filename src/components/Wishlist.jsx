
import { useSelector } from "react-redux"
import Card from "./Card"
import { Link } from "react-router-dom"

const  wishlist = ()=>{
    const {like} = useSelector((state)=> state.productReducer)
   
    const {product} = useSelector((state)=> state.productReducer)

let likeProduct =[]

for (let i = 0; i < like.length; i++) {
    const element = like[i];
   likeProduct.push(product.find((e)=> e.id == element)) 
}
console.log(likeProduct);

return(
    <div className="w-[98.9vw] min-h-screen bg-emerald-700 overflow-hidden "    >
    
        <div className="w-screen py-[2vw]  pl-[4vw]   flex items-center gap-[40vw] " >
   <Link to={"/"} className="   text-white text-2xl  " >     <i class="ri-arrow-left-line"></i></Link>
   <h2 className="text-2xl text-stone-200 font-[400]">Whishlist</h2>
   </div> 
   <div className="w-screen h-fit overflow-hidden py-[2vw]  flex  flex-wrap" >
   <Card  product={likeProduct} like={like}/>


   </div>
    </div>
)
}
export default wishlist



{/* <div>
{likeProduct.length>0 ? (likeProduct.map((data,index)=>{
    return(
       <div key={index} className=""> 
<h2>{data.title}</h2>

       </div>
    )
}))
:
(<h4 className="text-2xl text-stone-400 font-[500] ">Empty wishlist </h4>
)}
</div> */}