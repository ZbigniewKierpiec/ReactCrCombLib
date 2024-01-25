/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [clickedItem, setClickedItem] = useState("");

  const handleItemClickName = (itemName) => {
    setClickedItem(itemName);
  };

  return (
    <ItemContext.Provider value={{ clickedItem, handleItemClickName }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  return useContext(ItemContext);
};
