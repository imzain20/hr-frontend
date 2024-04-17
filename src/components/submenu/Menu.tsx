import { useState } from "react";
import { NavLink } from "react-router-dom";
import LA from "./assets/rightArrow.svg";
import RA from "./assets/leftArrow.svg";
import Supplier from "./assets/Gray/Supplier Gray.svg";
import SupplierBlue from "./assets/Blue/Supplier Blue.svg";
import Customer from "./assets/Gray/Customer Gray.svg";
import CustomerBlue from "./assets/Blue/Customer Blue.svg";

const Menu = () => {
  const [show, setShow] = useState(true);
  return (
    <ul
      className={`d-none d-md-flex nav flex-column flex-nowrap flex-shrink-0 ${
        show ? "sidebar-right" : "sidebar-right--mobile"
      }`}
    >
      <div
        className="d-flex hide-btn gap-3 "
        onClick={() => setShow((prevState) => !prevState)}
      >
        <img src={show ? LA : RA} alt="arrow" />
        <span
          className={` ${show ? "d-block" : "d-none"}`}
          style={{ fontFamily: "Roboto" }}
        >
          Hide
        </span>
      </div>
      <li>
        <NavLink to={"customers"} end>
          {({ isActive }) => (
            <div className="d-flex flex align-items-center gap-3">
              {!isActive ? (
                <img
                  src={Customer}
                  alt="Customer"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={CustomerBlue}
                  alt="Active Customer"
                  width={"24px"}
                  height={"24px"}
                />
              )}
              <span
                className={`${show ? "iconText-right" : "d-none"} ${
                  isActive ? "active" : ""
                }`}
              >
                Customers
              </span>
            </div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to={"suppliers"}>
          {({ isActive }) => (
            <div className="d-flex flex align-items-center gap-3">
              {!isActive ? (
                <img
                  src={Supplier}
                  alt="Supplier"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={SupplierBlue}
                  alt="Supplier Blue"
                  width={"24px"}
                  height={"24px"}
                />
              )}
              <span
                className={`${show ? "iconText-right" : "d-none"} ${
                  isActive ? "active" : ""
                }`}
              >
                Suppliers
              </span>
            </div>
          )}
        </NavLink>
      </li>
    </ul>
  );
};
export default Menu;
