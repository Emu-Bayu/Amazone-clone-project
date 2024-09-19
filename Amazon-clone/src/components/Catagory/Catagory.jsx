import React from 'react'
import styles from "./catagory.module.css"
import { catagoryInfo } from './Catagoryfullinfo'
import Catagorycard from './Catagorycard'
function Catagory() {
  return (
    <div className={styles.catagory_container}>
        {
            catagoryInfo.map((infos)=>(
                <Catagorycard data ={infos} key={infos.id}/>
            ))
        }

    </div>
  )
}

export default Catagory