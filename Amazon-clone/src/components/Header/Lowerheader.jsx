import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import styles from "./header.module.css";
function Lowerheader() {
  return (
    <div  className={styles.lower_container}>
        
        <ul>
            <li><AiOutlineMenu  />
              <p> All</p>
            
            </li>
            <li>Today's Deals</li>
            <li>Custemer Service</li>
            <li>Registery</li>
            <li>Gift Cards</li>
            <li> Sell</li>
            

        </ul>




    </div>
  )
}

export default Lowerheader