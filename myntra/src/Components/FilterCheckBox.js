
function FilterCheckbox({value}){
     return(<>
       <input type="checkbox" id="brand1" name="brand1" defaultValue="Brand1" />
         <label htmlFor="brand1"> {value} </label>
         <br />
     </>)
}

export default FilterCheckbox ;