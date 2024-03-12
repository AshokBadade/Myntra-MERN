import { MdPersonOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";


function Header(){
    return(<>
       <div className="header">
        <img src="images/myntra_logo.webp" className="logo"></img>
         <p>MEN</p>
         <p>WOMEN</p>
         <p>KIDS</p>
         <p>HOME & LIVING</p>
         <p>BEUTY</p>
         <p>STUDIO</p>
         <input type="text"  placeholder="Search a product" className="searchinput"></input>
         <MdPersonOutline  size={30} />
         <CiHeart   size={30}/>
         <BsHandbag   size={25}/>
       </div>
       
    </>)
}

export default Header;