import { Route, Routes } from "react-router-dom"
import Product from "../components/Product.jsx"
import About from "../components/About.jsx"
import Home from "../components/Home.jsx"
import Details from "../components/Details.jsx"


const route =()=>{
    return(
       <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<Details/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
       
       </>
    )
}
export default route