import "./CategoryBoxStyle.css"

function CategoryBox({url}) {

    return(<>
      <div className="box">
         <img src ={url} className="categoryimg" />
         <center>
         <p>Women's ethic year</p>
         <p className="Dicount">50-80% OFF</p>
         <p>Shop Now</p>
         </center>
      </div>
    </>)
}

export default CategoryBox ;