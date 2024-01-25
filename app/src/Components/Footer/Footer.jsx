import React, { useState } from "react";
import styles from "./Footer.module.scss";
import VolumeSlider from "../Volume Slider/VolumeSlider";
import { useTheme } from "./../../Hooks/ThemeProvider";
import ColorMode from "../Color Mode/ColorMode";

import {
  bridgeReceiveIntegerFromNative,
  bridgeReceiveBooleanFromNative,
  bridgeReceiveStringFromNative,
  bridgeReceiveObjectFromNative,
} from "@crestron/ch5-crcomlib";
import { publishEvent } from "@crestron/ch5-crcomlib";
import {
  useSubscribeAnalog,
  useSubscribeDigital,
  useSubscribeSerial,
  useSubscribeString,
} from "@norgate-av/react-hooks";

window.bridgeReceiveIntegerFromNative = bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = bridgeReceiveObjectFromNative;

export default function Footer() {
  const opacityValue = useSubscribeAnalog("1");
  const textResponse = useSubscribeSerial("1");

  const [palette, setPalette] = useState(false);
  const { isDarkMode, toggleMode } = useTheme();
  function handlePaletteClick() {
    setPalette(!palette);
  }

  function handleLowClick(params) {
    publishEvent("b", "7", true);
    publishEvent("b", "7", false);
  }

  return (
    <footer className={`${styles.footer} ${isDarkMode ? styles.darkmode : ""}`}>
      <div className={styles.volume}>
        <span className={`${isDarkMode ? styles.darkmode : ""}`}>
          <ion-icon name="volume-medium-outline"></ion-icon>
        </span>
        <span
          onClick={handleLowClick}
          className={`${isDarkMode ? styles.darkmode : ""}`}
        >
          <ion-icon name="volume-low-outline"></ion-icon>
        </span>
        <div className={styles.slider}>
          <VolumeSlider />
        </div>
        <span className={`${isDarkMode ? styles.darkmode : ""}`}>
          <ion-icon name="volume-high-outline"></ion-icon>
        </span>
      </div>
      <span
        onClick={handlePaletteClick}
        className={`${styles.color} ${isDarkMode ? styles.darkmode : ""}`}
      >
        <ion-icon name="color-palette-outline"></ion-icon>
      </span>
      <div className={styles.info}>
        <p>{textResponse}</p>
        <p>{opacityValue}</p>
      </div>
      <ColorMode palette={palette} />
    </footer>
  );
}
