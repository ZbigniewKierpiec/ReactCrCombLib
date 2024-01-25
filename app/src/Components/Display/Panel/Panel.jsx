/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Panel.module.scss';
export default function Panel({data}) {
  return (
    <section className={styles.section}>
    <div className={styles.name}>
    <span>{data.name}  <ion-icon name={data.ledInform}></ion-icon>  </span> 
    </div>
    <div className={styles.box}>
      <span>{data.btn1}</span> 
      <span>{data.btn2}</span>
      <span>{data.btn3}</span>
      <span><ion-icon name={data.btn4}></ion-icon></span>
      <span><ion-icon name={data.btn5}></ion-icon></span>
      <span><ion-icon name={data.btn6}></ion-icon></span>
    </div>
    </section>
  )
}
