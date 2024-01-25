// import React from "react";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Shades.module.scss";

import { gsap, Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default function Zaluzje(props) {
  const { gridColumn, gridRow } = props;
  const [direction, setDirection] = useState("down");
  const [number, setNumber] = useState(100);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [activeInfo, setActiveInfo] = useState(false);
  const [activeInfoTwo, setActiveInfoTwo] = useState(true);

  // const [activeText, setActiveText] = useState(false);
  const appRef = useRef(null);
  const infoRef = useRef(null);
  const contRef = useRef(null);
  const animationRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    let startX, startY;
    const draggableInstance = Draggable.create(appRef.current, {
      type: "y",
      bounds: { top: 0 },
      throwProps: true,
      onPress: function () {
        startX = this.x;
        startY = this.y;
      },
      onDrag: updateDirection,

      onDragEnd: function () {
        // Handle drag end event
        setActive(false);

        setTimeout(() => {
          setActive2(false);
        }, 2000);

        setTimeout(() => {
          setActiveInfoTwo(false);
        }, 3000);
      },
    });

    function updateDirection() {
      const getDistanceBetweenElements = () => {
        const elementOne = appRef.current;
        const elementTwo = infoRef.current;
        const elementThree = contRef.current;
        if (elementOne && elementTwo && elementThree) {
          const rectOne = elementOne.getBoundingClientRect();
          const rectTwo = elementTwo.getBoundingClientRect();
          const rectThree = elementThree.getBoundingClientRect();
          const distance = Math.abs(rectTwo.bottom - rectOne.top);
          const distance2 = Math.abs(rectOne.top - rectThree.top);
          let formated = Math.ceil(distance2);

          console.log("Distance between Element1 and Element2:", formated);
          if (formated >= 110) {
            setActiveInfo(true);
          } else {
            setActiveInfo(false);
          }

          return distance;
        }

        return null; // or handle the case when on
      };

      setActiveInfoTwo(true);

      // Call the function on mount or whenever the component updates
      // getBoundingClientRect();
      getDistanceBetweenElements();
      const xChange = this.x - startX;
      const yChange = this.y - startY;
      const ratio = Math.abs(xChange / yChange);
      const newDirection = [];
      if (newDirection) {
        setActive(true);
        setActive2(true);
      }
      if (ratio > 0.25) {
        newDirection.push(xChange < 0 ? "left" : "right");
      }

      if (ratio < 4) {
        newDirection.push(yChange < 0 ? "up" : "down");
      }

      setDirection(newDirection.join("-"));

      const yPosition = this.y;
      const containerHeight = appRef.current.clientHeight;

      const percentage = Math.round(
        (Math.abs(yPosition) / containerHeight) * 100
      );

      if (yPosition < 0) {
        setNumber(100 - percentage);
      } else {
        setNumber(yPosition === 0 ? 100 : 100);
      }

      startX = this.x;
      startY = this.y;
    }

    return () => {
      if (draggableInstance) {
        draggableInstance[0].kill();
      }
    };
  }, []);

  return (
    <div
      ref={contRef}
      style={{ gridColumn, gridRow }}
      className={`${styles.box}`}
    >
      <div className={`${styles.mask}  `}>
        <div ref={appRef} className={styles.blind}>
          <div className={styles.info}>
            <span
              ref={infoRef}
              className={`${styles.text}   ${active2 ? styles.active : ""}  `}
            >
              {number}
            </span>

            <span
              className={`${styles.icon} ${
                direction === "up" ? styles.down : styles.up
              } ${active ? styles.active : ""}`}
            >
              <ion-icon name="chevron-up-outline"></ion-icon>
            </span>
          </div>
        </div>

        <div className={styles.blindBackground}>
          <span
            className={`${styles.spanText}  ${
              activeInfo
                ? "animate__animated animate__fadeInDown"
                : "animate__animated animate__fadeOutUp"
            } ${!activeInfoTwo ? styles.activeTwo : ""}     `}
          >
            {number}
          </span>
        </div>
      </div>
    </div>
  );
}

// className={` ${styles.icon}   ${direction === "up" ? styles.down : styles.up}   ${active ?'animate__animated animate__fadeInUp':'animate__animated animate__fadeOutDown animate__delay-2s  '}        `}
