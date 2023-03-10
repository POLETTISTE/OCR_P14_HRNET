import "./style.scss";
import { useState } from "react";
import DataTable from "react-data-table-component";
// const formatDate = (date) => {
//   const year = date.getFullYear();
//   const month = ("0" + date.getMonth() + 1).slice(-2);
//   let day = ("0" + date.getDate()).slice(-2);

//   return `${month}/${day}/${year}`;
// };

const columns = [
  {
    name: "id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "first name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "start date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: "department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "date of birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: "city",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "state",
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: "zip code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

const dataEmployee = [
  {
    id: "63bd78e4e1aed45546354f3d",
    firstName: "Welch",
    name: "Allison",
    startDate: "09-28-2022",
    department: "Marketing",
    dateOfBirth: "10-20-1979",
    street: "376 Delmonico Place",
    city: "Kennedyville",
    state: "Oklahoma",
    zipCode: 55387,
  },
  {
    id: "63bd78e40e0bdb44db488d6b",
    firstName: "Mcmahon",
    name: "Chan",
    startDate: "12-31-2021",
    department: "Marketing",
    dateOfBirth: "03-27-1980",
    street: "537 Orange Street",
    city: "Carbonville",
    state: "Tennessee",
    zipCode: 46570,
  },
  {
    id: "63bd78e4484f044ea1e954cc",
    firstName: "Lilly",
    name: "Harper",
    startDate: "08-20-2014",
    department: "Marketing",
    dateOfBirth: "04-14-1982",
    street: "906 Devoe Street",
    city: "Weogufka",
    state: "Missouri",
    zipCode: 66304,
  },
  {
    id: "63bd78e48e3b68817ff0c63e",
    firstName: "Sanchez",
    name: "Monroe",
    startDate: "03-03-2016",
    department: "Marketing",
    dateOfBirth: "04-15-1977",
    street: "354 Falmouth Street",
    city: "Moscow",
    state: "Mississippi",
    zipCode: 63000,
  },
  {
    id: "63bd78e47bea4ee13c1b6082",
    firstName: "Alyssa",
    name: "Kim",
    startDate: "05-06-2012",
    department: "Marketing",
    dateOfBirth: "08-03-1978",
    street: "309 Scholes Street",
    city: "Deltaville",
    state: "Ohio",
    zipCode: 74118,
  },
  {
    id: "63bd78e4b83e94db1cd5df2f",
    firstName: "Wilcox",
    name: "Reeves",
    startDate: "07-07-2019",
    department: "Marketing",
    dateOfBirth: "01-22-1975",
    street: "724 Central Avenue",
    city: "Drummond",
    state: "New Mexico",
    zipCode: 61430,
  },
  {
    id: "63bd78e47ac0e76a3d532517",
    firstName: "Carver",
    name: "Dunn",
    startDate: "05-17-2013",
    department: "Marketing",
    dateOfBirth: "12-20-1976",
    street: "212 Verona Street",
    city: "Cazadero",
    state: "Alabama",
    zipCode: 43226,
  },
  {
    id: "63bd78e4e576b30ca2e27eb0",
    firstName: "Dominguez",
    name: "Mccray",
    startDate: "08-29-2020",
    department: "Marketing",
    dateOfBirth: "09-28-1978",
    street: "831 Wyckoff Avenue",
    city: "Takilma",
    state: "Delaware",
    zipCode: 85677,
  },
  {
    id: "63bd78e4383c7168305278e9",
    firstName: "Franco",
    name: "Lynn",
    startDate: "08-12-2015",
    department: "Marketing",
    dateOfBirth: "02-06-1988",
    street: "814 Degraw Street",
    city: "Hardyville",
    state: "Arizona",
    zipCode: 99808,
  },
  {
    id: "63bd78e4497f710701fa0e71",
    firstName: "Dixon",
    name: "Rosa",
    startDate: "02-21-2012",
    department: "Marketing",
    dateOfBirth: "07-02-1979",
    street: "250 Reed Street",
    city: "Chloride",
    state: "Marshall Islands",
    zipCode: 84069,
  },
  {
    id: "63bd78e4b2767702a0574120",
    firstName: "Foster",
    name: "Kelley",
    startDate: "03-20-2017",
    department: "Marketing",
    dateOfBirth: "08-18-1985",
    street: "302 Hill Street",
    city: "Kersey",
    state: "Louisiana",
    zipCode: 22231,
  },
  {
    id: "63bd78e4e32ef4a6fd4943c6",
    firstName: "Karyn",
    name: "Barron",
    startDate: "04-07-2014",
    department: "Marketing",
    dateOfBirth: "10-23-1981",
    street: "272 Coffey Street",
    city: "Dixie",
    state: "Georgia",
    zipCode: 81715,
  },
];

const Table = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = dataEmployee.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.startDate.includes(search) ||
      item.department.toLowerCase().includes(search.toLowerCase()) ||
      item.dateOfBirth.includes(search) ||
      item.street.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase()) ||
      item.state.toLowerCase().includes(search.toLowerCase()) ||
      item.zipCode.toString().includes(search.toString())
  );

  return (
    <>
      <label htmlFor="search">
        Search employee:
        <input id="search" type="text" onChange={handleSearch} />
      </label>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        className="table"
      />
    </>
  );
};

export default Table;
