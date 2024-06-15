import { Link } from "react-router-dom"

const Nav = ()=>{
    return(
        <nav className=" min-w-screen h-[3.5vw]  flex  items-center justify-center">
         <div className="w-[60%] h-[2.5vw] bg-stone-200 rounded-full  flex  items-center gap-[7vw] justify-center">
            <Link className="font-[500]" to="/" >Home</Link>
            <Link className="font-[500]" to="/Product" >Product</Link>
            <Link className="font-[500]" to="/About" >About</Link>
            </div>
        </nav> 
    )
}
export default Nav