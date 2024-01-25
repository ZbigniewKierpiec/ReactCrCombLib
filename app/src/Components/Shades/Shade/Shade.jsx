// import React from "react";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Shade.module.scss";

import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import Zaluzje from '../Zaluzje/Zaluzje';
export default function Shade() {
  const nodeRef = useRef(null);


  const [dragPosition, setDragPosition] = useState("down");


  const handleDrag = (_, { deltaY }) => {
    if (deltaY < 0) {
      setDragPosition("up");
    
      // setNumber((prev) => Math.max(0, prev - 1));
    } else if (deltaY > 0) {
      setDragPosition("down");
    

  };
 

  };
  return (
    <div  className={styles.box}>
      <div className={styles.mask}>
        <Draggable
          nodeRef={nodeRef}
          axis="y"
          bounds={{ top: -195, bottom: -21 }}
          // onStart={handleStart}

          onDrag={handleDrag}
       
        >
          <div
          ref={nodeRef}
    
         
            className={styles.blind}
          >
            <div className={styles.info}>
              <span className={styles.text}></span>

              <span
                className={` ${styles.icon}   ${
                  dragPosition === "up" ? styles.down : styles.up
                }`}
              >
                <ion-icon name="chevron-up-outline"></ion-icon>
              </span>
            </div>
          </div>
       
        <div className={styles.blindBackground}></div>
      </div>
    </div>
  );
}
