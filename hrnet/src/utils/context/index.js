import { createContext, useEffect, useState } from "react";
import { fakeData } from "../data/fakeData";
export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [list, setList] = useState(fakeData);

  const addEmployee = (employee) => {
    setList([...list, employee]);
    // localStorage.setItem("list", JSON.stringify([...list, employee]));
    console.log(list);
  };

  // useEffect(() => {
  //   const employees = JSON.parse(localStorage.getItem("list"));
  //   if (employees) {
  //     setList(employees);
  //   }
  // }, []);

  return (
    <EmployeeContext.Provider value={{ list, setList, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
