import React, { useEffect, useRef, useState } from "react";
import styles from "./Shades.module.scss";
import "animate.css";
import { useItemContext } from "../../Hooks/ItemProvider";
import ThemesAdd from "../Lighting/Themes/ThemesAdd";
import Zaluzje from "../Zaluzje/Zaluzje";
import Zaluzje2 from "../Zaluzje/Zaluzje2";


import { publishEvent } from "@crestron/ch5-crcomlib";
import {
  useSubscribeAnalog,
  useSubscribeDigital,
  useSubscribeSerial,
  useSubscribeString,
} from "@norgate-av/react-hooks";


const Data = [
  {
    id: 1,
    name: "morning",
    color: "#004A7F",
    active: true,
  },
  {
    id: 2,
    name: "meeting",
    color: "#7AB801",
    active: true,
  },
  {
    id: 3,
    name: "demo",
    color: "#FF2800 ",
    active: true,
  },
  {
    id: 4,
    name: "preset 4",
    color: "#00088B",
    active: true,
  },

  {
    id: 5,
    name: "preset 5",
    color: "#E3242B",
    active: true,
  },
  {
    id: 6,
    name: "preset 6",
    color: " #EA3C53",
    active: true,
  },
  {
    id: 7,
    name: "preset 7",
    color: " #8D021F",
    active: true,
  },
  {
    id: 8,
    name: "preset 8",
    color: "#ED7117",
    active: true,
  },

  {
    id: 9,
    name: "preset 9",
    color: "#E34A27",
    active: true,
  },
  {
    id: 10,
    name: "preset 10",
    color: "#B0FC38",
    active: true,
  },

  {
    id: 11,
    name: "preset 11",
    color: "#98BF64",
    active: true,
  },
];

const ZaluzjeTest = [
  {
    id: 1,
    column: "2 /span 4",
    row: "1 / span 4",
  },
  {
    id: 2,
    column: "7 /span 4",
    row: "1 / span 4",
  },
  {
    id: 3,
    column: "2 /span 4",
    row: "5 / span 4",
  },
  {
    id: 4,
    column: "2 /span 4",
    row: "9/ span 4",
  },
  {
    id: 5,
    column: "7 /span 4",
    row: "5 / span 4",
  },
];

export default function Shades() {
  const [items, setItems] = useState(Data);
  const { clickedItem } = useItemContext();
  const [love, setId] = useState("");
  let active = true;
  const deleteTimer = 1300;
  const testResponce = useSubscribeSerial("1");

  function handleClick(item) {
    console.log("Was pressed a item of name  " + item);

    publishEvent("b", "1", true);
    publishEvent("b", "1", false);
  }

  function handleClickDelete(id) {
    setId(id);

    setTimeout(() => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, deleteTimer);
  }

  return (
    <div
      className={`${styles.box}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      {/* <div className={styles.test}>
        <p>{testResponce}</p>
      </div> */}
      <div className={styles.container}>
        <div className={styles.topLeft}>
          <ThemesAdd />

          {items.map((data) => (
            <div
              onClick={() => handleClick(data.name)}
              className={`${styles.boxTwo} ${
                data.id === love ? "animate__animated animate__fadeOut" : ""
              }`}
              // className={`${styles.boxTwo} ${String(data.id) === String(love)? "animate__animated animate__fadeOut": ""}`}
              key={data.id}
            >
              <div className={styles.boxTwoLeft}>
                {/* <div
style={{ background: data.color }}
className={styles.sample}
></div> */}
                <span>{data.name}</span>
              </div>

              <div
                onClick={() => handleClickDelete(data.id)}
                className={styles.icon}
              >
                <ion-icon name="trash-outline"></ion-icon>
                {/* <IonIcon icon={trashOutline} /> */}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.topRight}>
          {/* {ZaluzjeTest.map((data, index) => (
            <Zaluzje2 key={index} gridColumn={data.column} gridRow={data.row} />
          ))} */}
          <Zaluzje2 gridColumn={`2 /span 4`} gridRow={`1 / span 4`} />
          <Zaluzje2 gridColumn={`7 /span 4`} gridRow={`1 / span 4`} />
          <Zaluzje2 gridColumn={`2 /span 4`} gridRow={`5 / span 4`} />
          <Zaluzje2 gridColumn={`2 /span 4`} gridRow={`9/ span 4`} />
          <Zaluzje2 gridColumn={`7 /span 4`} gridRow={`5 / span 4`} />
        </div>
      </div>
    </div>
  );
}
