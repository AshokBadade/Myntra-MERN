import "./FooterStyle.css"
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

function Footer(){
  return (<>
      <div className="footercontainer">
         <div className="firstbox">
            <p className="ftheading" >ONLINE SHOPPING</p>
           <p className="bottomsearch">Men</p>
            <p className="bottomsearch">Women</p>
            <p className="bottomsearch">Kids</p>
            <p className="bottomsearch">Home & Living</p>
            <p className="bottomsearch">Beauty</p>
            <p className="bottomsearch">Gift Cards</p>
            <p className="bottomsearch"> Myntra Insider</p>
            <div  className="firstbox" >
            <p className="ftheading"> USEFUL LINKS</p>
            <p className="bottomsearch">Blog</p>
            <p className="bottomsearch">Careers</p>
            <p className="bottomsearch">Site Map</p>
            <p className="bottomsearch">Corporate Information</p>
            <p className="bottomsearch">Whitehat</p>
            <p className="bottomsearch">Cleartrip</p>
            </div>
         </div>

         <div className="firstbox">
        <p className="ftheading"> CUSTOMER POLICIES</p>
        <p className="bottomsearch">Contact Us</p>
        <p className="bottomsearch">FAQ</p>
        <p className="bottomsearch">T&C</p>
        <p className="bottomsearch">Terms Of Use</p>
        <p className="bottomsearch">Track Orders</p>
        <p className="bottomsearch">Shipping</p>
        <p className="bottomsearch">Cancellation</p>
        <p className="bottomsearch">Returns</p>
        <p className="bottomsearch">Privacy policy</p>
        <p className="bottomsearch">Grievance Officer</p>
         </div>

         <div  className="firstbox storebox">
            <p className="ftheading">EXPERIENCE MYNTRA APP ON MOBILE</p>
            <div className="storelogo">
            <img src="images/Categories/playstore.png" />
            <img src="images/Categories/istore.png" />
            </div>
            <p className="firstbox ftheading">KEEP IN TOUCH</p>
             <div className="socialmedialogos"> 
             <div className="socilogo"> <FaFacebookF size={30}/></div>
             <div className="socilogo"> <FaTwitter size={30}/></div>
             <div className="socilogo"> <FaYoutube  size={30}/></div>
             <div className="socilogo"> <LuInstagram size={30}/></div>
             </div>
         </div>

         <div className="box4 firstbox">
            <div className="box41">
               <img src="images\Categories\original.png"/>
               <div>
                  <p>100% ORIGINAL guarantee for</p>
                  <p>all products at myntra.com</p>
               </div>
            </div>
            <div className="box41">
               <img src="images\Categories\return14days.png"/>
               <div>
                  <p>Return within 14days of</p>
                  <p>receiving your order</p>
               </div>
            </div>
         </div>
      </div>
      
      <hr></hr>
      <div className="POPULARSEARCHES">
         <p  className="ftheading">POPULARSEARCHES</p>
        <p className="bottomsearch">
        Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers |For Men | Handbags | Ladies | Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles|  Bras | Suit | Chinos Shoes | Adidas Shoes | Woodland Shoes | Jewellery |  Designers Sarees
        </p>
      </div>
      <hr></hr>
      <div className="lastbox">
         <p>In case of any concern, Contact Us</p>
         <p>© 2024 www.myntra.com. All rights reserved.</p>
         <p>A Flipkart company</p>
      </div>

  </>)
}

export default Footer