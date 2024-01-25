import React, { useEffect, useRef, useState } from "react";
import { useItemContext } from "../../Hooks/ItemProvider";
import styles from "./Lighting.module.scss";

import ThemesAdd from "./Themes/ThemesAdd";
import Picker from "../ColorPicker/Picker";

import Slider from "../ColorPicker/Slider/Slider";

const Data = [
  {
    id: 1,
    name: "crestron blue",
    color: "#004A7F",
    active: true,
  },
  {
    id: 2,
    name: "pro av green",
    color: "#7AB801",
    active: true,
  },
  {
    id: 3,
    name: "ferrari red",
    color: "#FF2800 ",
    active: true,
  },
  {
    id: 4,
    name: "deep sea blue",
    color: "#00088B",
    active: true,
  },

  {
    id: 5,
    name: "rose",
    color: "#E3242B",
    active: true,
  },
  {
    id: 6,
    name: "desire",
    color: " #EA3C53",
    active: true,
  },
  {
    id: 7,
    name: "burgundy",
    color: " #8D021F",
    active: true,
  },
  {
    id: 8,
    name: "carrot",
    color: "#ED7117",
    active: true,
  },

  {
    id: 9,
    name: "flame",
    color: "#E34A27",
    active: true,
  },
  {
    id: 10,
    name: "chartreuse",
    color: "#B0FC38",
    active: true,
  },

  {
    id: 11,
    name: "olive",
    color: "#98BF64",
    active: true,
  },

  {
    id: 12,
    name: "moss",
    color: "#466D1D",
    active: true,
  },
  {
    id: 13,
    name: "cobalt",
    color: "#1338BE",
    active: true,
  },

  {
    id: 14,
    name: "teal",
    color: " #48AAAD",
    active: true,
  },
];
export default function Lighting() {
  const { clickedItem } = useItemContext();
  const [progress, setProgress] = useState(0);
  const [love, setId] = useState("");
  const [items, setItems] = useState(Data);
  const [activeTwo, setActiveTwo] = useState(false);
  const [color, setColor] = React.useState({
    hue: 200,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });
  // /////////////////////brightness

  const [sliderValue, setSliderValue] = useState(50);
  function handleSlider(e) {
    setSliderValue(e.target.value);
    console.log(sliderValue);
  }

  function handleSliderMouseUp() {
    setActiveTwo(false);
  }

  function handleSliderMouseDown() {
    setActiveTwo(true);
  }

  function handleTouchStart() {
    setActiveTwo(true);
  }

  function handleTouchEnd() {
    setActiveTwo(false);
  }

  //////////////////////////////////////
  const onInput = (hue) => {
    setColor({ ...color, hue });
  };
  let active = true;
  const deleteTimer = 1300;
  function handleClickDelete(id) {
    setId(id);

    setTimeout(() => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, deleteTimer);

    console.log(love);
  }

  //////////////////////////////////////////////////

  return (
    <div
      className={`${styles.box}  ${
        active
          ? "animate__animated animate__fadeIn     animate__slower 2s "
          : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.topLeft}>
          <ThemesAdd  icon={'add-outline'}       />

          {items.map((data) => (
            <div
              className={`${styles.boxTwo}  ${
                data.id === love ? "animate__animated animate__fadeOut" : ""
              }  `}
              key={data.id}
            >
              <div className={styles.boxTwoLeft}>
                <div
                  style={{ background: data.color }}
                  className={styles.sample}
                ></div>
                <span>{data.name}</span>
              </div>

              <div
                onClick={() => handleClickDelete(data.id)}
                className={styles.icon}
              >
                <ion-icon name="trash-outline"></ion-icon>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.topRight}>
          <Picker activeTwo={activeTwo} selectedValue={sliderValue} />
          <Slider
            handleSlider={handleSlider}
            handleSliderMouseDown={handleSliderMouseDown}
            handleSliderMouseUp={handleSliderMouseUp}
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handleTouchEnd}
          />
        </div>
      </div>
    </div>
  );
}
