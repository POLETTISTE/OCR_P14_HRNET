import "./style.scss";
import styled from "styled-components";
import { STATES, DEPARTMENTS } from "./selectDropdowns";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validationSchema } from "./validations";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  // const moment = require("moment");

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("validation saveEmployee");
    console.log(data);
    reset();
  };

  const [firstNameEmployee, setFirstNameEmployee] = useState("");
  const [lastNameEmployee, setLastNameEmployee] = useState("");
  const [birthDateEmployee, setBirthDateEmployee] = useState(new Date());
  const [streetEmployee, setStreetEmployee] = useState("");
  const [cityEmployee, setCityEmployee] = useState("");
  const [stateEmployee, setStateEmployee] = useState("");
  const [zipCodeEmployee, setZipCodeEmployee] = useState("");
  const [StartDateEmployee, setStartDateEmployee] = useState(null);
  const [departmentEmployee, setDepartmentEmployee] = useState("");

  return (
    <StyledForm id="form" onSubmit={handleSubmit(onSubmit)}>
      <StyledDivFormEmployee className="form-employee-details">
        <div className="form-employee-details-personnal">
          <StyledLabel htmlFor="first-name">First Name</StyledLabel>
          <StyledFormInput
            {...register("name")}
            name="name"
            type="text"
            id="first-name"
            onChange={(e) => setFirstNameEmployee(e.target.value)}
          />
          <small className="text-danger">{errors.name?.message}</small>

          <StyledLabel htmlFor="last-name">Last Name</StyledLabel>
          <StyledFormInput
            type="text"
            id="last-name"
            onChange={(e) => setLastNameEmployee(e.target.value)}
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
            />
          </StyledWrapperDatepicker>

          <StyledLabel htmlFor="street">Street</StyledLabel>
          <StyledFormInput
            id="street"
            type="text"
            onChange={(e) => setStreetEmployee(e.target.value)}
          />

          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledFormInput
            id="city"
            type="text"
            onChange={(e) => setCityEmployee(e.target.value)}
          />

          <StyledLabel htmlFor="state">State</StyledLabel>
          <StyledFormSelect
            name="state"
            id="state"
            onChange={(e) => setStateEmployee(e.target.value)}>
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
            />
          </StyledWrapperDatepicker>

          <StyledLabel htmlFor="department">Department</StyledLabel>
          <StyledFormSelect
            name="department"
            id="department"
            onChange={(e) => setDepartmentEmployee(e.target.value)}>
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
      </StyledDivFormEmployee>
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

const StyledDivFormEmployee = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledFormInput = styled.input``;

const StyledFormSelect = styled.select``;

const StyledWrapperDatepicker = styled.div``;

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
  @media (max-width: 900px) {
    margin-bottom: 10px;
    width: 100px;
  }
`;
