import React from "react";
import styles from "./Settings.module.scss";
import { useItemContext } from "../../Hooks/ItemProvider";
import Tabs from "./Tabs/Tabs";
export default function Settings() {
  const { clickedItem } = useItemContext();
  let active = true;
  return (
    <div
      className={`${styles.box}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      <Tabs/>
    </div>
  );
}
