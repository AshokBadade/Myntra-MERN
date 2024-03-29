import "./Itemstyle.css"
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";


function Item(){
  return(<>
     <div className="Itemcontainer">
        <img src="images/Categories/denimjacket.png" className="itemimg"/>
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