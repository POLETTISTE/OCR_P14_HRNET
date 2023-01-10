import "./style.scss";
import Menu from "../../components/Menu";
import Table from "../../components/Table";

const EmployeeList = () => {
  return (
    <div className="employee-page main">
      <Menu />
      <Table />
    </div>
  );
};

export default EmployeeList;
