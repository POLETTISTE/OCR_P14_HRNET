import "./style.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HRNET</h1>
      <NavLink to="/Employee-list">View Current Employees</NavLink>
    </div>
  );
};

export default Home;
