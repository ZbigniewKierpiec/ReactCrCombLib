/* eslint-disable react/prop-types */
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
// import { useTheme } from './ThemeProvider';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bodyRef = useRef(document.body);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = bodyRef.current;
    body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const theme = {
    isDarkMode,
    toggleMode,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
