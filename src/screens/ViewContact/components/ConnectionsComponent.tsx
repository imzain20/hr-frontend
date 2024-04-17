import Search from "../../../assets/svg/Search.svg";
import Filter from "../../../assets/svg/Filter.svg";
import sortingArrows from "../../../assets/svg/Sort arrows.svg";
import styles from "./connection.module.scss";
import { useState } from "react";

const ConnectionsTable = () => {
  const businesses = [
    {
      BusinessName: "XYZCorp",
      CompanyType: "Partnership",
      NumberOfEmployees: "50-200",
      NatureOfConnection: "CustomerCare",
      NatureOfBusiness: "Marketing",
    },
    {
      BusinessName: "JKLInc",
      CompanyType: "SoleProprietorship",
      NumberOfEmployees: "1-10",
      NatureOfConnection: "SalesPerson",
      NatureOfBusiness: "PublicRelations",
    },
  ];
  const [data, setdata] = useState<any[]>(businesses);
  return (
    <div className="d-flex bg-white py-2 CustomTable">
      <div
        className={`${styles.buttonsRow} "bg-white d-flex align-items-center"`}
      >
        <img className="btn" src={Search} alt="Search"></img>
        <img className="btn" src={Filter} alt="Filter"></img>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th
              className={styles.headerText}
              scope="col"
              style={{ paddingLeft: "20px" }}
            >
              Business Name <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className={styles.headerText} scope="col">
              Company Type
            </th>

            <th className={styles.headerText} scope="col">
              Number of Employees
              <img src={sortingArrows} alt="Sorting Arrows" />
            </th>

            <th className={styles.headerText} scope="col">
              Nature of connection
            </th>
            <th className={styles.headerText} scope="col">
              Nature of business
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => (
            <tr key={index}>
              <td
                className={styles.tableDataText}
                style={{ paddingLeft: "20px" }}
              >
                {item.BusinessName}
              </td>
              <td className={styles.tableDataText}>{item.CompanyType}</td>
              <td className={styles.tableDataText}>{item.NumberOfEmployees}</td>
              <td className={styles.tableDataText}>
                {item.NatureOfConnection}
              </td>
              <td className={styles.tableDataText}>{item.NatureOfBusiness}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConnectionsTable;
