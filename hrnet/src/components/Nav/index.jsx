import "./style.scss";
import logo from "../../assets/logo.avif";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="logo-name">WEALTH HEALTH</h1>
    </nav>
  );
};

export default Nav;
