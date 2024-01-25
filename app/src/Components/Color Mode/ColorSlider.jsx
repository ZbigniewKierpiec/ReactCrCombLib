/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ColorSlider.module.scss";
export default function ColorSlider({handleCheckboxChange , checked}) {


  return (
    <>
      <input className={styles.input}   checked={checked}
        onChange={handleCheckboxChange} type="checkbox" id="toggle-slider" />
      <label className={styles.label} htmlFor="toggle-slider">On/Off</label>
    </>
  );
}
