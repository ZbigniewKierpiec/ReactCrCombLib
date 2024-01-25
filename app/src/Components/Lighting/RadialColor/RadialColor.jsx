/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from "react";

import "react-circular-progressbar/dist/styles.css";

import styles from "./RadialColor.module.scss";

export default function RadialColor() {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [colorStops, setColorStops] = useState([
    { color: "#ff0000", position: 0 },
    { color: "#ff00ff", position: 25 },
    { color: "#0000ff", position: 50 },
    { color: "#00ff00", position: 75 },
    { color: "#ff0000", position: 100 },
  ]);

  const generateConicGradient = () => {
    return `conic-gradient(${colorStops
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(", ")})`;
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    if (isMouseDown) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = mousePosition.x - centerX;
      const deltaY = mousePosition.y - centerY;
      const angleInDegrees = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setCurrentRotation(angleInDegrees);
    }
  }, [isMouseDown, mousePosition]);

  return (
    <div className={styles.ui}>
      <div className={styles.progresscontainer}>
        <div className={styles.progresscircle}>
          <div className={styles.mask}>
            <div
              style={{ transform: `rotate(${currentRotation}deg)` }}
              className={styles.handle}
            ></div>
            <p></p>
            <div className={styles.extraMask}>
              <ion-icon name="bulb-outline"></ion-icon>
            </div>
          </div>
          <div
            style={{ background: generateConicGradient() }}
            className={styles.conicfill}
          ></div>
        </div>
        <div className={styles.percentagetext}>%</div>
      </div>
    </div>
  );
}


