/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import styles from "./Matrix.module.scss";
import { useItemContext } from "../../Hooks/ItemProvider";
import Check from "../CheckBox/Check";

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
    name: "demo",
    current: "0.09A",
    voltage: "3.00v",
    temp1: "7",
    temp2: "3",

    color: "#7AB801",
  },
  {
    id: 3,
    name: "preset 5",
    current: "2.00A",
    voltage: "0.80v",
    temp1: "10",
    temp2: "2",
    color: "#FF2800 ",
  },
  {
    id: 4,
    name: "preset 7",
    current: "0.50A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "4",

    color: "#00088B",
  },

  {
    id: 5,
    name: "preset 9",
    color: "#E3242B",
    active: true,
    current: "0.40A",
    voltage: "4.00v",
    temp1: "5",
    temp2: "1",
  },
  {
    id: 6,
    name: "preset 11",
    current: "2.00A",
    voltage: "0.00v",
    temp1: "4",
    temp2: "1",
    color: " #EA3C53",
  },
  {
    id: 7,
    name: "meeting",
    current: "0.50A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "4",
    color: " #8D021F",
  },
  {
    id: 8,
    name: "preset 4",
    current: "2.00A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "1",
    color: "#ED7117",
  },

  {
    id: 9,
    name: "prest 6",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#E34A27",
  },
  {
    id: 10,
    name: "preset 8",
    current: "3.00A",
    voltage: "0.00v",
    temp1: "5",
    temp2: "1",
    color: "#B0FC38",
  },

  {
    id: 11,
    name: "preset 10",
    current: "0.40A",
    voltage: "3.00v",
    temp1: "2",
    temp2: "0",
    color: "#98BF64",
  },

  {
    id: 12,
    name: "preset 4",
    current: "2.00A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "1",
    color: "#ED7117",
  },

  {
    id: 13,
    name: "prest 6",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#E34A27",
  },
  {
    id: 14,
    name: "preset 8",
    current: "3.00A",
    voltage: "0.00v",
    temp1: "5",
    temp2: "1",
    color: "#B0FC38",
  },

  {
    id: 15,
    name: "preset 10",
    current: "0.40A",
    voltage: "3.00v",
    temp1: "2",
    temp2: "0",
    color: "#98BF64",
  },

  {
    id: 16,
    name: "prest 6",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#E34A27",
  },
  {
    id: 17,
    name: "preset 8",
    current: "3.00A",
    voltage: "0.00v",
    temp1: "5",
    temp2: "1",
    color: "#B0FC38",
  },

  {
    id: 18,
    name: "preset 10",
    current: "0.40A",
    voltage: "3.00v",
    temp1: "2",
    temp2: "0",
    color: "#98BF64",
  },
];

const DataTwo = [
  {
    id: 19,
    name: "morning",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#004A7F",
  },
  {
    id: 20,
    name: "demo",
    current: "0.09A",
    voltage: "3.00v",
    temp1: "7",
    temp2: "3",

    color: "#7AB801",
  },
  {
    id: 21,
    name: "preset 5",
    current: "2.00A",
    voltage: "0.80v",
    temp1: "10",
    temp2: "2",
    color: "#FF2800 ",
  },
  {
    id: 22,
    name: "preset 7",
    current: "0.50A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "4",

    color: "#00088B",
  },

  {
    id: 23,
    name: "preset 9",
    color: "#E3242B",
    active: true,
    current: "0.40A",
    voltage: "4.00v",
    temp1: "5",
    temp2: "1",
  },
  {
    id: 24,
    name: "preset 11",
    current: "2.00A",
    voltage: "0.00v",
    temp1: "4",
    temp2: "1",
    color: " #EA3C53",
  },
  {
    id: 25,
    name: "meeting",
    current: "0.50A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "4",
    color: " #8D021F",
  },
  {
    id: 26,
    name: "preset 4",
    current: "2.00A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "1",
    color: "#ED7117",
  },

  {
    id: 27,
    name: "prest 6",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#E34A27",
  },
  {
    id: 28,
    name: "preset 8",
    current: "3.00A",
    voltage: "0.00v",
    temp1: "5",
    temp2: "1",
    color: "#B0FC38",
  },

  {
    id: 29,
    name: "preset 10",
    current: "0.40A",
    voltage: "3.00v",
    temp1: "2",
    temp2: "0",
    color: "#98BF64",
  },

  {
    id: 30,
    name: "preset 4",
    current: "2.00A",
    voltage: "3.00v",
    temp1: "4",
    temp2: "1",
    color: "#ED7117",
  },

  {
    id: 31,
    name: "prest 6",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#E34A27",
  },
  {
    id: 32,
    name: "preset 8",
    current: "3.00A",
    voltage: "0.00v",
    temp1: "5",
    temp2: "1",
    color: "#B0FC38",
  },

  {
    id: 33,
    name: "preset 10",
    current: "0.40A",
    voltage: "3.00v",
    temp1: "2",
    temp2: "0",
    color: "#98BF64",
  },

  {
    id: 34,
    name: "prest 6",
    current: "0.00A",
    voltage: "0.00v",
    temp1: "0",
    temp2: "1",
    color: "#E34A27",
  },
  {
    id: 35,
    name: "preset 8",
    current: "3.00A",
    voltage: "0.00v",
    temp1: "5",
    temp2: "1",
    color: "#B0FC38",
  },

  {
    id: 36,
    name: "preset 10",
    current: "0.40A",
    voltage: "3.00v",
    temp1: "2",
    temp2: "0",
    color: "#98BF64",
  },
];

export default function Matrix() {
  const [items, setItems] = useState(Data);
  const [itemsTwo, setItemsTwo] = useState(DataTwo);

  const [checked, setIsChecked] = useState(false);
  let active = true;
  const [checkboxState, setCheckboxState] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  function handleClick(id) {
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));

    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  }

  function handleAll() {
    let checkboxes = document.querySelectorAll("#checkbox2");
    console.log(checkboxes);

    checkboxes.forEach((checkbox) => {
      checkbox.checked = !checkbox.checked;
      setCheckedItems(true);
    });

    // setCheckedItems(false)
  }

  function handleChange() {}

  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\-----\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  ////////////////////////////////////////////////////////////

  return (
    <div
      className={`${styles.box}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.PDU}>
          <p>Inputs</p>
        </div>
        <div className={styles.topLeft}>
          {/* <ThemesAdd text={"PDUs"} /> */}

          {items.map((data) => (
            <div
              onClick={() => handleClick(data.id)}
              className={`${styles.boxTwo}`}
              key={data.id}
            >
              <div className={styles.boxTwoLeft}>
                <span>{data.name}</span>

                {/* |-----------------------------------------------| */}

                {/* <label htmlFor="">
                  <input
                    type="checkbox"
                    onChange={() => handleChange(data.id)}
                    checked={checkboxState[data.id] || false}
                  />
                </label> */}

                <div className={styles.round}>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    checked={checkboxState[data.id] || false}
                    id="checkbox"
                  />
                  <label htmlFor="checkbox"></label>
                </div>

                {/* |----------------------------------------------------------| */}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.OutputsText}>
          <p>outputs</p>
        </div>
        <div className={styles.topRight}>
          <div className={styles.items}>
            {itemsTwo.map((data) => (
              <div
                onClick={() => handleClick(data.id)}
                className={`${styles.boxTwoRight}`}
                key={data.id}
              >
                <div className={styles.boxTwoRightText}>
                  <span>{data.name}</span>
                </div>

                <div className={styles.round}>
                  <input
                    type="checkbox"
                    name={data.id}
                    onChange={handleChange}
                    checked={checkedItems[data.id] || false}
                    id="checkbox2"
                  />
                  <label htmlFor="checkbox2"></label>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.select}>
            <div onClick={handleAll}>
              {" "}
              <span>select all outputs</span>
            </div>{" "}
            <div>
              {" "}
              <span>
                <ion-icon name="save-outline"></ion-icon>
              </span>{" "}
              <span>save</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
