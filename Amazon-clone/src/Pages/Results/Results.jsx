import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/Endepoints'
import Product from '../../components/Product/Product'
import classes from './result.module.css'
import ProductCard from '../../components/Product/ProductCard'
function Results() {
  const {categoryName} =useParams()
  console.log(categoryName )
   const [results,  SetResults]= useState([])
   useEffect(() => {
    axios
    .get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      SetResults(res.data);
      console.log(res.data);
    }) .catch((err)=>{
      console.log(err,"error")
    })
  }, [])
  
  return (
    <LayOut>
      <section>
      <h1 style={{padding:"30px"}}>Results</h1>
      <p style={{padding:"30px"}}>Catagory/ {categoryName}</p>
      <hr />
  
      <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard 
              key={Product.id} 
              Product={product}
              reanderAdd={true
              } 
            />
          ))}
        </div>

      </section>
    
    </LayOut>
   
  )
}

export default Results
















