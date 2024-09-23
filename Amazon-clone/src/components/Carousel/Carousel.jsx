// import React from 'react'
// import {Carousel }from "react-responsive-carousel"
// import { Images } from './img/data'
// import "react-responsive-carousel/lib/classes/carousel.min.css"
// import classes from "./carousel.module.css"
// function  Carouseleffect() {
//   return (
//     <div>
// <Carousel  
// autoPlay={true} 
// infiniteLoop={true}
// showIndicators={false}
// showThumbs={false}
// >
// {
//   Images.map((imgitemlink)=>{
//     return <img src={imgitemlink} />
//   })
// }

// </Carousel>
// <div className={classes.carousel_img}> </div>
    
    
//     </div>
//   )
// }

// export default Carouseleffect




import React from 'react';
import { Carousel } from "react-responsive-carousel";
import { Images } from './img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Fix the path
import classes from "./carousel.module.css";

function Carouseleffect() {
  return (
    <div>
      <Carousel  
        autoPlay={true} 
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          Images.map((imgitemlink, index) => {
            return <img key={index} src={imgitemlink} alt={`Carousel image ${index}`} />;
          })
        }
      </Carousel>
      <div className={classes.carousel_img}></div>
    </div>
  );
}

export default Carouseleffect;


