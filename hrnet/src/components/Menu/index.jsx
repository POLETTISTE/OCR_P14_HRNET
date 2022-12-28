import "./style.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/" className="menu-text">
        Create Employee
      </NavLink>
      <NavLink to="/employee-list" className="menu-text">
        View Employee List
      </NavLink>
    </div>
  );
};

export default Menu;
