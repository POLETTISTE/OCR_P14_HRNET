import "./style.scss";
import Menu from "../../components/Menu";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  // const moment = require("moment");

  const [firstNameEmployee, setFirstNameEmployee] = useState("");
  const [lastNameEmployee, setLastNameEmployee] = useState("");
  const [birthDateEmployee, setBirthDateEmployee] = useState(new Date());
  console.log(birthDateEmployee);
  const [streetEmployee, setStreetEmployee] = useState("");
  const [cityEmployee, setCityEmployee] = useState("");
  const [stateEmployee, setStateEmployee] = useState("");
  const [zipCodeEmployee, setZipCodeEmployee] = useState("");
  const [StartDateEmployee, setStartDateEmployee] = useState(null);
  const [departmentEmployee, setDepartmentEmployee] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("validation saveEmployee");
  };
  return (
    <div className="home-page main">
      <Menu classText="menu-text-active" />

      <form id="form" onSubmit={onSubmit}>
        <div className="form-employee-details">
          <div className="form-employee-details-personnal">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              onChange={(e) => setFirstNameEmployee(e.target.value)}
              required
            />

            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              onChange={(e) => setLastNameEmployee(e.target.value)}
              required
            />
            <label htmlFor="date-of-birth">Date of Birth</label>
            {/* <input id="date-of-birth" type="text" required /> */}
            {/* <fieldset className="address">
              <legend>Address</legend> */}
            <DatePicker
              id="date-of-birth"
              selected={birthDateEmployee}
              onChange={(date) => setBirthDateEmployee(date)}
              // minDate={subDays(birthDayEmployee, 365)}
              // maxDate={moment().subtract(18, "years").format("MM-DD-YYYY")}
              // filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              // showDisabledMonthNavigation
              // showYearDropdown={true}
              // scrollableMonthYearDropdown
              isClearable
              required
            />

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => setStreetEmployee(e.target.value)}
              required
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCityEmployee(e.target.value)}
              required
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              onChange={(e) => setStateEmployee(e.target.value)}
              required>
              <option>Select a State</option>
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => setZipCodeEmployee(e.target.value)}
              required
            />
            {/* </fieldset> */}
          </div>
          <div className="form-employee-details-job">
            <label htmlFor="start-date">Start Date</label>
            {/* <input id="start-date" type="text" required /> */}
            <DatePicker
              id="start-date"
              selected={StartDateEmployee}
              onChange={(date) => setStartDateEmployee(date)}
              isClearable
              required
            />

            <label htmlFor="department">Department</label>
            <select
              name="department"
              id="department"
              onChange={(e) => setDepartmentEmployee(e.target.value)}
              required>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
            <button type="submit" value="submit" id="btn-submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
