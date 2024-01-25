import React, { useCallback, useEffect, useRef, useState } from "react";

import "react-circular-progressbar/dist/styles.css";
import styles from "./Sunday.module.scss";
import Draggable, { DraggableCore } from "react-draggable";
export default function Sunday() {
  const draggableRef = useRef(null);

  const handleMouseDown = (event) => {
    event.preventDefault();
    const initialX = event.clientX;
    const initialY = event.clientY;

    const handleMouseMove = (event) => {
      const deltaX = event.clientX - initialX;
      const deltaY = event.clientY - initialY;

      draggableRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };


  return (
    <div className={styles.ui}>
    
       
        
        <div  ref={draggableRef} className={styles.main}>
          <div    onMouseDown={handleMouseDown}    className={styles.handleTwo}></div>

          <div className={styles.smole}>
            <ion-icon name="bulb-outline"></ion-icon>
          </div>
        </div>

    </div>
  );
}

// style={{ background: generateConicGradient() }}
