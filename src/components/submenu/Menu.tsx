import { useState } from "react";
import { NavLink } from "react-router-dom";
import LA from "../../assets/svg/Arrowleft.svg";
import Employees from "../../assets/svg/Submenu 2/Employees Gray.svg";
import EmployeesBlue from "../../assets/svg/colorizedSvgs/Employees Blue.svg"
import TimeOff from "../../assets/svg/Submenu 2/Timeoff Gray.svg";
import TimeOffBlue from "../../assets/svg/colorizedSvgs/Timeoff Blue.svg"
import Training from "../../assets/svg/Submenu 2/Training Gray.svg";
import TrainingBlue from "../../assets/svg/colorizedSvgs/Training Blue.svg"
import Appraisal from "../../assets/svg/Submenu 2/Appraisals Gray.svg";
import AppraisalBlue from "../../assets/svg/colorizedSvgs/Appraisals Blue.svg"
import Asset from "../../assets/svg/Submenu 2/Assets Gray.svg";
import AssetBlue from "../../assets/svg/colorizedSvgs/Assets Blue.svg"



const Menu = () => {
  const [show, setShow] = useState(true);
  return (
    <ul
      className={`d-none d-md-flex nav flex-column flex-nowrap ${
        show ? "sidebar-right" : "sidebar-right--mobile"
      }`}
    >
      <div
        className="d-flex hide-btn gap-3"
        onClick={() => setShow((preState) => !preState)}
      >
        <img src={LA} alt="arrow" />
        <span className={`${show ? "d-block" : "d-none"}`}>hide</span>
      </div>
      <li>
        <NavLink to={"employees"} end>
          {({ isActive }) => (
            <div className="d-flex flex align-items-center gap-3">
              {!isActive ? (
                <img
                  src={Employees}
                  alt="Business Profile"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={EmployeesBlue}
                  alt="Business Profile"
                  width={"24px"}
                  height={"24px"}
                />
              )}
              <span
                className={`${show ? "iconText-right" : "d-none"} ${
                  isActive ? "active" : ""
                }`}
              >
                Employees
              </span>
            </div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to={"time-off"}>
          {({ isActive }) => (
            <div className="d-flex flex align-items-center gap-3">
              {!isActive ? (
                <img
                  src={TimeOff}
                  alt="task manager"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={TimeOffBlue}
                  alt="task manager"
                  width={"24px"}
                  height={"24px"}
                />
              )}
              <span
                className={`${show ? "iconText-right" : "d-none"} ${
                  isActive ? "active" : ""
                }`}
              >
                Time-off
              </span>
            </div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to={"services"}>
          {({ isActive }) => (
            <div className="d-flex flex align-items-center gap-3">
              {!isActive ? (
                <img
                  src={Training}
                  alt="task manager"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={TrainingBlue}
                  alt="task manager"
                  width={"24px"}
                  height={"24px"}
                />
              )}
              <span
                className={`${show ? "iconText-right" : "d-none"} ${
                  isActive ? "active" : ""
                }`}
              >
                Training
              </span>
            </div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to={"appraisal"}>
          {({ isActive }) => (
            <div className="d-flex flex align-items-center gap-3">
              {!isActive ? (
                <img
                  src={Appraisal}
                  alt="task manager"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={AppraisalBlue}
                  alt="task manager"
                  width={"24px"}
                  height={"24px"}
                />
              )}
              <span
                className={`${show ? "iconText-right" : "d-none"} ${
                  isActive ? "active" : ""
                }`}
              >
                Appraisals
              </span>
            </div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to={"role"}>
          {({ isActive }) => (
            <div className="d-flex flex align-items-center gap-3">
              {!isActive ? (
                <img
                  src={Asset}
                  alt="task manager"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={AssetBlue}
                  alt="task manager"
                  width={"24px"}
                  height={"24px"}
                />
              )}
              <span
                className={`${show ? "iconText-right" : "d-none"} ${
                  isActive ? "active" : ""
                }`}
              >
                Assets
              </span>
            </div>
          )}
        </NavLink>
      </li>
    </ul>
  );
};
export default Menu;
