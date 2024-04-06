import { Link } from 'react-router-dom';
import './cstyle.css';
import React, { useState } from 'react';


function Carousel(){
  const slides = document.querySelectorAll(".slide") ;

  console.log(slides) ;
//   var counter = 0 ;
  let [counter,setcounter] = useState(0);

  slides.forEach(
      (slide,index) =>{
          slide.style.left =  `${index*100}%`;  
      }
  )
  
  function goPrev(){
     counter--;
     slideImage();
  }
  
  function goNext(){
      counter++;
     slideImage();
  }
  
  function slideImage(){
      if(counter>slides.length-1){
          counter=0 ;
          setcounter(0);
      }
      slides.forEach(
          (slide) => {
              slide.style.transform = `translateX(-${counter*100}%)`
          }
      )
  }
  
  
   
  function goNext1(){
      counter++;
      setcounter(counter) ;
     slideImage();
     setTimeout(goNext1,4000)
  }
  
  
  
return(<>
<Link to="/category">
<div className="slider">
    <main>
    <img src="images/tops.png" className="slide" alt="" />
    <img src="images/western.png" className="slide" alt="" />
    <img src="images/purse.png" className="slide" alt="" />
    <img src="images/polo.png" className="slide" alt="" />
    <img src="images/hrx.png" className="slide" alt="" />
    <img src="images/handbag.png" className="slide" alt="" />
  </main>
  </div>
  </Link>
     {/* { setTimeout(goNext1,4000)} */}
</>) ;


}





export default Carousel ;












/*

function Carousel(){
  const slides = document.querySelectorAll(".slide") ;

  console.log(slides) ;
  var counter = 0 ;
  
  slides.forEach(
      (slide,index) =>{
          slide.style.left =  `${index*100}%`;  
      }
  )
  
  function goPrev(){
     counter--;
     slideImage();
  }
  
  function goNext(){
      counter++;
     slideImage();
  }
  
  function slideImage(){
      if(counter>slides.length-1){
          counter=0 ;
      }
      slides.forEach(
          (slide) => {
              slide.style.transform = `translateX(-${counter*100}%)`
          }
      )
  }
  
  
   
  function goNext1(){
      counter++;
     slideImage();
     setTimeout(goNext1,4000)
  }
  
  
  
return(<>
<div className="slider">
    <main>
    <img src="images/tops.png" className="slide" alt="" />
    <img src="images/western.png" className="slide" alt="" />
    <img src="images/purse.png" className="slide" alt="" />
    <img src="images/polo.png" className="slide" alt="" />
    <img src="images/hrx.png" className="slide" alt="" />
    <img src="images/handbag.png" className="slide" alt="" />
  </main>
     
  </div>
     { setTimeout(goNext1,2000)}
</>) ;


}





export default Carousel ;


*/