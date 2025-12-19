"use client";
import { createContext, useContext, useState } from "react";
const Data = createContext();
export function DataProvider({ children }) {
  const [stayType, setStayType] = useState([]);
  const [activeTab, setActiveTab] = useState("cab")

  return (
    <Data.Provider value={{ stayType, setStayType, activeTab, setActiveTab }}>{children}</Data.Provider>
  );
}
export function useData() {
  return useContext(Data);
}
