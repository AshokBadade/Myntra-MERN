import "./BagItemstyle.css"
import { RxCross1 } from "react-icons/rx";

function BagItem() {
    return (<>
      <div className="bagitemdiv">
         <div className="bagitemdiv_img"> <img src="images/images6side/1.png"/></div>
         <div  className="bagitemdivbox2">
            <p>Sztori</p>
            <p>Men Plus Size Original Solid Casual Shirt</p>
                 <div className="bagitemdivprices">
                   <p className="bagitemdivprice_1">Rs 898</p>
                   <p className="bagitemdivpriceMRP">MRP</p>
                   <p className="bagitemdivpriceoriginal">Rs 3099</p>
                   <p className="bagitemdivpricediscount">(71% OFF)</p>
                   </div>  
            <p className="bagitem_return">Easy 14 days return & exchange available</p>  
            <p  className="bagitem_delivery">Delivery by 18 Apr 2024</p> 
         </div>
         <div className="bagitemcross"><RxCross1  size={30} /></div>
      </div>
    </>) ;
}

export default BagItem ;