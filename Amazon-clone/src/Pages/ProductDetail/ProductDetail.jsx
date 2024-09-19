import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/Endepoints'
import ProductCard from '../../components/Product/ProductCard'
function ProductDetail() {
const {productId} = useParams()
const [product, setproduct] =useState ({});

useEffect(() => {
  axios.get(`${productUrl}/products/${productId}`)  
    .then((res) => {
      console.log(res);
      setproduct(res.data)

    })
    .catch((err) => {
      console.log(err, "error");
    });

},[])
  return (
    
    <LayOut>
      
      <ProductCard 
     Product = {product} />
    
    </LayOut>

   
  )
}

export default ProductDetail

