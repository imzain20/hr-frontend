import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import ManageColumns from "../../assets/svg/Managecolumns.svg";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import sortingArrows from "../../assets/svg/Sort arrows.svg";
import "./service-table.css";
import { useNavigate } from "react-router-dom";
const data = [
  {
    Supplier: "Name of the contact",
    name: "Name Surname",
    status: "Live",
    type: "Individual",
    location: "City, Country",
    email: "email@cinqd.com",
    phone: "+39 123 123 12 12",
    corner: "Name Surname",
  },
  {
    Supplier: "ABC Company",
    name: "Name Surname",
    status: "Live",
    type: "Business",
    location: "City, Country",
    email: "email@cinqd.com",
    phone: "+39 123 123 12 12",
    corner: "Name Surname",
  },
];

const Table = () => {
  const navigate = useNavigate();
  const isMobile = useMobile();
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
          </div>
          {isMobile ? (
            <button
              className="btn"
              onClick={() => {}}
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
            <div className="buttonRow">
              <button
                className="btn btn-outline-primary mx-2 px-3 py-2 customButton"
                onClick={() => {
                  navigate("/CRM/import-contacts");
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 15.2044L4 18.8925C4 19.4514 4.21071 19.9875 4.58579 20.3827C4.96086 20.778 5.46957 21 6 21H18C18.5304 21 19.0391 20.778 19.4142 20.3827C19.7893 19.9875 20 19.4514 20 18.8925V15.2044M12.0011 3V14.9425M12.0011 14.9425L16.5725 10.3793M12.0011 14.9425L7.42969 10.3793"
                    stroke="#228DFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {"Import"}
              </button>
              <button
                className="btn btn-outline-primary px-3 py-2 customButton"
                onClick={() => {
                  navigate("/CRM/create-contact");
                }}
              >
                {"Add Contact"}
              </button>
            </div>
          )}
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th className="headerText"></th>
            <th className="headerText" scope="col">
              Supplier <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className="headerText" scope="col">
              Contact Name
            </th>
            <th className="headerText" scope="col">
              Contact Status
            </th>
            <th className="headerText" scope="col">
              Contact Type <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className="headerText" scope="col">
              Location <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className="headerText" scope="col">
              Email
            </th>
            <th className="headerText" scope="col">
              Phone Number
            </th>
            <th className="headerText" scope="col">
              Contact Owner <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.name}>
              <td style={{ paddingLeft: "20px" }}>
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
              </td>
              <td
                className="tableDataText"
                onClick={() => {
                  navigate("/CRM/view-contact");
                }}
              >
                {item.Supplier}
              </td>
              <td className="tableDataText">{item.name}</td>
              <td className="tableDataText">{item.status}</td>
              <td className="tableDataText">{item.type}</td>
              <td className="tableDataText">{item.location}</td>
              <td className="tableDataText">{item.email}</td>
              <td className="tableDataText">{item.phone}</td>
              <td className="tableDataText">{item.corner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
