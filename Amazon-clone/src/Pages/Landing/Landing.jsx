import React from 'react'
import Catagory from "../../components/Catagory/Catagory"
import Carousel from "../../components/Carousel/Carousel"
import Product from "../../components/Product/Product"
import LayOut from "../../components/LayOut/LayOut"
function Landing() {
  return (
   
    
     <LayOut>
     <Carousel/>
      <Catagory/>
      <Product/>
     </LayOut>
    
    
     
    
  )
}

export default Landing