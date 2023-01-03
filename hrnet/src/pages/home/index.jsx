import "./style.scss";
import Menu from "../../components/Menu";
import Form from "../../components/Form";

const Home = () => {
  return (
    <div className="home-page main">
      <Menu classText="menu-text-active" />
      <Form />
    </div>
  );
};

export default Home;
