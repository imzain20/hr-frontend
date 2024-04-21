

import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import "../employees/employees-table.css"

import { useNavigate } from "react-router-dom";


const AppraisalEmployeeTable = () => {
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
                className="col-2 columnName"
                style={{ paddingTop: "8px", paddingBottom: "12px" }}
               
              >
              Appraisee
              </div>
              <div
                className="col-2 columnName"
                style={{ paddingTop: "8px", paddingBottom: "12px", paddingLeft: "" }}
              >
              Appraiser
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
              Deadline
              </div>
              <div
                className="col-1 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px", paddingLeft: "5vw" }}
              >
               Assigned Date
              </div>

              <div
                className="col-2 columnName "
                style={{ paddingTop: "8px", paddingBottom: "12px", paddingLeft: "6vw" }}
              >
               Status
              </div>
<div className="col-2 coulumnName">

</div>

            </div>
            <div style={{ minWidth: "1000px" }}>
              <div className="row bg-white mt-3 me-4 roleData">
                <div className="col-2">
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
                  <span className="ms-2">Name surname</span>
                </div>
                <div className="col-2">
                  <p className="mx-4">name surname</p>
                </div>
                <div className="col-2 "><span style={{paddingLeft:"5vw"}}>department</span></div>
                <div className="col-1 "><span style={{paddingLeft:"6vw"}}>04.04.2024</span></div>
                <div className="col-1 "><span style={{paddingLeft:"6.5vw"}}>04.04.2024</span></div>
                <div className="col-2 ">
                    <span style={{color:"green" , paddingLeft:"7vw"}}>completed</span>
                </div>
                <div className="col-2">
                    <span style={{color:"#228DFF"}}>View</span>
                </div>

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
                className="col-2 columnName"

              >
                <p style={{ marginLeft: "2.8vw" }}> Appraisee</p>
              </div>
              <div
                className="col-2 columnName"
              // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
               Appraiser
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
                Deadline
              </div>
              <div
                className="col-1 columnName "
              // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
                Assigned Date
              </div>
              <div
                className="col-2 columnName "
              // style={{ paddingTop: "8px", paddingBottom: "12px" }}
              >
              <span > Status</span>
              </div>

<div className="col-2 columnName"></div>
            </div>



            <div>
              <div
                className="row bg-white me-5 pt-2 roleData"
                style={{ borderBottom: "1px solid #e9e9e9" }}
              >
                <div className="col-2">
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
                    // onClick={handleRowClick}

                  >
                   Name Surname
                  </span>
                </div>
                <div className="col-2">
                  <span

                  // className="ms-3"
                  >
                 Name Surname
                  </span>
                </div>
                <div className="col-2 ">
                  <span >
                    department name
                  </span>
                </div>

                <div className="col-1 ">
                  <span >
                    09.04.2024
                  </span>
                </div>
                <div className="col-1 ">
                  <span >
                  09.04.2024
                  </span>
                </div>
                <div className="col-2 ">
                  <span  style={{color:"#00B75F"}}>
                   Completed
                  </span>
                </div>
<div className="col-2" >
    <span  style={{color:"#228DFF" , float:"right"}}>View</span>
</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AppraisalEmployeeTable;
