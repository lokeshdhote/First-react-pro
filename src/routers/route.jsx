import { Navigate, Route, Routes } from "react-router-dom";
import Product from "../components/Product";
import About from "../components/About";
import Home from "../components/Home";
import Details from "../components/Details";
import Wishlist from "../components/Wishlist";
import Order from "../components/Order";
import Cart from "../components/Cart";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logedUser } from "../store/Actions/productAction";
import Register from "../components/Register";
import UserAth from "../components/UserAth";


const route = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(logedUser());
  }, [dispatch]);

  const { LoginUser } = useSelector((state) => state.productReducer);

 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Register" element={<Register />} /> */}
      <Route path="/UserAth" element={<UserAth/>} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/product" element={ <Product /> } />
      <Route path="/product/:id" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/:id" element={<Cart />} />
    
    </Routes>
  );
}

export default route;
