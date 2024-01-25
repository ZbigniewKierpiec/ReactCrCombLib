/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import styles from "./Outputsitem.module.scss";

export default function OutputsItem({ itemsT , active2 }) {
  useEffect(() => {
   
     console.log(active2)
  }, [itemsT , active2]);
  return (
    <div className={`${styles.box}  ${active2 ?'animate__animated animate__fadeIn     animate__slower 2s':'animate__animated animate__fadeOut'}  `}>
      <div className={styles.outputs}>
        <p>Outputs</p>
      </div>
      <div className={styles.outputsBox}>
        <div className={styles.item}>
          <span  className={styles.p}>
            current 
          </span>
          <span>{itemsT.current}</span>


        </div>

        <div className={styles.item}>
          <span className={styles.p}>
            voltage 


          </span>
          <span>{itemsT.voltage}</span>


        </div>
        <div className={styles.item}>
          <span className={`${styles.p} ${styles.gap}`} >
            temp 1 
          </span>
          <span>{itemsT.temp1}&#8451;</span>
        </div>

        <div className={styles.item}>
          <span className={`${styles.p} ${styles.gap}  `} >temp 2</span>
          <span>{itemsT.temp2 }&#8451;</span>
        </div>
      </div>
    </div>
  );
}
