import "./MainStyle.css"
import  CategoryBox from "./CategoryBox"

function Main(){

    const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

   return (<>
        <div className="category">
        {
            arr.map(
                (num) => <CategoryBox num={num} />
            )
        } 
        </div>
        
   </>)
}

export default Main ;