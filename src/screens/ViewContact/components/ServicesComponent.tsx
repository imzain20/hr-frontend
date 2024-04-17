import Search from "../../../assets/svg/Search.svg";
import Filter from "../../../assets/svg/Filter.svg";
import sortingArrows from "../../../assets/svg/Sort arrows.svg";
import styles from "./services.module.scss";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import RenderTabs from "../../../components/TabsComponent/RenderTabs";
import CloseIcon from "../../../assets/Close icon.svg";
import ReactQuill from "react-quill";
import "./quill.css";

const ServicesTable = () => {
  const serviceData = [
    {
      ServiceName: "Basic Support",
      Description: "Lorem ipsum dolor sit amet...",
      ServiceFees: "£00,000",
      BillingFrequency: "Weekly",
      StartDate: "DD.MM.YYYY",
      EndDate: "DD.MM.YYYY",
    },
    {
      ServiceName: "Standard Support",
      Description: "Lorem ipsum dolor sit amet...",
      ServiceFees: "£00,000",
      BillingFrequency: "Monthly",
      StartDate: "DD.MM.YYYY",
      EndDate: "", // Empty string for an open-ended end date
    },
    {
      ServiceName: "Premium Support",
      Description: "Lorem ipsum dolor sit amet...",
      ServiceFees: "£00,000",
      BillingFrequency: "Weekly",
      StartDate: "DD.MM.YYYY",
      EndDate: "DD.MM.YYYY",
    },
    {
      ServiceName: "Advanced Support",
      Description: "Lorem ipsum dolor sit amet...",
      ServiceFees: "£00,000",
      BillingFrequency: "Yearly",
      StartDate: "DD.MM.YYYY",
      EndDate: "", // Empty string for an open-ended end date
    },
    {
      ServiceName: "Enterprise Support",
      Description: "Lorem ipsum dolor sit amet...",
      ServiceFees: "£00,000",
      BillingFrequency: "Monthly",
      StartDate: "DD.MM.YYYY",
      EndDate: "DD.MM.YYYY",
    },
  ];
  const [modalShow, setModalShow] = useState(false);
  const handleCreateModal = () => {
    setModalShow(false);
  };
  const [data, setdata] = useState<any[]>(serviceData);
  return (
    <div className="d-flex bg-white py-2 CustomTable">
      <div className={styles.buttonsRow}>
        <div className={`"bg-white d-flex align-items-center"`}>
          <img className="btn" src={Search} alt="Search"></img>
          <img className="btn" src={Filter} alt="Filter"></img>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <button
            className={`${styles.customButton} "btn btn-outline-primary mx-2 px-3 py-2"`}
            onClick={() => {
              setModalShow(true);
            }}
          >
            {"Manage"}
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th
              className={styles.headerText}
              scope="col"
              style={{ paddingLeft: "20px" }}
            >
              Service Name <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className={styles.headerText} scope="col">
              Description
            </th>

            <th className={styles.headerText} scope="col">
              Service fees
              <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className={styles.headerText} scope="col">
              Billing Frequency
              <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className={styles.headerText} scope="col">
              Start Date
              <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className={styles.headerText} scope="col">
              End Date
              <img src={sortingArrows} alt="Sorting Arrows" />
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
                {item.ServiceName}
              </td>
              <td className={styles.tableDataText}>{item.Description}</td>
              <td className={styles.tableDataText}>{item.ServiceFees}</td>
              <td className={styles.tableDataText}>{item.BillingFrequency}</td>
              <td className={styles.tableDataText}>{item.StartDate}</td>
              <td className={styles.tableDataText}>{item.EndDate}</td>
              <td className={styles.EditButton}>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CreateServiceModel show={modalShow} onHide={() => handleCreateModal()} />
    </div>
  );
};

export default ServicesTable;
interface RenderFormProps {
  onHide: any;
  show: any;
}

const CreateServiceModel: React.FC<RenderFormProps> = (props: any) => {
  const Tabs = ["Service", "Billing Schedule"];
  const [activeTab, setActiveTab] = useState("Service");
  return (
    <Modal dialogClassName={styles.modalCustom} {...props} centered>
      <RenderTabs
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        Tabs={Tabs}
      />
      {activeTab === "Service" && <CreateServiceTab onHide={props.onHide} />}
      {activeTab === "Billing Schedule" && (
        <BillingSchedule onHide={props.onHide} />
      )}

      <div className={styles.footerButtons}>
        <button onClick={props.onHide} className={styles.cancelButton}>
          Cancel
        </button>
        <button onClick={props.onHide} className={styles.SaveButton}>
          Save
        </button>
      </div>
    </Modal>
  );
};

function Editor() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
  ];

  const [code, setCode] = useState("");
  const handleProcedureContentChange = (
    content: any,
    delta: any,
    source: any,
    editor: any
  ) => {
    setCode(content);
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  return (
    <>
      {console.log(code)}
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
    </>
  );
}

const CreateServiceTab = (props: any) => {
  return (
    <div className={styles.modalBody}>
      <div className={styles.headerRow}>
        <p className={styles.modalheader}>{"Name of the service"}</p>
        <img
          style={{ width: "40px", height: "40px", alignSelf: "flex-end" }}
          src={CloseIcon}
          alt="Close"
          onClick={props.onHide}
        />
      </div>
      <p className={styles.subHeader}>General Information</p>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="input" className={styles.labelStyle}>
            Price
          </label>
          <input
            id="input"
            type="text"
            className={`form-control ${styles.inputStyle}`}
            placeholder={"Enter Here"}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="drop-down" className={styles.labelStyle}>
            Currency
          </label>
          <select
            className={`form-select ${styles.inputStyle}`}
            id="drop-down"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            {/* {data?.data?.options?.map((option: any) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  })} */}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="input" className={styles.labelStyle}>
            Quantity
          </label>
          <input
            id="input"
            type="number"
            className={`form-control ${styles.inputStyle}`}
            placeholder={"Enter Here"}
          />
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="drop-down" className={styles.labelStyle}>
            Currency
          </label>
          <select
            className={`form-select ${styles.inputStyle}`}
            id="drop-down"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option key={"1"} value={"VAT"}>
              {"VAT"}
            </option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="input" className={styles.labelStyle}>
            Discount
          </label>
          <input
            id="input"
            type="text"
            className={`form-control ${styles.inputStyle}`}
            placeholder={"Enter Here"}
          />
        </div>
      </div>
      <div className={styles.TotalRow}>
        <p className={styles.TotalText}>Total</p>
        <p className={styles.TotalText}>{"$ 2000"}</p>
      </div>
      <div className={styles.DescriptionContainer}>
        <p className={styles.description}>Description</p>
        <Editor />
      </div>
    </div>
  );
};

const BillingSchedule = (props: any) => {
  return (
    <div className={styles.modalBody}>
      <div className={styles.headerRow}>
        <p className={styles.modalheader}>{"Edit Billing Rules"}</p>
        <img
          style={{ width: "40px", height: "40px", alignSelf: "flex-end" }}
          src={CloseIcon}
          alt="Close"
          onClick={props.onHide}
        />
      </div>
      <p className={styles.subHeader}>General Information</p>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="drop-down" className={styles.labelStyle}>
            Billing Frequency
          </label>
          <select
            className={`form-select ${styles.inputStyle}`}
            id="drop-down"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option key={"1"} value={"Monthly"}>
              {"Monthly"}
            </option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="drop-down" className={styles.labelStyle}>
            Billing On
          </label>
          <select
            className={`form-select ${styles.inputStyle}`}
            id="drop-down"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option key={"1"} value={"Acceptance"}>
              {"Acceptance"}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
