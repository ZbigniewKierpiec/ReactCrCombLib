/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { useTheme } from "../../Hooks/ThemeProvider";

import {useThemes} from '../../Hooks/ClickedThemeProvider'
import styles from "./Header.module.scss";
export default function Header() {

  const [currentTime, setCurrentTime] = useState(new Date());

  const [currentDate, setCurrentDate] = useState(new Date());
  const { isDarkMode, toggleMode } = useTheme();
  const { themeStyles, handleThemeChange } = useThemes();
  const time = 10000;
  useEffect(() => {
    // Update the current time every minute (60,000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      setCurrentDate(new Date());
    }, time); // Update every minute

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount
  let formattedTime = currentTime.toLocaleTimeString([], {


    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  
  if (formattedTime.startsWith("00")) {
    // Replace "00" with "12"
    formattedTime = formattedTime.replace(/^00/, "12");
  }

  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    weekday:'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header  style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.textColor }}            className={`${styles.header} ${isDarkMode ? styles.darkmode:''}`}>
      <div className={styles.left}>
        <div className={styles.top}>
          <time className={styles.time} dateTime={currentTime.toISOString()}>
            {formattedTime}
          </time>
        </div>
        <div className={styles.bottom}>
          <h2 className={styles.h2}>meeting room</h2>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
     
        <time dateTime={currentDate.toISOString()}>{formattedDate}</time>

        </div>
        <div className={styles.bottom}>
          <h1 className={styles.h1}>MTR Flex Mode</h1>
        </div>
      </div>
    </header>
  );
}
