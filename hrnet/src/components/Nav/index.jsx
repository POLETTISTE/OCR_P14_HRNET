import "./style.scss";
import logo from "../../assets/logo.jpg";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo Wealth Health" className="logo" />
    </nav>
  );
};

export default Nav;
