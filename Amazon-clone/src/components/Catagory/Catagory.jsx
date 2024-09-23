import React from 'react'
import classes from "./catagory.module.css"
import { catagoryInfo } from './Catagoryfullinfo'
import Catagorycard from './Catagorycard'
function Catagory() {
  return (
    <div className={classes.category__container}>
        {
            catagoryInfo.map((infos)=>(
                <Catagorycard data ={infos} key={infos.id}/>
            ))
        }

    </div>
  )
}

export default Catagory