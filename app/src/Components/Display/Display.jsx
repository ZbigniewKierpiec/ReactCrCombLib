import React, { useEffect, useState } from "react";
import styles from "./Display.module.scss";
import "animate.css";
import { useItemContext } from "../../Hooks/ItemProvider";
import Panel from "./Panel/Panel";
import Numbers from "./Numbers/Numbers";
import Minutes from "./Minutes/Minutes";

import Check from "../CheckBox/Check";

const panels = [
  {
    id: 1,
    name: "samsung tv",
    ledInform: "",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
  {
    id: 2,
    name: "sony wf-tx1000",
    ledInform: "warning-outline",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
  {
    id: 3,
    name: "panasonic tr-100",
    ledInform: "",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
  {
    id: 4,
    name: "philips hu12",
    ledInform: "",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
  {
    id: 5,
    name: "wibble",
    ledInform: "",
    btn1: "off",
    btn2: "on",
    btn3: "input",
    btn4: "volume-medium-outline",
    btn5: "volume-low-outline",
    btn6: "volume-high-outline",
  },
];
export default function Display() {
  let active = true;
 
 
  const [weekdaysChecked, setWeekdaysChecked] = useState(false);
  const[weekendsChecked,setWeekendsChecked]=useState(false);
  const[enableChecked,setEnableChecked]=useState(false);
  

  function handleBox(checkboxType, checked) {
    switch (checkboxType) {
      case 'weekdays':
        setWeekdaysChecked(checked);
        // You can perform additional actions here based on the new checkbox state
        break;
        case 'weekends':
          setWeekendsChecked(checked);
          break;
          case 'enable':
          setEnableChecked(checked)
          break;

      // Handle other checkbox types if needed
      default:
        break;
    }
  }










  return (
    <div
      className={`${styles.box}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.topLeftName}>
              <p>displays</p>
            </div>
            <div className={styles.scroll}>
              {panels.map((data) => (
                <Panel key={data.id} data={data} />
              ))}
            </div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.topRightName}>
              <span>on</span>
              <span>off</span>
            </div>
            <div className={styles.topRightBox}>
              <div className={styles.one}>
                <Numbers />
              </div>

              <div className={styles.dotsOne}>
                <span></span>
                <span></span>
              </div>
              <div className={styles.two}>
                <Minutes />
              </div>
              <div className={styles.three}>
                <Numbers />
              </div>
              <div className={styles.dotsTwo}>
                <span></span>
                <span></span>
              </div>
              <div className={styles.four}>
                <Minutes />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.bottomLeftName}>
              <p>tv lift controls</p>
            </div>
            <div className={styles.down}>
              <ion-icon name="chevron-down-outline"></ion-icon>
              <p>down</p>
            </div>
            <div className={styles.stop}>
              <ion-icon name="stop-outline"></ion-icon>
              <p>stop</p>
            </div>
            <div className={styles.up}>
              <ion-icon name="chevron-up-outline"></ion-icon>
              <p>up</p>
            </div>
          </div>
          <div className={styles.bottomRight}>
            <div onClick={() => handleBox('weekdays', !weekdaysChecked)}    className={styles.weekdays}>
              <div className={styles.input}>
                <Check   check={weekdaysChecked}    />
              </div>
              <div className={styles.title}>
                <p>weekdays</p>
              </div>
            </div>
            <div  onClick={() => handleBox('weekends', !weekendsChecked)}      className={styles.weekends}>
              <div className={styles.input}>
                <Check  check={weekendsChecked}  />
              </div>
              <div className={styles.title}>
                <p>weekends</p>
              </div>
            </div>
            <div  onClick={() => handleBox('enable', !enableChecked)}    className={styles.enable}>
              <div className={styles.input}>
                <Check  check={enableChecked} />
              </div>
              <div className={styles.title}>
                <p>enable</p>
              </div>
            </div>
            <div className={styles.save}>
              <div className={styles.input}>
                <ion-icon name="save-outline"></ion-icon>
              </div>
              <div className={styles.title}>
                <p>save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
