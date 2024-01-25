import React, { useCallback, useEffect, useRef, useState } from "react";

import "react-circular-progressbar/dist/styles.css";

import styles from "./Saturday.module.scss";

export default function Saturday() {
  const [currentRotation, setCurrentRotation] = useState(0);
  // background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
  const [colorStops, setColorStops] = useState([
    // { color: "#e43f00", position: 0 },
    // { color: "#e43f00", position: 90 },
    // { color: "#55cc3b", position: 90 },
    // { color: "#55cc3b", position: 180 },
    // { color: "#6b0efd", position: 180 },
    // { color: "#6b0efd", position: 270 },
    // { color: "#e456ed", position: 270 },
    // { color: "#e456ed", position: 360 },



  { color: "red", position: 0 },
    { color: "red", position: 51 },
    { color: "yellow", position: 51 },
    { color: "yellow", position: 102 },
    { color: "lime", position: 102 },
    { color: "lime", position: 153 },
    { color: "aqua", position: 153 },
    { color: "aqua", position: 204 },
    { color: "blue", position: 204 },
    { color: "blue", position: 255 },
    { color: "magenta", position: 255 },
    { color: "magenta", position: 306 },
    { color: "red", position: 306 },
    { color: "red", position: 360 },



  ]);

  const generateConicGradient = () => {
    // return `conic-gradient(${colorStops
    //   .map((stop) => `${stop.color} ${stop.position}%`)
    //   .join(", ")})`;


    const colorStopsWithEnd = [...colorStops, { color: colorStops[0].color, position: 100 }];
    return `conic-gradient(${colorStopsWithEnd
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







  const smoleRef = useRef(null);

  useEffect(() => {
    console.log("currentRotation:", currentRotation);
    // console.log("colorStops:", colorStops);
  
    // const calculateBackgroundColor = () => {
    //   const rotationPercentage = (currentRotation % 360 + 360) % 360;
    //   const colorStop = colorStops.find((stop) => rotationPercentage <= stop.position);
  
    //   return colorStop ? colorStop.color : colorStops[0].color;
    // };


    const calculateBackgroundColor = () => {
      // Ensure currentRotation is positive and within the range [0, 360)
      // const rotationInDegrees = (currentRotation % 360 + 360 + 90) % 360;
      
      // const colorStop = colorStops.find((stop) => rotationInDegrees <= stop.position);
    
      // return colorStop ? colorStop.color : colorStops[0].color;


       // Ensure currentRotation is positive and within the range [0, 360)
  const rotationInDegrees = (currentRotation % 360 + 360 + 90) % 360;

  // Map the rotation angle to a hue value within the range [0, 360)
  const hue = rotationInDegrees;

  // Set the saturation and lightness values (you can adjust these as needed)
  const saturation = 100; // Example value
  const lightness = 50; // Example value

  // Create the HSL color string
  const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return hslColor;




    };



  
    const backgroundColor = calculateBackgroundColor();
  
    // console.log("backgroundColor:", backgroundColor);
  
    // Update the background color using the ref
    if (smoleRef.current) {
      smoleRef.current.style.color = backgroundColor;
  


      // style={{ background: `conic-gradient(${generateConicGradient()})` }}


    }
  }, [currentRotation, colorStops]);




  const handleTwoRef = useRef(null);






  // useEffect(() => {
  //   // Function to extract rotation degree from style.transform
  //   const extractRotationFromTransform = (transform) => {
  //     const match = transform.match(/rotate\(([^)]+)\)/);
  //     return match && match[1] ? parseFloat(match[1]) : 0;
  //   };
  
  //   // Get the current rotation degree from handleTwo
  //   const currentRotationFromElement = handleTwoRef.current
  //     ? extractRotationFromTransform(handleTwoRef.current.style.transform)
  //     : 0;
  //       console.log(currentRotationFromElement)
  //   // Update the state with the current rotation
  //   setCurrentRotation(currentRotationFromElement);
  // }, [/* Dependencies as needed */]);








  return (
    <div className={styles.ui}>
       <div  
             style={{ background: `conic-gradient(${generateConicGradient()})` }}   className={styles.main}> 
        <div ref={handleTwoRef} style={{ transform: `rotate(${currentRotation}deg)` }} className={styles.handleTwo}></div>
        <div     className={styles.smole}>
        <ion-icon  ref={smoleRef}     name="bulb-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

// style={{ background: generateConicGradient() }}   