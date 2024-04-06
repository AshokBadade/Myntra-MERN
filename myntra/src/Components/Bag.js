import "./Bagstyle.css" ;
import BagItem from "./BagItem"

function Bag(){
       const bagitemsarr = [1,2,3,4,5];

    return(<>
    <center>
    <div className="Bag">
        <div className="Bagbox">
            {   bagitemsarr.map(
                    (item) => <BagItem/>
                    )
            }
        </div>

        <div className="Bagprice">
            <p className="Bagpricep">PRICE DETAILS (3 items)</p>
            <div>
                <div className="Bagprice_div1"><p>Total MRP</p></div>
                <div className="Bagprice_div2"><p>&#8377;2345</p></div>
            </div>
            <div>
                <div className="Bagprice_div1"><p>Discount on MRP</p></div>
                <div className="Bagprice_div2 discountonmrp"> <p>- &#8377;999</p></div>
            </div>
            <div>
                <div className="Bagprice_div1"><p>Shipping Fee</p> </div>
                <div className="Bagprice_div2"> <p>&#8377;50</p></div>
            </div>
            <hr/>
            <div className="totalamount" >
                <div className="Bagprice_div1"><p>Total Amount</p> </div>
                <div className="Bagprice_div2"><p>&#8377;457</p></div>
            </div>
            <div className="placeorder" ><p>Place Order</p></div>
        </div>
    </div>
    </center>
    <hr/>
    </>);
}

export default Bag;