import React, { useEffect, useRef, useState } from "react";
import styles from "./Tabs.module.scss";
import Tab from "./Tab/Tab";

const tabs = [
  { id: 1, title: "Device Status" },
  { id: 2, title: "Log" },
  { id: 3, title: "UC engines" },
];

const device = [
  {
    id: 1,
    name: "morning hey",
  },

  {
    id: 2,
    name: "meeting hey",
  },
  {
    id: 3,
    name: "demo hey",
  },
  {
    id: 4,
    name: "preset 4 hey",
  },
  {
    id: 5,
    name: "preset 5 hey",
  },
  {
    id: 6,
    name: "preset 6 hey",
  },
  {
    id: 7,
    name: "preset 7 hey",
  },

  {
    id: 8,
    name: "preset 8 hey",
  },
  {
    id: 9,
    name: "preset 9 hey",
  },
  {
    id: 10,
    name: "preset 10 hey",
  },
  {
    id: 11,
    name: "preset 11 hey",
  },
];

const ip = [
  {
    id: 1,
    name: "morning",
  },
  {
    id: 2,
    name: "meeting",
  },
  {
    id: 3,
    name: "demo",
  },
  {
    id: 4,
    name: "preset 4",
  },
  {
    id: 5,
    name: "preset 5",
  },
  {
    id: 6,
    name: "preset 6",
  },
  {
    id: 7,
    name: "preset 7",
  },
  {
    id: 8,
    name: "preset 8",
  },
  {
    id: 9,
    name: "preset 9",
  },
  {
    id: 10,
    name: "preset 10",
  },
  {
    id: 11,
    name: "preset 11",
  },
];
export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  // const [tabStyle, setTabStyle] = useState({});
  const [position, setPosition] = useState(null);
  const [tab, setTabs] = useState(tabs);
  // const [activeItem, setActiveItem] = useState(null);
  // const [width, setWidth] = useState();
  // const tabRef = useRef(null);
  // const widthRef = useRef(null);
  console.log(activeTab);

  const handleTabClick = (tabId, index) => {
    setActiveTab(tabId);
    setPosition(index);
  };

  return (
    <div className={styles.tabscontainer}>
      <div className={styles.tabs}>
        {tab.map((tab, index) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            onClick={() => handleTabClick(tab.id, index)}
            className={styles.TabBtn}
          >
            {tab.title}
          </button>
        ))}

        <div
          style={{ transform: `translateX(${position * 100 - 100}%)` }}
          className={styles.tabslider}
        ></div>
      </div>

      <div className={styles.tabcontent}>
        {activeTab === 1 && (
          <div
            className={`${styles.first} ${
              activeTab ? "animate__animated animate__fadeIn " : ""
            }   `}
          >
            <div className={styles.firstLeft}>
              <p>device status</p>

              <div className={styles.firstLeftBox}>
                {device.map((items) => {
                  return (
                    <>
                      <div key={items.id} className={styles.firstLeftBoxItems}>
                        <span>{items.name}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={styles.firstRight}>
              <p>ip table</p>

              <div className={styles.firstRightBox}>
                {ip.map((items) => {
                  return (
                    <>
                      <div className={styles.firstRightBoxItems}>
                        <span>{items.name}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div
            className={`${styles.secend}  ${
              activeTab ? "animate__animated animate__zoomIn " : ""
            } `}
          >
            <p className={styles.p}>log feedback...</p>

            <div className={styles.secendBtn}>
              <button>
                <ion-icon name="trash-outline"></ion-icon> clear
              </button>
              <button>
                {" "}
                <ion-icon name="save-outline"></ion-icon> save
              </button>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div
            className={`${styles.third}  ${
              activeTab ? "animate__animated animate__fadeIn " : ""
            }   `}
          >
            <div className={styles.thirdCenter}>
              <div className={styles.thirdCenterBox}>
                {ip.map((items) => {
                  return (
                    <>
                      <div className={styles.thirdBoxItems}>
                        <span>{items.name}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// style={{ transform: `translateX(${position * 100}%)`} }

// style={tabStyle}

{
  /* <div
            key={tab.id}
            id={`tab-${tab.id}`}
            ref={widthRef}
            className={`style.tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id, index)}
          >
            {tab.title}
          </div>  */
}
