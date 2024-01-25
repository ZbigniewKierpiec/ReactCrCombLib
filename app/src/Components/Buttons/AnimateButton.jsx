/* eslint-disable react/prop-types */
import React from 'react'
import styles from './AnimateButton.module.scss';
export default function AnimateButton({onClick}) {
  return ( 
  <div onClick={onClick}  className={`animate__animated animate__fadeInUp animate__delay-3s animate__slow    ${styles.btn}`} >
  <a className={styles.btntext}>zacznij czytac</a>
  <div className={styles.animatedborder}></div>
</div>

  )
}
