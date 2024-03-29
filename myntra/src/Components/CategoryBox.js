import "./CategoryBoxStyle.css"
import { Link } from "react-router-dom";

function CategoryBox({url}) {
     
  function goto(){

  }

    return(<>  
      <Link to="/category" >
      <div className="box" onClick={goto} >
         <img src ={url} className="categoryimg" />
         <center>
         <p>Women's ethic year</p>
         <p className="Dicount">50-80% OFF</p>
         <p>Shop Now</p>
         </center>
      </div>
      </Link>
    </>)
}

export default CategoryBox ;