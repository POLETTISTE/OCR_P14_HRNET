import "./style.scss";
import logo from "../../assets/logo.jpg";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo Wealth Health" className="logo" />
      <h1 className="logo-name">WEALTH HEALT</h1>
    </nav>
  );
};

export default Nav;
