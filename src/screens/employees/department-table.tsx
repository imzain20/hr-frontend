import Search from "../../assets/svg/Search.svg";
import { useEffect, useState } from "react";
import Filter from "../../assets/svg/Filter.svg";
import ManageColumns from "../../assets/svg/Managecolumns.svg";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import { useGetDeptByBusinessIdQuery } from "../../redux/api";
import { useUserState } from "../../redux/userSlice";
import "./employees-table.css";

import { useNavigate } from "react-router-dom";
interface Department {
  _id: string;
  name: string;
  description: string;
  manager:string;
  createdAt:string;
userName:"string";
  employees: [];

}

const DepartmentTable = () => {
  const navigate = useNavigate();
  const isMobile = useMobile();
  const userState = useUserState();
  const { data, refetch,  } = useGetDeptByBusinessIdQuery({
    id: userState.business._id,
    token: userState.token,
  });

  useEffect(() => {
    refetch();
  }, []);

  const handleRowClick = () => {
    console.log("Row click");
    navigate("/hr/employees/employees/selected-employee");
  };
  ////PAGINATION////
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedDepartments = data?.data?.slice(startIndex, endIndex);
  console.log(paginatedDepartments)
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
                <span className="me-1">+</span> department
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
                Department
              </div>
              <div
                className="col-3 columnName"
                style={{ paddingTop: "8px", paddingBottom: "12px" ,paddingLeft:"4vw" }}
              >
                Manager
              </div>
              <div
                className="col-3 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Employees
              </div>

              <div
                className="col-3 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Date of Creation
              </div>
            </div>
            <div style={{ minWidth: "1000px" }}>
            {paginatedDepartments?.map((department:Department )=>(
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
                  <span className="ms-3">{department.name}</span>
                </div>
                <div className="col-3">
                  <p className="mx-4">{department.manager}</p>
                </div>
                <div className="col-3 ">
                  {/* Employees */}
                  </div>
                <div className="col-3">
                  <p
                    className="tableData d-flex"
                    style={{  cursor: "pointer" , paddingLeft:"4vw" }}
                  >
                 {new Date(department.createdAt).toLocaleDateString()}
                  </p>
                </div>
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
                marginLeft: "25px",
              }}
            >
              <div
                className="col-3 columnName"
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Department
              </div>
              <div
                className="col-3 columnName"
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Manager
              </div>
              <div
                className="col-3 columnName offset-1"
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Employees
              </div>
              <div className="col-2 columnName ">
                <p > Date of Creation</p>
              </div>
            </div>



            <div>
            {paginatedDepartments?.map((department:Department )=>(
               <div
               key={department._id}
               className="row bg-white me-4 pt-2 roleData"
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
                   }}
                 />
                 <span
                   // className="ms-3"
                   style={{ marginLeft: "19px" }}
                 >
                  {department.name}
                 </span>
               </div>
               <div className="col-3">
                 <span
                   style={{ marginLeft: "22px" }}
                   // className="ms-3"
                 >
                  {department.manager}
                 </span>
               </div>
               {/* {(department.employees || []).map((employee:Department) => ( */}
    <div className="col-3 offset-1">
        <span style={{ marginLeft: "3px" }}>
            {/* {employee.userName} */}
        </span>
    </div>
{/* ))} */}

              
               <div className="col-2">
                 <p
                   className="tableData d-flex"
                   style={{ cursor: "pointer" }}
                 >
                  <span>{new Date(department.createdAt).toLocaleDateString()}</span>
                 </p>
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

export default DepartmentTable;
