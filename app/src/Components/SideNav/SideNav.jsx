/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./SideNav.module.scss";
import "animate.css";
import { useTheme } from "./../../Hooks/ThemeProvider";
import { useItemContext } from "../../Hooks/ItemProvider";

const links = [
  {
    id: 1,
    icon: "home-outline",
    name: "home",
  },

  {
    id: 2,
    icon: "tv-outline",
    name: "display",
  },
  {
    id: 3,
    icon: "scale-outline",
    name: "flip-tops",
  },
  {
    id: 4,
    icon: "bulb-outline",
    name: "lighting",
  },
  {
    id: 5,
    icon: "archive-outline",
    name: "shades",
  },
  {
    id: 6,
    icon: "flash-outline",
    name: "power",
  },
  {
    id: 7,
    icon: "apps-outline",
    name: "matrix",
  },
  {
    id: 8,
    icon: "settings-outline",
    name: "settings",
  },
];
export default memo = function SideNav({ active, setActive, onItemClick }) {
  const [items, setItems] = useState(links);
  const [activeItem, setActiveItem] = useState(null); // Set the default active item
  const [position, setPosition] = useState(null);
  const { handleItemClickName } = useItemContext();

  const { isDarkMode, toggleMode } = useTheme();

  function handleItemClick(item, index) {
    // console.log(item);
    setActiveItem(items?.[index]?.name);
    // setPosition(index);
    requestAnimationFrame(() => setPosition(index));
  }

  function handleActiveBurger() {
    // setActive((previousActiveState) => !previousActiveState);
    requestAnimationFrame(() => {
      setActive((previousActiveState) => !previousActiveState);
    });
  }

  return (
    <>
      <div
        className={`${styles.navigation} ${active ? styles.activeNav : ""}   ${
          isDarkMode ? styles.darkmode : ""
        }`}
      >
        <ul className={`${styles.ul}`}>
          {/* <div className="burger">
        <ion-icon name="menu-outline"></ion-icon>
        </div>   */}

          <div
            onClick={handleActiveBurger}
            className={`${styles.burger} ${active ? styles.activeBurger : ""} ${
              isDarkMode ? styles.darkmode : ""
            }   `}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </div>

          <li
            style={{ transform: `translateY(${position * 100}%)` }}
            className={`${styles.slide} ${isDarkMode ? styles.darkmode : ""}`}
          >
            <b
              className={`${styles.b} ${isDarkMode ? styles.darkmode : ""} `}
            ></b>
            <b
              className={`${styles.b}  ${isDarkMode ? styles.darkmode : ""}  `}
            ></b>
            <a
              className={`${styles.a}  ${isDarkMode ? styles.darkmode : ""}   `}
              href="#"
            >
              <span className={styles.icon}>
                {/* <ion-icon name="home-outline"></ion-icon> */}
              </span>
              <span className={styles.title}></span>
            </a>
          </li>

          {items.map((data, index) => (
            <li
              onClick={() => {
                handleItemClick(data.name, index);
                handleItemClickName(data.name);
              }}
              className={`${styles.li} ${isDarkMode ? styles.darkmode : ""}  ${
                activeItem === data.name ? styles.active : ""
              }  `}
              key={data.id}
            >
              <a className={styles.a} href="#">
                <span
                  className={`${styles.icon} ${
                    isDarkMode ? styles.darkmode : ""
                  }  `}
                >
                  <ion-icon name={data.icon}></ion-icon>
                </span>
                <span
                  className={`${styles.title} ${
                    isDarkMode ? styles.darkmode : ""
                  }   ${
                    active
                      ? `${styles.active} animate__animated animate__fadeInRight animate__slow  animate__delay-1s	 `
                      : "animate__animated animate__fadeOutRight  animate__faster"
                  }`}
                >
                  {data.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
