import React from "react";
import styles from "./Home.module.scss";
import "animate.css";
export default function Home() {
  const active = true;

  return (
    <div className={`${styles.home}  ${active ? 'animate__animated animate__fadeIn animate__slower 2s   ':''}  `}>
      <div className={styles.con}>
        <div className={`${styles.box} ${styles.box1}`}>
          <p>button one</p>
          <img
            src="https://www.utoledo.edu/it/office365/images/Teams2020.png"
            alt=""
          />
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <p>button two</p>
          <ion-icon name="apps"></ion-icon>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          {" "}
          <p>button three</p> <ion-icon name="apps"></ion-icon>
        </div>
      </div>
    </div>
  );





}
