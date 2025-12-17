"use client";
import { createContext, useContext, useState } from "react";
const Data = createContext();
export function DataProvider({ children }) {
  const [stayType, setStayType] = useState([]);

  return (
    <Data.Provider value={{ stayType, setStayType }}>{children}</Data.Provider>
  );
}
export function useData() {
  return useContext(Data);
}
