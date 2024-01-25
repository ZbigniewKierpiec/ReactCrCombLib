import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ClickedThemeProvider = ({ children }) => {
  const themes = {
    default: {
      backgroundColor: "",
      textColor: "",
    },
    light: {
      backgroundColor: "#F776D4",
      textColor: "#ffffff",
    },
    dark: {
      backgroundColor: "#669B00",
      textColor: "#ffffff",
    },

    blue: {
      backgroundColor: "#204A80",
      textColor: "#ffffff",
    },
  };

  const [currentTheme, setCurrentTheme] = useState("default");

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const themeContextValue = {
    currentTheme,
    handleThemeChange,
    themeStyles: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemes = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
