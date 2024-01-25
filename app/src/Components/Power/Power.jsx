import { React, useState } from "react";
import styles from "./Power.module.scss";
import { useItemContext } from "../../Hooks/ItemProvider";
import ThamesAdd from "../Lighting/Themes/ThemesAdd";
import ThemesAdd from "../Lighting/Themes/ThemesAdd";
import OutputsItem from "./OutputsItem/OutputsItem";
const Data = [
  {
    id: 1,
    name: "morning",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#004A7F",
  },
  {
    id: 2,
    name: "meeting",
    current: "0.09A",
    voltage: "3.00v",
    temp1: "7",
    temp2: "3",

    color: "#7AB801",
  },
  {
    id: 3,
    name: "demo",
    current: "2.00A",
    voltage: "0.80v",
    temp1: "10",
    temp2: "2",
    color: "#FF2800 ",
  },
  {
    id: 4,
    current: "0.50A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "4",
    name: "preset 4",
    color: "#00088B",
  },

  {
    id: 5,
    name: "preset 5",
    color: "#E3242B",
    active: true,
    current: "0.40A",
    voltage: "4.00v",
    temp1: "5",
    temp2: "1",
  },
  {
    id: 6,
    name: "preset 6",
    current: "2.00A",
    voltage: "0.00v",
    temp1: "4",
    temp2: "1",
    color: " #EA3C53",
  },
  {
    id: 7,
    name: "preset 7",
    current: "0.50A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "4",
    color: " #8D021F",
  },
  {
    id: 8,
    name: "preset 8",
    current: "2.00A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "1",
    color: "#ED7117",
  },

  {
    id: 9,
    name: "prest 9",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#E34A27",
  },
  {
    id: 10,
    name: "preset 10",
    current: "3.00A",
    voltage: "0.00v",
    temp1: "5",
    temp2: "1",
    color: "#B0FC38",
  },

  {
    id: 11,
    name: "preset 11",
    current: "0.40A",
    voltage: "3.00v",
    temp1: "2",
    temp2: "0",
    color: "#98BF64",
  },
];
export default function Power() {
  const { clickedItem } = useItemContext();
  let active = true;
  const [love, setId] = useState("");
  const [items, setItems] = useState(Data);
  const [itemsT, setClickedItems] = useState({});
  const [active2, setActive] = useState(false);

  function handleClick(data) {
    setClickedItems(data);
    setActive((prevActive) => (data == itemsT ? !prevActive : true));
  }

  return (
    <div
      className={`${styles.box}  ${
        active
          ? "animate__animated animate__fadeIn     animate__slower 2s "
          : ""
      }`}
    >
      <div className={styles.container}>
      <div className={styles.PDU}>
            <p>PDUs</p>
           </div>
        <div className={styles.topLeft}>
          {/* <ThemesAdd text={"PDUs"} /> */}
           
          {items.map((data) => (
            <div
              onClick={() => handleClick(data)}
              className={`${styles.boxTwo} ${
                data.id === love ? "animate__animated animate__fadeOut" : ""
              }  `}
              key={data.id}
            >
              <div className={styles.boxTwoLeft}>
                <span>{data.name}</span>
              </div>
              {/* 
              <div
                onClick={() => handleClickDelete(data.id)}
                className={styles.icon}
              >
                <ion-icon name="trash-outline"></ion-icon>
              </div> */}
            </div>
          ))}



        </div>

        <div className={styles.powerAll}>

          <span><ion-icon name="flash-outline"></ion-icon></span>     <span>poewr off all</span>

        </div>

        <div className={styles.topRight}>
          <OutputsItem itemsT={itemsT} active2={active2} />
        </div>
      </div>
    </div>
  );
}
