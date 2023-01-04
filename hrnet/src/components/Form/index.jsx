import "./style.scss";
import styled from "styled-components";

import Modal from "../Modal";

import { STATES, DEPARTMENTS } from "./selectDropdowns";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { validationSchema } from "./validations";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const { control, register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const [birthDateEmployee, setBirthDateEmployee] = useState(new Date());
  const [StartDateEmployee, setStartDateEmployee] = useState(new Date());
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const formOnSubmit = (data) => {
    // console.log("validation saveEmployee");
    // console.log(data);
    setData(data);
    setModal(true);
    reset();
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ("0" + date.getMonth() + 1).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return `${month}/${day}/${year}`;
  };

  // console.log(formatDate(new Date()));

  function handleClickBtnModal(e) {
    e.preventDefault();
    // console.log("Le lien a été cliqué.");
    setModal(false);
  }

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
          <StyledTextDanger className="text-danger">
            {errors.firstName?.message}
          </StyledTextDanger>

          <StyledLabel htmlFor="last-name">Last Name</StyledLabel>
          <StyledFormInput
            {...register("lastName")}
            name="lastName"
            type="text"
            id="last-name"
          />
          <StyledTextDanger className="text-danger">
            {errors.lastName?.message}
          </StyledTextDanger>

          <StyledLabel htmlFor="date-of-birth">Date of Birth</StyledLabel>
          <StyledWrapperDatepicker>
            <Controller
              control={control}
              type="text"
              name="dateOfBirth"
              render={({ field }) => (
                <DatePicker
                  id="date-of-birth"
                  onChange={(date) =>
                    setBirthDateEmployee(formatDate(date)) +
                    field.onChange(date)
                  }
                  selected={field.value}
                  showYearDropdown={true}
                  scrollableMonthYearDropdown={true}
                  format="MM/dd/yyyy"
                />
              )}
            />
            <StyledTextDanger className="text-danger">
              {errors.dateOfBirth?.message}
            </StyledTextDanger>
          </StyledWrapperDatepicker>

          <StyledLabel htmlFor="street">Street</StyledLabel>
          <StyledFormInput
            {...register("street")}
            name="street"
            id="street"
            type="text"
          />
          <StyledTextDanger className="text-danger">
            {errors.street?.message}
          </StyledTextDanger>

          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledFormInput
            {...register("city")}
            name="city"
            id="city"
            type="text"
          />
          <StyledTextDanger className="text-danger">
            {errors.city?.message}
          </StyledTextDanger>

          <StyledLabel htmlFor="state">State</StyledLabel>
          <StyledFormSelect {...register("state")} name="state" id="state">
            {STATES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </StyledFormSelect>
          <StyledTextDanger className="text-danger">
            {errors.state?.message}
          </StyledTextDanger>

          <StyledLabel htmlFor="zip-code">Zip Code</StyledLabel>
          <StyledFormInput
            {...register("zipCode")}
            name="zipCode"
            id="zip-code"
            type="number"
          />
          <StyledTextDanger className="text-danger">
            {errors.zipCode?.message}
          </StyledTextDanger>

          {/* </fieldset> */}
        </div>

        <div className="form-employee-details-job">
          <StyledLabel htmlFor="start-date">Start Date</StyledLabel>
          <StyledWrapperDatepicker>
            <Controller
              control={control}
              type="text"
              name="startDate"
              render={({ field }) => (
                <DatePicker
                  id="start-date"
                  onChange={(date) =>
                    setStartDateEmployee(formatDate(date)) +
                    field.onChange(date)
                  }
                  selected={field.value}
                  showYearDropdown={true}
                  scrollableMonthYearDropdown={true}
                  format="MM/dd/yyyy"
                />
              )}
            />
            <StyledTextDanger className="text-danger">
              {errors.startDate?.message}
            </StyledTextDanger>
          </StyledWrapperDatepicker>

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
          <StyledTextDanger className="text-danger">
            {errors.department?.message}
          </StyledTextDanger>
        </div>
      </StyledDivFormEmployee>

      {modal ? (
        <Modal onclick={handleClickBtnModal} />
      ) : (
        <StyledButtonSubmit type="submit" value="submit" id="btn-submit">
          Save
        </StyledButtonSubmit>
      )}
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
  margin-top: 20px;
  margin-bottom: 40px;
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

const StyledTextDanger = styled.small`
  display: flex;
  margin-left: 10px;
  width: fit-content;
  color: red;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    justify-content: flex-start;
    font-size: 12px;
    width: 150px;
  }
`;
