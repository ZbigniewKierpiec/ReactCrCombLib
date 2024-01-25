/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import styles from "./ColorMode.module.scss";
import ColorSlider from "./ColorSlider";
import "animate.css";
import { useTheme } from "../../Hooks/ThemeProvider";
import { useThemes } from "../../Hooks/ClickedThemeProvider";
// eslint-disable-next-line no-unused-vars
export default function ColorMode({ palette }) {
  const [checked, setChecked] = useState(true);

  // const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkMode, toggleMode } = useTheme();
  const {  handleThemeChange } = useThemes();
  const handleCheckboxChange = () => {
    setChecked(!checked);
    // setIsDarkMode(!isDarkMode);
           toggleMode();
  };

  const handleLightThemeClick = () => {
    handleThemeChange('light');
  };

  const handleDarkThemeClick = () => {
    handleThemeChange('dark');
  };

    const  handleBlueThemeClick = ()=>{
      handleThemeChange('blue');
    }



  return (
    <div
      className={`${styles.box} ${checked ? styles.active : ""}  ${
        palette
          ? "animate__animated animate__fadeInRight"
          : "animate__animated animate__fadeOut"
      }     `}
    >
      <div className={styles.left}>
        <div onClick={handleLightThemeClick}  ></div>
        <div onClick={handleDarkThemeClick}   ></div>
        <div onClick={handleBlueThemeClick}    ></div>
      </div>
      <div className={styles.right}>
        <div className={`${styles.sun}  ${isDarkMode ? styles.darkmode :''}  `}>
          <ion-icon name="sunny-outline"></ion-icon>
        
        </div>
        <ColorSlider handleCheckboxChange={handleCheckboxChange} />
        <div className={`${styles.moon} ${isDarkMode ? styles.darkmode :''}   `}>
          <ion-icon name="moon-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
