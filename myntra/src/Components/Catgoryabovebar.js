import "./Categoryabovebar.css"


function Categoryabovebar (){
    return (<>
    <div className="bar"><p>Men's Casual Wear - 98439 items</p>  </div>
      <div className="bar1"><p>FILTERS</p>
      <form action="/">
    <label htmlFor="items">Sort by: </label>
   <select name="items" id="items">
    <option value="Rating">Rating</option>
    <option value="Price">Price : high to low</option>
    <option value="Price">Price : low to high</option>
    <option value="Discount">Discount</option>
  </select>
  {/* <input type="submit" defaultValue="Submit" /> */}
</form>
      </div>
     
    </>)
}

export default Categoryabovebar ;