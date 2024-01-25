/* eslint-disable react/prop-types */
import React from 'react'
import styles from './MattButtonEffect.module.css';
export default function MattButtonEffect({ children, onClick, type }) {
  return (
    <button onClick={onClick}  className={`${styles.button} ${styles[type]}`}  >
    <span className={styles.span}>{children}</span>
  </button>
  )
}
