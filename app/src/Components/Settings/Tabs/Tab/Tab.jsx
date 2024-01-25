/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Tab.module.scss';
// eslint-disable-next-line no-unused-vars
export default function Tab({tab , index , handleTabClick}) {
  return (
   <button   onClick={() => handleTabClick(tab.id, index)}   className={styles.btn}>{tab.title}</button>
  )
}
