/* eslint-disable react/prop-types */
import React, { useEffect, useReducer } from "react";
import styles from "./Main.module.scss";
import Home from "../Home/Home";
import { useItemContext } from "../../Hooks/ItemProvider";

import Display from "../Display/Display";
import FlipTops from "../Flip-Tops/FlipTops";
import Lighting from "../Lighting/Lighting";
import Shades from "../Shades/Shades";
import Power from "../Power/Power";
import Matrix from "../Matrix/Matrix";
import Settings from "../Settings/Settings";
// Define action types
const SET_HOME = "SET_HOME";
const SET_DISPLAY = "SET_DISPLAY";
const SET_FLIPTOPS = "SET_FLIPTOPS";
const SET_LIGHTING = "SET_LIGHTING";
const SET_SHADES = "SET_SHADES";
const SET_POWER = "SET_POWER";
const SET_MATRIX = "SET_MATRIX";
const SET_SETTINGS = "SET_SETTINGS";
const SET_OTHER_COMPONENT = "SET_OTHER_COMPONENT";

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case SET_HOME:
      return { component: <Home /> };
    case SET_DISPLAY:
      return { component: <Display /> };
    case SET_FLIPTOPS:
      return { component: <FlipTops /> };
    case SET_LIGHTING:
      return { component: <Lighting /> };
    case SET_SHADES:
      return { component: <Shades /> };
    case SET_POWER:
      return { component: <Power /> };
    case SET_MATRIX:
      return { component: <Matrix /> };
    case SET_SETTINGS:
      return { component: <Settings /> };

    default:
      // If no specific case matches, return the default home component
      return { component: <Home /> };
  }
};












export default function Main({ active }) {
  const { clickedItem } = useItemContext();
  console.log(clickedItem);
//   // Use useReducer hook with an initial state of the Home component
  const [state, dispatch] = useReducer(reducer, { component: <FlipTops /> });

//   // Dispatch an action based on the clickedItem
  React.useEffect(() => {
    switch (clickedItem) {
      case "home":
        dispatch({ type: SET_HOME });
        break;
      case "display":
        dispatch({ type: SET_DISPLAY });
        break;
      case "flip-tops":
        dispatch({ type: SET_FLIPTOPS });
        break;
      case "lighting":
        dispatch({ type: SET_LIGHTING });
        break;
      case "shades":
        dispatch({ type: SET_SHADES });
        break;
      case "power":
        dispatch({ type: SET_POWER });
        break;
      case "matrix":
        dispatch({ type: SET_MATRIX });
        break;
      case "settings":
        dispatch({ type: SET_SETTINGS });
        break;
      default:
        // If no specific case matches, dispatch the default case
        dispatch({ type: <Home /> });
        break;
    }
  }, [clickedItem]);

  const { component } = state;

  return (
    <main className={`${styles.main} ${active ? styles.active : ""}   `}>
      {component}
    </main>
  );
}
