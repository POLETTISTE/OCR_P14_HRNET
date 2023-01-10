import { createContext, useState } from "react";
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

const fakeData = [
  {
    id: "63bd6fc341dfd64dfe8acd35",
    firstName: "Georgette",
    name: "Blackburn",
    startDate: "10-12-2015",
    department: "Marketing",
    dateOfBirth: "01-08-1986",
    street: "825 Roder Avenue",
    city: "Sabillasville",
    state: "Texas",
    zipCode: 21656,
  },
  {
    id: "63bd6fc36c29bb980e6d115e",
    firstName: "Howe",
    name: "Gibson",
    startDate: "11-28-2016",
    department: "Marketing",
    dateOfBirth: "04-10-1980",
    street: "215 Monument Walk",
    city: "Faywood",
    state: "Delaware",
    zipCode: 89756,
  },
  {
    id: "63bd6fc337d49d6b4dd82b94",
    firstName: "Brandie",
    name: "Ortega",
    startDate: "01-27-2013",
    department: "Marketing",
    dateOfBirth: "10-12-1980",
    street: "411 Nassau Avenue",
    city: "Churchill",
    state: "Nevada",
    zipCode: 47408,
  },
  {
    id: "63bd6fc35e71856cd8e50bb8",
    firstName: "Wendy",
    name: "Garrett",
    startDate: "10-01-2018",
    department: "Marketing",
    dateOfBirth: "10-08-1978",
    street: "608 Beard Street",
    city: "Dunlo",
    state: "Idaho",
    zipCode: 82982,
  },
  {
    id: "63bd6fc34dadaf07a2aebb1e",
    firstName: "Lambert",
    name: "Clay",
    startDate: "10-03-2020",
    department: "Marketing",
    dateOfBirth: "03-04-1971",
    street: "844 Leonora Court",
    city: "Greenbush",
    state: "Connecticut",
    zipCode: 53830,
  },
  {
    id: "63bd6fc33b393049cff6203c",
    firstName: "Pamela",
    name: "Bishop",
    startDate: "03-31-2012",
    department: "Marketing",
    dateOfBirth: "11-03-1979",
    street: "651 Village Road",
    city: "Coinjock",
    state: "Washington",
    zipCode: 83960,
  },
  {
    id: "63bd6fc31d499aff1a900389",
    firstName: "Dee",
    name: "Stanton",
    startDate: "01-03-2013",
    department: "Marketing",
    dateOfBirth: "07-20-1983",
    street: "708 Johnson Avenue",
    city: "Libertytown",
    state: "American Samoa",
    zipCode: 76037,
  },
];
