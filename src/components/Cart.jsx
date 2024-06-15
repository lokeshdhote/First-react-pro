import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Cart = () => {
  const {cart}= useSelector((state)=> state.productReducer)
  const {product}= useSelector((state)=> state.productReducer)

  let cartProduct =[]

  for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
    cartProduct.push(product.find((e)=> e.id == element)) 
  }


console.log(cartProduct);


  return (
    <div className="w-full min-h-screen bg-emerald-700">
      {/* Header Section */}
      <div className="w-full py-4 px-4 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl">
          <i className="ri-arrow-left-line"></i>
        </Link>
        <h2 className="text-2xl text-stone-200 font-[400]">Cart</h2>
        <div></div> {/* Empty div to fill space */}
      </div>

      {/* Cart Items Section */}
      <div className="w-full h-fitoverflow-hidden p-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="flex-1 text-center">Product</h1>
          <h1 className="flex-1 text-center">Quantity</h1>
          <h1 className="flex-1 text-center">Amount</h1>
        </div>
        <hr className="my-2"/>


        <div className="cartContainer w-full h-[32vw] pt-2 pb-2 overflow-x-hidden overflow-y-auto px-[2vw]">
          {/* Example Cart Item */}
{ cartProduct && cartProduct.length> 0 ?
 (
  cartProduct.map((item, index)=>{
    return( 
       <div key={index} className="cartBoxes flex items-center justify-between py-4">
      <div className="flex items-center gap-2 flex-1">
        <img className="w-24 h-24 object-contain" src={item.image} alt={item.title} />
        <h1>{item.title}</h1>
      </div>
      <div className="flex items-center gap-2 flex-1 justify-center">
        <button className="text-2xl">-</button>
        <h2 className="text-2xl">1</h2>
        <button className="text-2xl">+</button>
      </div>
      <h1 className="flex-1 text-center">₹{item.price}</h1>
    </div>
    
    
  )
  })

 )
: (
  <h4 className="text-2xl ">No products available !</h4>

)
}
</div>

        {/* Total Amount and Buy Now Section */}
        <div className="w-[98.9vw] absolute bottom-2">
          <div className="flex items-center justify-between px-[8vw] ">
            <h1>Total Amount</h1>
            <h1>₹Total</h1>
          </div>
          <div className="w-full flex items-center justify-center pt-4">
            <button className="active:scale-[0.94] bg-white text-emerald-700 py-2 px-4 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
