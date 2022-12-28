import "./style.scss";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  return (
    <div>
      <h1>Current Employees</h1>

      <NavLink to="/index">Home</NavLink>
    </div>
  );
};

export default EmployeeList;
