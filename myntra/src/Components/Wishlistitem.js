import "./Wishlistitemstyle.css"
import Item from "./Item"
import { Link } from "react-router-dom";


function Wishlistitem() {

    return (<>
      <div className="Wishlistitemdiv">
      <Link to="/iteminfo"> <img src="images/images6side/1.png" /> </Link>
       <center>
       <p className="brandname">Jack and Jones</p>
        <p className="Itemname"> spread collar denim jacket</p>
        <div className="price2"> 
        <p className="p1">Rs.573 </p> <p className="p2">Rs.2049</p> <p className="p3"> (60% OFF)</p>
        </div>
       </center>
       <div className="placeorder2" ><p>Move TO BAG</p></div>
      
      </div>

    </>)
}

export default Wishlistitem ;