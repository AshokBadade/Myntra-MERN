import "./Itemstyle.css"
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";


function Item(){
  return(<>
     <div className="Itemcontainer">
      <Link to="/iteminfo"> <img src="images/images6side/1.png" className="itemimg"/> </Link>
        <div className="rating"><p>4<IoMdStar/> | 150</p> 
        </div>

        <p className="brandname">Jack and Jones</p>
        <p className="Itemname">spread collar denim jacket</p>
        <div className="price"> 
        <p className="p1">Rs.573 </p> <p className="p2">Rs.2049</p> <p className="p3"> (60% OFF)</p>
         </div>
     </div>
  </>)
}


export default Item ;