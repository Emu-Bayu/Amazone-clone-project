import React from 'react'
import Rating from "@mui/material/Rating"
import { Link } from 'react-router-dom'
import Currencyformat from '../Currencyformat/Currencyformat'
import styles from "./product.module.css"
function ProductCard({Product}) {
    const {image, title,id,rating,price,category,description}=Product
  return (
    <div>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            <div className={styles.rating}>
              <Rating value={rating?.rate} precision={0.1}/>
                <small>{rating?.count}</small>
            </div>
            <div>
                <Currencyformat amount={price}/>
            </div>
            <button className={styles.button}> Add to cart</button>
        </div>

    </div>
  )
}

export default ProductCard