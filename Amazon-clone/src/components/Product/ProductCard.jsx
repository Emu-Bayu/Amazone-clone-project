import React, { useContext } from 'react'
import Rating from "@mui/material/Rating"
import { Link } from 'react-router-dom'
import Currencyformat from '../Currencyformat/Currencyformat'
import classes from "./product.module.css"
import { DataContext } from '../Dataprovider/Dataprovider'
import { Type } from '../../Utility/Actiontype'
function ProductCard({Product,flex, renderDisc, reanderAdd}) {
    const {image, title,id,rating,price,category,
      description}=Product



const [state,dispatch]=useContext(DataContext)
const addToCart= ()=>{
  dispatch({type:Type.ADD_TO_BASKET,
    item:{
      image,
       title,
       id,
       rating,
       price,      
       description,    
      
  }
  })
}


  return (
    <div className={`${classes.card__container} ${flex? classes.product_flexed:""}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div >
            <h3>{title}</h3>
            {renderDisc && <div style={{maxWidth:"750px"}}>{description}</div>}
            <div className={classes.rating}>
              <Rating value={rating?.rate} precision={0.1}/>
                <small>{rating?.count}</small>
            </div>
            <div>
                <Currencyformat amount={price}/>
                {
                  reanderAdd && <button className={classes.button} onClick={addToCart}> Add to cart </button>
                }
            </div>
          
        </div>

    </div>
  )
}

export default ProductCard