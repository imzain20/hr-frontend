import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import ManageColumns from "../../assets/svg/Managecolumns.svg";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import "./employees-table.css"

import { useNavigate } from "react-router-dom";


const EmployeesTable = () => {
  const navigate = useNavigate();
  const isMobile = useMobile();



  const handleRowClick = () => {
    console.log("Row click")
    navigate("/hr/employees/employees/selected-employee");
  };



  return (
    <div className="d-flex bg-white py-2 CustomTable">
      <div className="bg-white d-flex align-items-center buttonsRow">
        <input
          className="form-check-input mt-0"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
          style={{
            cursor: "pointer",
            boxShadow: "none",
            outline: "none",
            width: "20px",
            height: "20px",
          }}
        />
        <div className=" d-flex gap-1 ">
          <div>
            <img className="btn" src={Search} alt="Search"></img>
            <img className="btn" src={Filter} alt="Filter"></img>

            {!isMobile && (
              <img className="btn" src={ManageColumns} alt="Manage"></img>
            )}

            {isMobile ? (
              <button
                className="btn"
                // onClick={() => openModal()}
                style={{
                  color: "#228dff",
                  fontSize: 35,
                  fontWeight: "50",
                  cursor: "pointer",
                  boxShadow: "none",
                  outline: "none",
                }}
              >
                <span className="me-1">+</span>
              </button>
            ) : (
              <button
                style={{
                  cursor: "pointer",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: "8px",
                }}
                className="btn btn-outline-primary px-3 py-2"
              // onClick={() => openModal()}
              >
                <span className="me-1">+</span> Employees
              </button>
            )}
          </div>
        </div>
      </div>

      {isMobile ? (
        <>
          <div
            className="bg-white ps-3"
            style={{ overflowX: "auto", minHeight: "60vh" }}
          >
            <div
              className="row pt-4"
              style={{ paddingLeft: "1.9rem", minWidth: "1000px" }}
            >
              <div
                className="col-3 columnName"
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
               
              >
                Employee
              </div>
              <div
                className="col-3 columnName"
                style={{ paddingTop: "8px", paddingBottom: "12px", paddingLeft: "4vw" }}
              >
                Contact
              </div>
              <div
                className="col-2 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Department
              </div>

              <div
                className="col-1 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px", paddingLeft: "4vw" }}
              >
                Role
              </div>
              <div
                className="col-1 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px", paddingLeft: "5vw" }}
              >
                team
              </div>

              <div
                className="col-2 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px", paddingLeft: "6vw" }}
              >
                Manger
              </div>


            </div>
            <div style={{ minWidth: "1000px" }}>
              <div className="row bg-white mt-3 me-4 roleData">
                <div className="col-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                    style={{
                      cursor: "pointer",
                      boxShadow: "none",
                      outline: "none",
                    }}
                  />
                  <span className="ms-3">Employee name</span>
                </div>
                <div className="col-3">
                  <p className="mx-4">abdullah@gmail.com</p>
                </div>
                <div className="col-2 ">department</div>
                <div className="col-1 ">Role</div>
                <div className="col-1 ">team</div>
                <div className="col-2 ">manager</div>

              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white ps-3" style={{ minHeight: "60vh" }}>
            <div
              className="row me-5"
              style={{
                paddingTop: "8px",
                paddingBottom: "12px",

              }}
            >
              <div
                className="col-3 columnName"

              >
                <p style={{ marginLeft: "2.8vw" }}> Employee</p>
              </div>
              <div
                className="col-3 columnName"
              // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Contact
              </div>
              <div
                className="col-2 columnName "
              // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Department
              </div>
              <div
                className="col-1 columnName "
              // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Role
              </div>
              <div
                className="col-1 columnName "
              // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                team
              </div>
              <div
                className="col-2 columnName "
              // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Manager
              </div>

            </div>



            <div>
              <div
                className="row bg-white me-5 pt-2 roleData"
                style={{ borderBottom: "1px solid #e9e9e9" }}
              >
                <div className="col-3">
                  <input
                    className="form-check-input mt-1"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                    style={{
                      cursor: "pointer",
                      boxShadow: "none",
                      outline: "none",
                      marginLeft: "1.5vw",

                    }}
                  />
                  <span
                    style={{ marginLeft: "0.5vw" }}
                    onClick={handleRowClick}

                  >
                    Employee name
                  </span>
                </div>
                <div className="col-3">
                  <span

                  // className="ms-3"
                  >
                    abdullah@gmail.com
                  </span>
                </div>
                <div className="col-2 ">
                  <span >
                    department name
                  </span>
                </div>

                <div className="col-1 ">
                  <span >
                    Role
                  </span>
                </div>
                <div className="col-1 ">
                  <span >
                    team
                  </span>
                </div>
                <div className="col-2 ">
                  <span >
                    Manager
                  </span>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeesTable;
