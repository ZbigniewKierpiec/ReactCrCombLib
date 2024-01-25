import React from 'react'
import styles from './Themes.module.scss';
export default function ThemesAdd({text , icon}) {
  return (
    <div className={styles.box}>
    <div className={styles.boxLeft}>
     {/* <div className={styles.sample}></div> */}
     <p>{text}</p>
     <ion-icon name={icon}></ion-icon>
 
     {/* add-outline */}
    </div>
   
 </div>
  )
}
