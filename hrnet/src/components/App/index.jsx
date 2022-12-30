import "./style.scss";
import Nav from "../Nav/index";
import Home from "../../pages/Home/index";
import EmployeeList from "../../pages/EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/employee-list" element={<EmployeeList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
