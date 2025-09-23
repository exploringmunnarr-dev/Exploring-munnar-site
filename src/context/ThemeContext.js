"use client"
import { createContext, useContext, useState } from "react";
const Data = createContext();
export function DataProvider ({children}){
       

    return (
        <Data.Provider value={{}}>
            {children}
        </Data.Provider>
    )
}
export function useData (){
    return useContext(Data)
}