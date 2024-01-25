/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Themes.module.scss";
import "animate.css";
export default function Themes({ name, color, id, handleClickDelete, index }) {
  let active = true;
  console.log(id, index);
  return (
    <div className={`${styles.box} `}>
      <div className={styles.boxLeft}>
        <div style={{ background: color }} className={styles.sample}></div>
        <span>{name}</span>
      </div>
      <div onClick={() => handleClickDelete(id)} className={styles.icon}>
        <ion-icon name="trash-outline"></ion-icon>
      </div>
    </div>
  );
}
