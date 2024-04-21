import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import ManageColumns from "../../assets/svg/Managecolumns.svg";
import { useGetBranchesByBusinessIdQuery } from "../../redux/api";
import { useUserState } from "../../redux/userSlice";
import { useEffect , useState} from "react";


import "./employees-table.css"

import { useNavigate } from "react-router-dom";
interface Branch {
  _id: string;
  name: string;
  description: string;
  manager:string;
  createdAt:string;
userName:"string";
  employees: [];

}

const BranchesTable = () => {
  const userState = useUserState();
    const navigate = useNavigate();
    const isMobile = useMobile();

    const { data, refetch, isLoading } = useGetBranchesByBusinessIdQuery({
      id: userState.business._id,
      token: userState.token,
    });
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      refetch(); // Fetch data when the component mounts
    }, []); // Empty dependency array ensures that this effect runs only once on mount


      ////PAGINATION////
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedbranches = data?.data?.slice(startIndex, endIndex);

    const handleRowClick = () => {
        console.log("Row click")
        navigate("/hr/employees/employees/selected-employee");
    };

console.log(paginatedbranches)

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
                <span className="me-1">+</span> branches
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
                className="col-6 columnName"
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
              Branch
              </div>
              <div
                className="col-3 columnName"
                style={{ paddingTop: "8px", paddingBottom: "12px" , paddingLeft:"7vw" }}
              >
                Manager
              </div>
              <div
                className="col-3 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px" , paddingLeft:"5vw" }}
              >
                Employees
              </div>

              
            </div>
            <div style={{ minWidth: "1000px" }}>
            {paginatedbranches?.map((branches:Branch)=>(
              <div className="row bg-white mt-3 me-4 roleData">
                <div className="col-6">
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
                  <span className="ms-3">{branches.name}</span>
                </div>
                <div className="col-3">
                  <p className="mx-4">{branches.manager}</p>
                </div>
                {/* <div className="col-3 ">Employees</div> */}
               
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
              <div
                className="col-6 columnName"
              
              >
              <p style={{marginLeft:"2.8vw"}}> Branch</p>
              </div>
              <div
                className="col-3 columnName"
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Manager
              </div>
              <div
                className="col-3 columnName "
                // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Employees
              </div>
             
            </div>



            <div>
              {paginatedbranches?.map((branches:Branch)=>(
                <div   className="row bg-white me-5 pt-2 roleData"
                   style={{ borderBottom: "1px solid #e9e9e9" }}
                 >
                   <div className="col-6">
                     <input
                       className="form-check-input mt-1"
                       type="checkbox"
                       value=""
                       aria-label="Checkbox for following text input"
                       style={{
                         cursor: "pointer",
                         boxShadow: "none",
                         outline: "none",
                         marginLeft:"1.5vw",
                         
                       }}
                     />
                     <span
                       style={{marginLeft:"0.5vw"}}
                      
                     >
                    {branches.name}
                     </span>
                   </div>
                   <div className="col-3">
                     <span
                       
                       // className="ms-3"
                     >
                       {branches.manager}
                     </span>
                   </div>
                   <div className="col-3 ">
                     <span >
                       {/* Render employees here */}employees
                     </span>
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

export default BranchesTable;
