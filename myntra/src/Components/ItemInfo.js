import "./ItemInfostyle.css"
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { IoMdStar } from "react-icons/io";


function ItemInfo(){

  const [backgroundColor, setBackgroundColor] = useState('white'); 
  const [bagtext,setbagtext] = useState('ADD TO BAG');
      
  function handleClick(){
    setBackgroundColor('#FD913C');
  }

  function handleClick1(){
    setbagtext("GO TO BAG ->");
  }

  const currentDate = new Date();

// Get the day, month, and year
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const year = currentDate.getFullYear();

// Array of month names
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Format the date
const formattedDate = `${day+4} ${monthNames[monthIndex]} ${year}`;

   
    return(<>
       <div className="iteminfo">
         <div className="iteminfobox1">
           <img src="images/images6side/1.png"  className="zoomphoto" ></img>
           <img src="images/images6side/2.png"  className="zoomphoto"  ></img>
           <img src="images/images6side/3.png"  className="zoomphoto"  ></img>
           <img src="images/images6side/4.png"  className="zoomphoto" ></img>
           <img src="images/images6side/5.png"  className="zoomphoto" ></img>
           <img src="images/images6side/6.png"  className="zoomphoto" ></img>
         </div>
         <div className="iteminfobox2">
            <div className="iteminfobox2_1">
                   <p className="iteminfotitle">Sztori</p>
                   <p className="iteminfotitle2">Men Plus Size Original Solid Casual Shirt</p>
                   <div className="ratingiteminfo"><p className="ratingp1">4.2</p> <IoMdStar/> 
                   <p className="ratingp2"> | 3.7K Ratings</p> </div>

                   <div className="iteminfobox2_1_1">
                   <p className="iteminfoprice">Rs 898</p>
                   <p className="MRP">MRP</p>
                   <p className="iteminfopriceoriginal">Rs 3099</p>
                   <p className="iteminfopricediscount">(71% OFF)</p>
                   </div>   
                   <p className="inclusive">inclusive of all taxes</p>
            </div>

            <div className="Iteminfobuttons">
            <div className="AddToBagbutton" onClick={handleClick1}>
             <BsHandbag  size={25}/><p> {bagtext} </p>
            </div>
             <div className="Wishlistbutton"  style={{ backgroundColor: backgroundColor }}
              onClick={handleClick}> 
              <CiHeart size={30}/><p>WISHLIST</p></div>  
           </div>

           <hr/>
           <div className="deliveryinfo">
             <div>
               <img src="images/Categories/delivery.png" />
               <p>Get it by {formattedDate}</p>
             </div>
             <div>
               <img src="images/Categories/paycash.png" />
               <p>Pay on delivery available</p>
             </div>
             <div>
               <img src="images/Categories/returnindays.png" />
               <p>Easy 14 days return & exchange available</p>
             </div>
           </div>
           
           <hr/>
           <p className="productdetailsheading">Product Details</p>
           <div className="productdetails">
            <div>
               <p className="productdetails_p1">Sleeve Length</p>
               <p >Long Sleeves</p>
            </div>
            <div>
               <p className="productdetails_p1">Collar</p>
               <p>Spread Collar</p>
            </div>
            <div>
               <p className="productdetails_p1">Fit</p>
               <p>Regular Fit</p>
            </div>
            <div>
               <p className="productdetails_p1">Print or Pattern Type</p>
               <p>Solid</p>
            </div>
            <div>
               <p className="productdetails_p1">Occasion</p>
               <p>Casual</p>
            </div>
            <div>
               <p className="productdetails_p1">Length</p>
               <p>Regular</p>
            </div>
            <div>
               <p className="productdetails_p1">Hemline</p>
               <p>Curved</p>
            </div>
            <div>
               <p className="productdetails_p1">Placket</p>
               <p>Button Placket</p>
            </div>
           </div>
           
         </div>
       </div>
       <hr></hr>
    </>)

}

export default ItemInfo ;


