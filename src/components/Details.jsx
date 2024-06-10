import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"

const Details = ()=>{
  const {id} =useParams()
  console.log(id);
  const {like} = useSelector((state)=> state.productReducer)
  console.log(like);
    return(
      <div className="w-screen min-h-screen bg-emerald-700  text-">
        
      </div>
    )
}
export default Details