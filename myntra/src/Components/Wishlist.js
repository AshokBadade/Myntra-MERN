import "./Wishliststyle.css"
import Wishlistitem from "./Wishlistitem"
import Item from "./Item"

function Wishlist() {
    
    const bagitemsarr = [1,2,3,4,5,6,7,8,9,10];

    return (<>
    <div className="Wishlistheading"> 
     <p className="Wishlistheading_p1">My Wishlist</p> <p className="Wishlistheading_p2">5 items</p>
    </div>

        <div className="Wishlistdiv">
        {   bagitemsarr.map(
                    (item) => <Wishlistitem/> 
                    )
            }
        </div>
    </>)
}

export default Wishlist ;