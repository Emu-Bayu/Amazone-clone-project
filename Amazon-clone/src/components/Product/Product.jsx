import React, { useEffect, useState } from 'react'
import styles from "./product.module.css"
import axios from "axios"
import ProductCard from './ProductCard'
function Product() {
const [products , setproducts]= useState([])

useEffect (()=>{
  axios.get('https://fakestoreapi.com/products')
  .then((res)=>{
console.log(res)
setproducts(res.data)
  }) .catch((err)=>{
    console.log(err,"error")
  })

},[])

  return (
    <section className={styles.product_conatiner}>
      {
  products.map((singleproduct)=>(<ProductCard Product={singleproduct} key= {singleproduct.id}/>
  )) 
      }
    
        
    </section>
  )
}

export default Product