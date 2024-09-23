import React, { useContext } from 'react'
import classes from "./cart.module.css"
import LayOut from '../../components/LayOut/LayOut'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/Product/ProductCard'
import { DataContext } from '../../components/Dataprovider/Dataprovider'
import Currencyformat from '../../components/Currencyformat/Currencyformat'
import { Type } from '../../Utility/Actiontype'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function Cart() {
  const [{basket,user},dispatch]= useContext(DataContext)
  const total= basket.reduce((amount,item)=>{
   return item.price*item.amount+ amount
  },0)




  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,item
    })
  }

  const decrement=(id)=>{
    dispatch ({
      type:Type.REMOVE_FROM_BASKET,id
    })
  }
  return (

    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}> 
          <h1>Hellow</h1>
          <h3>Your Shoping Basket</h3>
          <hr />
          {
            basket?.length===0? (<p>Opps! No iteme in your cart</p>): 
            (basket?.map((item,id)=>{
              return <section className={classes.cart_product}>
              <ProductCard
              key={id}
              Product={item}
              renderDisc={true}
              flex={true}
              reanderAdd={false}
              />
              <div className={classes.btn_container}>
                <button className={classes.btn} onClick={()=>increment(item)}><IoIosArrowUp size={30}/>
                </button>
                <span>{item.amount}</span>
                <button  className={classes.btn} onClick={()=>decrement(item.id)}><IoIosArrowDown size={30} />
                </button>
              </div>
              
              </section>
              

              
            })
            )
          }
        </div>
        {basket.length!==0 &&(
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} item)</p>
              <Currencyformat amount={total}/>
            </div>
            <span><input type="checkbox" />
            <small> This order contaion a gift</small>
            </span>
            <Link  to="/Payment"> continue to checkout</Link>
          </div>
        )}
      </section>
   </LayOut>
  )
}

export default Cart