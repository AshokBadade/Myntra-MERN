import "./Filterstyle.css" ;
import "./FilterCheckBox"
import FilterCheckbox from "./FilterCheckBox";

function Filter(){
      
   const arr = [1,2,3,4,5,6,7,8,9,10];
   const brands = [
      "Anouk(65)",
      "Arrow New York(56)",
      "Antony Morato(50)",
      "allan peter(44)",
      "AKS(25)",
      "Allen Cooper(20)",
      "A.T.U.N.(17)",
      "ADRO(16)",
      "Anubhutee(14)",
      "AMRUTVARSHA CREATION",
      "A-Okay(8)",
      "ASCIIBLUES(7)"
  ];

  const ranges = [
   "Rs. 209 to Rs. 3982(60955)",
   "Rs. 3982 to Rs. 7755(250)",
   "Rs. 7755 to Rs. 11528(14)",
   "Rs. 11528 to Rs. 15301(4)"
];

const colors = [
   "Blue (11182)",
   "White (7436)",
   "Navy Blue (6160)",
   "Black (5426)",
   "Green (5137)",
   "Grey (3373)",
   "Red (2367)",
   "Pink (2186)",
   "Brown (2125)",
   "Yellow (1895)",
   "Beige (1840)",
   "Maroon (1780)",
   "Olive (1594)",
   "Orange (1026)",
   "Peach (723)",
   "Purple (704)",
   "Cream (631)",
   "Teal (614)"
];

const percentageRanges = [
   "10% and above",
   "20% and above",
   "30% and above",
   "40% and above",
   "50% and above",
   "60% and above",
   "70% and above",
   "80% and above",
   "90% and above"
];
  

   return(<div className="Filter">

         <form action="http://localhost:3000/category">
         <p>BRAND</p>
          {
            brands.map(
               (value) => <FilterCheckbox  value = {value}/>
            )
          }
         </form> <hr/>

         <form action="http://localhost:3000/category">
         <p>PRICE</p>
          {
            ranges.map(
               (value) => <FilterCheckbox  value = {value}/>
            )
          }
         </form><hr/>

         <form action="http://localhost:3000/category">
         <p>COLOR</p>
          {
            colors.map(
               (value) => <FilterCheckbox  value = {value}/>
            )
          }
         </form><hr/>

         <form action="http://localhost:3000/category">
         <p>DISCOUNT RANGE</p>
          {
            percentageRanges.map(
               (value) => <FilterCheckbox  value = {value}/>
            )
          }
         </form><hr/>

   </div>)
}

 export default Filter ;


