import React from 'react'
import {Carousel }from "react-responsive-carousel"
import { Images } from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./carousel.module.css"
function  Carouseleffect() {
  return (
    <div>
<Carousel  
autoPlay={true} 
infiniteLoop={true}
showIndicators={false}
showThumbs={false}
>
{
  Images.map((imgitemlink)=>{
    return <img src={imgitemlink} />
  })
}

</Carousel>
<div className={styles.carousel_img}> </div>
    
    
    </div>
  )
}

export default Carouseleffect






