import "./style.scss";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { EmployeeContext } from "../../utils/context";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validations";
import { STATES, DEPARTMENTS } from "./selectDropdowns";
import Modal from "../Modal";

const Form = () => {
  const { control, register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const formOnSubmit = (data) => {
    console.log(data);

    setData(data);
    setModal(true);
    reset();
  };

  // const formatDate = (date) => {
  //   const year = date.getFullYear();
  //   const month = ("0" + date.getMonth() + 1).slice(-2);
  //   let day = ("0" + date.getDate()).slice(-2);

  //   return `${month}/${day}/${year}`;
  // };

  function handleClickBtnModal(e) {
    e.preventDefault();
    setModal(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit(formOnSubmit)}>
      <div className="form-employee-details">
        <div className="form-employee-details-personnal">
          <label htmlFor="first-name">First Name</label>
          <input
            {...register("firstName")}
            name="firstName"
            type="text"
            id="first-name"
            placeholder="ex: Paul"
          />
          <small className="text-danger">{errors.firstName?.message}</small>

          <label htmlFor="last-name">Last Name</label>
          <input
            {...register("lastName")}
            name="lastName"
            type="text"
            id="last-name"
            placeholder="ex: MacCoyle"
          />
          <small className="text-danger">{errors.lastName?.message}</small>

          <label htmlFor="date-of-birth">Date of Birth</label>
          <div>
            <Controller
              control={control}
              type="text"
              name="dateOfBirth"
              render={({ field }) => (
                <DatePicker
                  id="date-of-birth"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  showYearDropdown={true}
                  scrollableMonthYearDropdown={true}
                  format="MM/dd/yyyy"
                />
              )}
            />
            <small className="text-danger">{errors.dateOfBirth?.message}</small>
          </div>

          <label htmlFor="street">Street</label>
          <input
            {...register("street")}
            name="street"
            id="street"
            type="text"
            placeholder="ex: 123 Sunny Road"
          />
          <small className="text-danger">{errors.street?.message}</small>

          <label htmlFor="city">City</label>
          <input
            {...register("city")}
            name="city"
            id="city"
            type="text"
            placeholder="ex: Los Angeles"
          />
          <small className="text-danger">{errors.city?.message}</small>

          <label htmlFor="state">State</label>

          <select {...register("state")} name="state" id="state">
            <option disabled={false} value="">
              --
            </option>
            {STATES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <small className="text-danger">{errors.state?.message}</small>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            {...register("zipCode")}
            name="zipCode"
            id="zip-code"
            type="text"
            pattern="[0-9]*"
            placeholder="ex:90210"
          />
          <small className="text-danger">{errors.zipCode?.message}</small>

          {/* </fieldset> */}
        </div>

        <div className="form-employee-details-job">
          <label htmlFor="start-date">Start Date</label>
          <div>
            <Controller
              control={control}
              type="text"
              name="startDate"
              render={({ field }) => (
                <DatePicker
                  id="start-date"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  showYearDropdown={true}
                  scrollableMonthYearDropdown={true}
                  format="MM/dd/yyyy"
                />
              )}
            />
            <small className="text-danger">{errors.startDate?.message}</small>
          </div>

          <label htmlFor="department">Department</label>
          <select {...register("department")} name="department" id="department">
            <option disabled={false} value="" className="placeholder">
              --
            </option>
            {DEPARTMENTS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <small className="text-danger">{errors.department?.message}</small>
        </div>
      </div>

      {modal ? (
        <Modal onclick={handleClickBtnModal} />
      ) : (
        <button type="submit" value="submit" id="btn-submit">
          Save
        </button>
      )}
    </form>
  );
};

export default Form;
