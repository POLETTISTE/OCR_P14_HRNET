import "./style.scss";
import styled from "styled-components";
import { STATES, DEPARTMENTS } from "./selectDropdowns";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validationSchema } from "./validations";
import { useForm } from "react-hook-form";
// import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  // const moment = require("moment");

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const formOnSubmit = (data) => {
    console.log("validation saveEmployee");
    console.log(data);
    reset();
  };

  // const [firstNameEmployee, setFirstNameEmployee] = useState("");
  // const [lastNameEmployee, setLastNameEmployee] = useState("");
  // const [birthDateEmployee, setBirthDateEmployee] = useState(new Date());
  // const [streetEmployee, setStreetEmployee] = useState("");
  // const [cityEmployee, setCityEmployee] = useState("");
  // const [stateEmployee, setStateEmployee] = useState("");
  // const [zipCodeEmployee, setZipCodeEmployee] = useState("");
  // const [StartDateEmployee, setStartDateEmployee] = useState(new Date());
  // const [departmentEmployee, setDepartmentEmployee] = useState("");

  return (
    <StyledForm id="form" onSubmit={handleSubmit(formOnSubmit)}>
      <StyledDivFormEmployee className="form-employee-details">
        <div className="form-employee-details-personnal">
          <StyledLabel htmlFor="first-name">First Name</StyledLabel>
          <StyledFormInput
            {...register("firstName")}
            name="firstName"
            type="text"
            id="first-name"
          />
          <small className="text-danger">{errors.firstName?.message}</small>

          <StyledLabel htmlFor="last-name">Last Name</StyledLabel>
          <StyledFormInput
            {...register("lastName")}
            name="lastName"
            type="text"
            id="last-name"
          />
          <small className="text-danger">{errors.lastName?.message}</small>

          {/* <StyledLabel htmlFor="date-of-birth">Date of Birth</StyledLabel>
          <StyledWrapperDatepicker>
            <DatePicker
              {...register("dateOfBirth")}
              name="dateOfBirth"
              id="date-of-birth"
              selected={birthDateEmployee}
              onChange={(e) => setBirthDateEmployee(e.target.value)}
              // minDate={subDays(birthDayEmployee, 365)}
              // maxDate={moment().subtract(18, "years").format("MM-DD-YYYY")}
              // filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              // showDisabledMonthNavigation
              showYearDropdown={true}
              scrollableMonthYearDropdown={true}
            />
            <small className="text-danger">{errors.dateOfBirth?.message}</small>
          </StyledWrapperDatepicker> */}

          <StyledLabel htmlFor="street">Street</StyledLabel>
          <StyledFormInput
            {...register("street")}
            name="street"
            id="street"
            type="text"
          />
          <small className="text-danger">{errors.street?.message}</small>

          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledFormInput
            {...register("city")}
            name="city"
            id="city"
            type="text"
          />
          <small className="text-danger">{errors.city?.message}</small>

          <StyledLabel htmlFor="state">State</StyledLabel>
          <StyledFormSelect {...register("state")} name="state" id="state">
            {STATES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </StyledFormSelect>
          <small className="text-danger">{errors.state?.message}</small>

          <StyledLabel htmlFor="zip-code">Zip Code</StyledLabel>
          <StyledFormInput
            {...register("zipCode")}
            name="zipCode"
            id="zip-code"
            type="number"
          />
          <small className="text-danger">{errors.zipCode?.message}</small>

          {/* </fieldset> */}
        </div>

        <div className="form-employee-details-job">
          {/* <StyledLabel htmlFor="start-date">Start Date</StyledLabel>
          <StyledWrapperDatepicker>
            <DatePicker
              {...register("startDate")}
              name="startDate"
              id="start-date"
              selected={StartDateEmployee}
              onChange={(date) => setStartDateEmployee(date)}
              showYearDropdown={true}
              scrollableMonthYearDropdown={true}
            />
            <small className="text-danger">{errors.startDate?.message}</small>
          </StyledWrapperDatepicker> */}

          <StyledLabel htmlFor="department">Department</StyledLabel>
          <StyledFormSelect
            {...register("department")}
            name="department"
            id="department">
            {DEPARTMENTS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </StyledFormSelect>
          <small className="text-danger">{errors.department?.message}</small>
        </div>
        <StyledButtonSubmit type="submit" value="submit" id="btn-submit">
          Save
        </StyledButtonSubmit>
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
