import { Link } from "react-router-dom"
import Nav from "./Nav.jsx"

const About = ()=>{
 
    return(
        <div className="w-screen min-h-screen bg-emerald-700 overflow-hidden "    >
            <Nav/>
            {/* <div className="w-screen   pl-[4vw]   flex items-center " >
   <Link to={"/"} className="   text-white text-2xl  " >     <i class="ri-arrow-left-line"></i></Link>
   </div> */}

            <div className="w-screen  h-[42vw]   flex  pl-[1vw] pt-[2vw] " >
                <div className="w-[40%] h-full border-r border-1-stone-400 ">
<div className="w-full h-[11vw] flex items-center justify-center flex-col  gap-[1vw] mb-[2vw]">
    <img className="w-[9vw] h-[9vw] object-contain border border-stone-300 rounded-full" src="" alt="" />
    <h2 className="cursor-pointer">Select Photo <i className="ri-upload-line"></i></h2>

</div>

<div className="flex flex-col gap-[1.7vw] items-center  ">
    <input type="text" placeholder="Name" className="w-[20vw] h-[3vw] rounded outline-none placeholder:pl-[1vw] " />
    <input type="text"  placeholder="Email" className="w-[20vw] h-[3vw] rounded outline-none placeholder:pl-[1vw] "/>
    <input type="text" placeholder="phone Number" className="w-[20vw] h-[3vw] rounded outline-none placeholder:pl-[1vw] " />
    <input type="text" placeholder="category" className="w-[20vw] h-[3vw] rounded outline-none placeholder:pl-[1vw] " />
    <textarea name="address" id="" placeholder="address" className="w-[20vw] h-[3vw] rounded outline-none placeholder:pl-[1vw]  "></textarea>
    <button className=" text-lg px-[2vw] py-[0.5vw] rounded bg-stone-400 active:scale-[0.93] " >Edit</button>
</div>
                </div>
                <div className="w-[60%] h-full ">
<div className="flex flex-col  gap-[2vw] pl-[5vw] pt-[5vw]">
   <Link to={"/cart"} ><h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Cart</h2></Link> 
   <Link to={"/order"}> <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Order</h2></Link>
<Link to={"/Wishlist"}>    <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Wishlist</h2></Link>
    <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Help us</h2>
    <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Delete Account</h2>
    <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Logout</h2>
</div>


                </div>
            </div>

        </div>
    )
}
export default About