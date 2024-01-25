/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./VolumeSlider.module.scss";

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

export default function VolumeSlider() {
  const [sliderValue, setSliderValue] = useState(50);

  function handleSlider(e) {
    setSliderValue(e.target.value);
    let value = e.target.value;
    let integerValue = parseInt(value);

    if (!isNaN(integerValue)) {
      console.log("Conversion to integer successful:", integerValue);
      publishEvent("n", "1", integerValue);
    } else {
      console.log("Invalid input. Not a valid integer.");
    }

    return `${value}`;
  }
  return (
    <div className={styles.rangeslider}>
      <input
        onChange={(e) => handleSlider(e)}
        className={styles.rangesliderrange}
        type="range"
        value={sliderValue}
        min={0}
        max={100}
      />
    </div>
  );
}
