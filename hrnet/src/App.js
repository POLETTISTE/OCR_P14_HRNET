import "./App.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/index" element={<Home />}></Route>
          <Route exact path="/employee-list" element={<EmployeeList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
