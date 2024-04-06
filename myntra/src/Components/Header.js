import { MdPersonOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";


function Header(){
    return(<>
       <div className="header">
       <Link to="/"> <img src="images/myntra_logo.webp" className="logo"></img></Link>
         <p>MEN</p>
         <p>WOMEN</p>
         <p>KIDS</p>
         <p>HOME & LIVING</p>
         <p>BEUTY</p>
         <p>STUDIO</p>
         <input type="text"  placeholder="Search a product" className="searchinput"></input>
         <Link to="/bag" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MdPersonOutline  size={30} /> </Link> 
        
         <Link to="/wishlist" style={{ textDecoration: 'none', color: 'inherit' }}>
          <CiHeart   size={30}/></Link> 
          
          <Link to="/bag" style={{ textDecoration: 'none', color: 'inherit' }}>
          <BsHandbag size={25}/> </Link> 
       </div>
       
    </>)
}

export default Header;

{/* <Link to="/bag">  </Link>  */}