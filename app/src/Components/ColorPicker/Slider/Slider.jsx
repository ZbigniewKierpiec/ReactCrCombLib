/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styles from './Slider.module.scss';
export default function Slider({handleSliderMouseDown, handleSliderMouseUp,sliderValue , handleSlider , handleTouchStart ,handleTouchEnd  }) {
   console.log(sliderValue)
   const[value , setValue]=useState(50);

   function handleInput(e){
       setValue(e.target.value)
   }

  return (
    <div className={styles.container}>
    <p>brightness</p>
 <div className={styles.rangeslider}>
 <label style={{ width:`${value}%` }}    className={styles.zee} htmlFor="slider"></label>
      <input
      onInput={(e)=>handleInput(e)}
       onMouseDown={handleSliderMouseDown}
        onMouseUp={handleSliderMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      onChange={(e)=>handleSlider(e)}
      className={styles.rangesliderrange}
        type="range"
        value={sliderValue}
        min="0"
        max="100"
        id='slider'
      />



    </div>
    </div>
   
  )
}
