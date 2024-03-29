import "./MainStyle.css"
import  CategoryBox from "./CategoryBox"
import Carousel from './Carousel';


function Main(){

    const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
    const arrimages = ["images/Categories/1.png","images/Categories/2.png","images/Categories/3.png",
    "images/Categories/4.png","images/Categories/5.png","images/Categories/6.png",
    "images/Categories/7.png","images/Categories/8.png","images/Categories/1.png",
    "images/Categories/2.png",
    "images/Categories/3.png","images/Categories/4.png","images/Categories/5.png",
    "images/Categories/6.png","images/Categories/7.png","images/Categories/8.png",
    "images/Categories/1.png","images/Categories/2.png","images/Categories/3.png",
    "images/Categories/4.png","images/Categories/5.png","images/Categories/6.png",
    "images/Categories/7.png","images/Categories/8.png","images/Categories/1.png",
    "images/Categories/2.png",
    "images/Categories/3.png","images/Categories/4.png","images/Categories/5.png",
    "images/Categories/6.png","images/Categories/7.png","images/Categories/8.png",
    "images/Categories/8.png",] ;

   return (<>
         <Carousel/>
        <div className="category">
        {
            arrimages.map(
                (url) => <CategoryBox url={url} />
            )
        } 
        </div>
        
        <div className="AppstoreBanner"> 
           <center> <img src="images\bannerappstore.png" /></center>
        </div>
   </>)
}

export default Main ;