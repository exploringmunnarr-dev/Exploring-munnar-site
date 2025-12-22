"use client";
import { createContext, useContext, useState } from "react";
const Data = createContext();
export function DataProvider({ children }) {
  const [stayType, setStayType] = useState([]);
  const [activeTab, setActiveTab] = useState("cab");
    const [loation, setLocation] = useState([]);
  

  return (
    <Data.Provider value={{ stayType, setStayType, activeTab, setActiveTab, loation, setLocation }}>{children}</Data.Provider>
  );
}
export function useData() {
  return useContext(Data);
}
