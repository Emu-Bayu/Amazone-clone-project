import React, { useContext } from 'react'
import classes from "./header.module.css";
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import Lowerheader from './Lowerheader';
import { DataContext } from '../Dataprovider/Dataprovider';
import {auth} from "../../Utility/Firebase"


function Header() {
const [{basket,user}, dispatch]= useContext(DataContext)
// console.log(state.length)
    const totalItem= basket?.reduce((amount,item)=>{
        return item.amount+amount
    },0)
  return (
   <section className={classes.fixed}>
    <section className={  classes.header_container
    }>
        <div className=
        {classes.logo_container}>
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon logo" />
            </Link>
            <div className={classes.delivery}>
            <span>
            <SlLocationPin />
            </span>
            <div>
                <p>   Deliver to </p>
                <span>Ethiopia</span>
            </div>
            </div>
        </div>
        <div className={classes.search}>
            
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder='search products' />
            <BsSearch size={38}/>
        </div>
        
        <div className={classes.order_container}>
            <Link to ="" className={classes.language}>

            <img src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg " alt="" />
                <select name='' id=''>  
                    <option value="">EN</option>
                </select>
            </Link>
                
           
            <Link to={!user &&"/auth"}>
                <div>
                    {
                        user?( 
                        
                        <>
                        <p>Hellow,{user?.email?.split("@")[0]}</p>
                       <span onClick={()=>auth.signOut()}>Sign Out</span>
                        </>
                        ):(
                            <> 
                            <p>Hellow, Sign In</p>
                            <span>Account & Lists</span>
                            
                            </>
                        ) } 
                </div>
              
            </Link>
            
            <Link to="/Order">
                <p>Returns</p>
                <span>& Orders</span>
            </Link>
            <Link to ="/Cart" className={classes.cart}>
                <BiCart size={35}/>
                <span>{totalItem}</span>
            </Link>
        </div>
    </section>
    <Lowerheader/>
   </section>
  )
}

export default Header