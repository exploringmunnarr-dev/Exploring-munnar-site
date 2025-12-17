"use client";
import { createContext, useContext, useState } from "react";

const FormData = createContext();
export function FormDataProvider({ children }) {

  const [itnearyFormData, setItnearyFormData] = useState({
    fullName: "",
    mobileNumber: "",
    mailId: "",
    comingFrom: "",
    contactMethod: "",
    startDate: "",
    endDate: "",
    adult: "",
    child: "",
    nightStays: "",
    typeOfGroup: "",
    hotelRequired: "",
    roomBudget: "",
    roomsRequired: "",
    taxiType: "",
    taxiRequirement: "",
    carCategory: "",
    routes: [],
  });
  console.log("itneary form data : ", itnearyFormData);
  return (
    <FormData.Provider
      value={{
        setItnearyFormData,
        itnearyFormData,
       
      }}
    >
      {" "}
      {children}{" "}
    </FormData.Provider>
  );
}

export function useFormData() {
  return useContext(FormData);
}
