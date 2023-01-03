import "./style.scss";
import styled from "styled-components";
import { STATES, DEPARTMENTS } from "./selectDropdowns";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  // const moment = require("moment");

  const [firstNameEmployee, setFirstNameEmployee] = useState("");
  const [lastNameEmployee, setLastNameEmployee] = useState("");
  const [birthDateEmployee, setBirthDateEmployee] = useState(new Date());
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
    <StyledForm id="form" onSubmit={onSubmit}>
      <StyledDivFormEmployeeDetails className="form-employee-details">
        <div className="form-employee-details-personnal">
          <StyledLabel htmlFor="first-name">First Name</StyledLabel>
          <StyledFormInput
            type="text"
            id="first-name"
            onChange={(e) => setFirstNameEmployee(e.target.value)}
            required
          />

          <StyledLabel htmlFor="last-name">Last Name</StyledLabel>
          <StyledFormInput
            type="text"
            id="last-name"
            onChange={(e) => setLastNameEmployee(e.target.value)}
            required
          />
          <StyledLabel htmlFor="date-of-birth">Date of Birth</StyledLabel>
          <StyledWrapperDatepicker>
            <DatePicker
              id="date-of-birth"
              selected={birthDateEmployee}
              onChange={(date) => setBirthDateEmployee(date)}
              // minDate={subDays(birthDayEmployee, 365)}
              // maxDate={moment().subtract(18, "years").format("MM-DD-YYYY")}
              // filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              // showDisabledMonthNavigation
              showYearDropdown={true}
              scrollableMonthYearDropdown={true}
              isClearable
              required
            />
          </StyledWrapperDatepicker>

          <StyledLabel htmlFor="street">Street</StyledLabel>
          <StyledFormInput
            id="street"
            type="text"
            onChange={(e) => setStreetEmployee(e.target.value)}
            required
          />

          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledFormInput
            id="city"
            type="text"
            onChange={(e) => setCityEmployee(e.target.value)}
            required
          />

          <StyledLabel htmlFor="state">State</StyledLabel>
          <StyledFormSelect
            name="state"
            id="state"
            onChange={(e) => setStateEmployee(e.target.value)}
            required>
            {STATES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </StyledFormSelect>

          <StyledLabel htmlFor="zip-code">Zip Code</StyledLabel>
          <StyledFormInput
            id="zip-code"
            type="number"
            onChange={(e) => setZipCodeEmployee(e.target.value)}
            required
          />
          {/* </fieldset> */}
        </div>
        <div className="form-employee-details-job">
          <StyledLabel htmlFor="start-date">Start Date</StyledLabel>
          <StyledWrapperDatepicker>
            <DatePicker
              id="start-date"
              selected={StartDateEmployee}
              onChange={(date) => setStartDateEmployee(date)}
              showYearDropdown={true}
              scrollableMonthYearDropdown={true}
              isClearable
              required
            />
          </StyledWrapperDatepicker>

          <StyledLabel htmlFor="department">Department</StyledLabel>
          <StyledFormSelect
            name="department"
            id="department"
            onChange={(e) => setDepartmentEmployee(e.target.value)}
            required>
            {DEPARTMENTS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </StyledFormSelect>
          <StyledButtonSubmit type="submit" value="submit" id="btn-submit">
            Save
          </StyledButtonSubmit>
        </div>
      </StyledDivFormEmployeeDetails>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: flex;
  margin-left: 10px;
  width: fit-content;
`;

const StyledDivFormEmployeeDetails = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const StyledFormInput = styled.input`
  display: flex;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 15px;
  background-color: rgb(226, 232, 227);
  font-size: 25px;
  border: none;
  border-radius: 20px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  @media (max-width: 1050px) {
    font-size: 12px;
    width: 80%;
  }
`;

const StyledFormSelect = styled.select`
  display: flex;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 15px;
  background-color: rgb(226, 232, 227);
  font-size: 25px;
  border: none;
  border-radius: 20px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  @media (max-width: 1050px) {
    font-size: 12px;
    width: 80%;
  }
`;

const StyledWrapperDatepicker = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
  }
  .react-datepicker__input-container input {
    display: flex;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 15px;
    background-color: rgb(226, 232, 227);
    font-size: 25px;
    border: none;
    border-radius: 20px;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    @media (max-width: 1050px) {
      font-size: 12px;
      width: 80%;
    }
  }
`;

const StyledButtonSubmit = styled.button`
  border-radius: 20px;
  margin: auto;
  margin-top: 80px;
  width: 200px;
  height: 50px;
  background-color: #6d8211;
  color: white;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #6d8211;
    background-color: white;
    border: 5px solid #6d8211;
    font-weight: 700;
  }
`;
