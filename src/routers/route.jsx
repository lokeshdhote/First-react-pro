import { Route, Routes } from "react-router-dom"
import Product from "../components/Product.jsx"
import About from "../components/About.jsx"
import Home from "../components/Home.jsx"
import Details from "../components/Details.jsx"
import Wishlist from "../components/Wishlist.jsx";
import Order from "../components/Order.jsx"
import Cart from "../components/Cart.jsx"

const route =()=>{
    return(
       <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<Details/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/cart/:id" element={<Cart/>}/>
      </Routes>
       
       </>
    )
}
export default route