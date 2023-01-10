import "./style.scss";
import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "id",
    selector: (row) => row.id,
  },
  {
    name: "first name",
    selector: (row) => row.firstName,
  },
  {
    name: "name",
    selector: (row) => row.name,
  },
  {
    name: "start date",
    selector: (row) => row.startDate,
  },
  {
    name: "department",
    selector: (row) => row.department,
  },
  {
    name: "date of birth",
    selector: (row) => row.dateOfBirth,
  },
  {
    name: "street",
    selector: (row) => row.street,
  },
  {
    name: "city",
    selector: (row) => row.city,
  },
  {
    name: "state",
    selector: (row) => row.state,
  },
  {
    name: "zip code",
    selector: (row) => row.zipCode,
  },
];

const data = [
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
];

const Table = () => {
  return <DataTable columns={columns} data={data} />;
};

export default Table;
