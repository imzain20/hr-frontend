import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import backButton from "../../assets/png/back_button.png";
import profilePicture from "../../assets/svg/profile-pic.svg";
import Edit from "../../assets/svg/Edit.svg";
import "./selected-employee.css";
import PersonalInformation from "./personal-information";
import JobInformation from "./job-information";
import Timeoff from "./timeoff";
import Payslips from "./payslips";
import Expenses from "./expenses";
import Training from "./training";
import Appraisals from "./appraisals";
import Assets from "./assets";
import FilesAndForms from "./files-and-forms";

const SelectedEmployee = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>(profilePicture);
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(true);

  const saveinformation = () => {
    setSave(true);
    setEdit(false)
  };
  const editinformation = () => {
    setSave(false);
    setEdit(true);
    
  };
  const tabs_mob = [
    {
      name: "Personal Information",
      component: <PersonalInformation />,
    },
    {
      name: "Job Information",
      component: <JobInformation />,
    },
    {
      name: "Time-off",
      component: <Timeoff />,
    },
    {
      name: "Payslips",
      component: <Payslips />,
    },
    {
      name: "Expenses",
      component: <Expenses />,
    },
    {
      name: "Training",
      component: <Training />,
    },
    {
      name: "Appraisals",
      component: <Appraisals />,
    },
    {
      name: "Assets",
      component: <Assets />,
    },
    {
      name: "Files & Forms",
      component: <FilesAndForms />,
    },
  ];
  const [selectedOption, setSelectedOption] = useState<string>(
    tabs_mob[0].name
  );
  const [activeTab, setTab] = useState<React.ReactElement>(
    tabs_mob[0].component
  );
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  
    
    const selectedTab = tabs_mob.find((tab) => tab.name === event.target.value);
    if (selectedTab) {
      setTab(selectedTab.component);
     
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className={"flexSpaceCS"}>
        <div className="ps-3 ps-md-0">
          <div className="d-flex align-items-center mb-3 gap-2">
            <div>
              <img src={backButton} alt="Back Button" />
            </div>
            <p className={"nameText mb-0"}>Employee Name</p>
            <br />
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-4 ps-2"
        style={{ width: "95%" }}
      >
        <div>
          {image ? (
            <>
              <div className="imgBox">
                <img
                  src={image}
                  alt="Profile"
                  style={{
                    width: "90%",
                    height: "90%",
                    objectFit: "cover",
                  }}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="file-input"
                />
              </div>
            </>
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="file-input"
              />
            </>
          )}
          <br />
        </div>
        <div className="d-flex flex-column">
          <span style={{ fontSize: "20px", fontWeight: "500" }}>
            Name Surname
          </span>
          <span>
            <span style={{ color: "#4F4F4F", fontWeight: "400" }}>Role:</span>
            &nbsp; <span style={{ fontSize: "18px" }}>Regional Manager</span>
          </span>
          <span>
            <span style={{ color: "#4F4F4F", fontWeight: "400" }}>Email:</span>
            &nbsp;{" "}
            <span style={{ fontSize: "18px" }}>mark.sheeler@company.com</span>
          </span>
          <span>
            <span style={{ color: "#4F4F4F", fontWeight: "400" }}>
              Phone Number:
            </span>
            &nbsp; <span style={{ fontSize: "18px" }}>+44 567 876 4567</span>
          </span>
        </div>
        <div className="ms-auto d-flex flex-column">
          {save && (
            <button
            style={{
              cursor: "pointer",
              boxShadow: "none",
              borderRadius: "8px",
              backgroundColor: "#228dff",
              color: "#ffffff",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
            className="btn btn-outline-primary mx-2 px-3"
            onClick={editinformation}
          >
            <NavLink
              to="/hr/employees/employees/selected-employee/edit-personal-info"
              className={"links active"}
             
              end
            >
              <p style={{ color: "white", margin: 0 }}>Edit</p>
            </NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
              style={{ paddingBottom: "4px" }}
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>
          </button>
          )}
           {edit && (
            <button
            style={{
              cursor: "pointer",
              boxShadow: "none",
              borderRadius: "8px",
              backgroundColor: "#228dff",
              color: "#ffffff",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
            className="btn btn-outline-primary mx-2 px-3"
            onClick={saveinformation}
          >
            <NavLink
              to="."
              className={"links"}
              style={{ color: "white" }}
              end
            >
              <p style={{ color: "white", margin: 0 }}> Save</p>
            </NavLink>
           
          </button>
          )}
          <button
            style={{
              cursor: "pointer",
              boxShadow: "none",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              color: "black",
            }}
            className="btn btn-outline-secondary mx-2 px-3 py-2"
            onClick={() => {}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-box-arrow-up"
              viewBox="0 0 16 16"
              style={{ paddingBottom: "4px" }}
            >
              <path
                fill-rule="evenodd"
                d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z"
              />
            </svg>
            &nbsp;
            {"Export"}
          </button>
        </div>
      </div>
      <div className={"tabs bg-white"}>
        <select
          value={selectedOption}
          className="d-md-none d-inline-block w-100 ms-0 px-3"
          onChange={handleSelectChange}
          style={{
            height: "10vw",
            border: "none",
            borderTopRightRadius: "12px",
            borderTopLeftRadius: "12px",
            borderBottom: "2px solid #E0E0E0",
            position: "relative", // Add this line
            zIndex: "1",
            borderRight: "16px solid transparent",
          }}
        >
          {tabs_mob.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
        <div
          className="d-md-flex gap-1 bg-white d-none"
          style={{
            borderBottom: "2px solid #e0e0e0",
            borderRadius: "5px",
            paddingTop: "0.5rem",
            paddingLeft: "0px !Important",
          }}
        >
          <NavLink
            to="."
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
            end
          >
            Personal Information
          </NavLink>
          <NavLink
            to="job-information"
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
          >
            Job Information
          </NavLink>
          <NavLink
            to="timeoff"
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
          >
            Time-off
          </NavLink>
          <NavLink
            to="payslips"
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
          >
            Payslips
          </NavLink>
          <NavLink
            to="expenses"
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
          >
            Expenses
          </NavLink>
          <NavLink
            to="training"
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
          >
            Training
          </NavLink>
          <NavLink
            to="appraisals"
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
          >
            Appraisals
          </NavLink>
          <NavLink
            to="assets"
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
          >
            Assets
          </NavLink>
          <NavLink
            to="files-and-forms"
            className={"links"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid #228dff" : "",
                color: isActive ? "#228dff" : "",
                textAlign: "center",
                marginBottom: "-2px",
              };
            }}
          >
            Files & Forms
          </NavLink>
        </div>
        <div className="d-none d-md-block">
          <Outlet />
        </div>
        <div className="d-block bg-white d-md-none">{activeTab}</div>
      </div>
    </div>
  );
};

export default SelectedEmployee;