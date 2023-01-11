import { createContext, useState } from "react";
import { fakeData } from "../data/fakeData";
export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [list, setList] = useState(fakeData);

  const addEmployee = (employee) => {
    setList([...list, employee]);
  };
  return (
    <EmployeeContext.Provider value={{ list, setList, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
