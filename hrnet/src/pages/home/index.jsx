import "./style.scss";
import Menu from "../../components/Menu";

const Home = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("validation saveEmployee");
  };
  return (
    <div className="home-page main">
      <Menu classText="menu-text-active" />

      <form id="form" onSubmit={onSubmit}>
        <div className="form-employee-details">
          <div className="form-employee-details-personnal">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" required />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" required />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="text" required />
            {/* <fieldset className="address">
              <legend>Address</legend> */}

            <label htmlFor="street">Street</label>
            <input id="street" type="text" required />

            <label htmlFor="city">City</label>
            <input id="city" type="text" required />

            <label htmlFor="state">State</label>
            <select name="state" id="state" required></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" required />
            {/* </fieldset> */}
          </div>
          <div className="form-employee-details-job">
            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="text" required />

            <label htmlFor="department">Department</label>
            <select name="department" id="department" required>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
            <button type="submit" value="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
