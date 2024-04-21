import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import { useUserState } from "../../redux/userSlice";
import { useGetTeamByBusinessIdQuery } from "../../redux/api";
import { useState, useEffect } from "react";
import "./employees-table.css";
import ManageColumns from "../../assets/svg/Managecolumns.svg";

import { useNavigate } from "react-router-dom";

interface Team {
  _id: string;
  name: string;
  description: string;
  manager: string;
  createdAt: string;
  userName: "string";
  employees: [];
  department:string [];
  branch:string[]
}

const TeamTable = () => {
  const userState = useUserState();

  const { data, refetch, isLoading } = useGetTeamByBusinessIdQuery({
    id: userState.business._id,
    token: userState.token,
  });

  useEffect(() => {
    refetch();
  }, []);
  const navigate = useNavigate();
  const isMobile = useMobile();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTeams = data?.data?.slice(startIndex, endIndex);
  console.log(paginatedTeams);

  const handleRowClick = () => {
    console.log("Row click");
    navigate("/hr/employees/employees/selected-employee");
  };

  interface Department {
    name: string;
    // other properties if any
}

interface Team {
    department?: Department | null; // Allow null as well
    // other properties if 
    branch?: { name: string };
    _id: string;
  name: string;
  description: string;
  manager: string;
  createdAt: string;
  userName: "string";
  employees: [];
}

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
                <span className="me-1">+</span> Team
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
           
            <div className="row pt-4" style={{ minWidth: "1000px" }}>
              <div
                className="col-3 columnName"
                style={{
                  paddingTop: "8px",
                  paddingBottom: "12px",
                  paddingLeft: "10vw",
                }}
              >
               team
              </div>
              <div
                className="col-2 columnName"
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Manager name
              </div>
              <div
                className="col-2 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                department name
              </div>

              <div
                className="col-2 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                branch name
              </div>

              <div
                className="col-3 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                employees
              </div>
            </div>

         

            <div style={{ minWidth: "1000px" }}>
            {paginatedTeams?.map((teams: Team) => (
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
                  <span className="ms-3">{teams.name}</span>
                </div>
                <div className="col-2">
                  <p>{teams.manager}</p>
                </div>
                <div className="col-2 ">{teams.department?.name}</div>
                <div className="col-2 "><p style={{paddingLeft:"1.5vw"}}>{teams.branch?.name}</p></div>
                {/* <div className="col-3 ">{teams.employees}</div> */}
              </div>
            ))}

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
              <div className="col-3 columnName">
                <p style={{ marginLeft: "2.8vw" }}> Team</p>
              </div>
              <div
                className="col-2 columnName"
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Manager
              </div>
              <div
                className="col-2 columnName "
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Department
              </div>
              <div
                className="col-2 columnName "
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Branch
              </div>

              <div
                className="col-3 columnName "
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Employee
              </div>
            </div>

            <div>
              {paginatedTeams?.map((teams: Team) => (
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
                    <span style={{ marginLeft: "0.5vw" }}>{teams.name}</span>
                  </div>
                  <div className="col-2">
                    <span

                    // className="ms-3"
                    >
                   {teams.manager}
                    </span>
                  </div>
              
                  <div className="col-2">
      <span>{teams.department?.name}</span> 
    </div>
                
                  
                  <div className="col-2 ">
                    <span>{teams.branch?.name}</span>
                  </div>

                  <div className="col-3 ">
                    {/* <span>Employees</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamTable;
