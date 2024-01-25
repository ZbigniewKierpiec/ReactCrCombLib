import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";

import { ClickedThemeProvider } from "./Hooks/ClickedThemeProvider";
import { ItemProvider } from "./Hooks/ItemProvider";
// import { ItemProvider } from "./Hooks/ItemProvider";

import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import styles from "./App.module.scss";
import { ThemeProvider } from "./Hooks/ThemeProvider";

function App() {
  const [active, setActive] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setClickedItem(itemName);
  };

  return (
    <div className={styles.container}>
      <ThemeProvider>
        <ClickedThemeProvider>
          <ItemProvider>
            <Header />
            <SideNav
              active={active}
              setActive={setActive}
              onItemClick={handleItemClick}
            />

            <Main clickedItem={clickedItem} active={active} />

            <Footer />
          </ItemProvider>
        </ClickedThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
