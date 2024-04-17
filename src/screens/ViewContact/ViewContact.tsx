import { useNavigate } from "react-router-dom";
import styles from "./view.module.scss";
import LeftArrow from "../../assets/svg/Arrowleft.svg";
import { useState } from "react";
import RenderTabs from "../../components/TabsComponent/RenderTabs";
import InformationComponent from "./components/InformationComponent";
import ConnectionsTable from "./components/ConnectionsComponent";
import ServicesTable from "./components/ServicesComponent";
import WorkComponent from "./components/WorkComponent";
import EmailComponent from "./components/EmailComponent";
export default function ViewContact() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Information");

  const Tabs: any = [
    "Information",
    "Connections",
    "Company House",
    "Services",
    "Work",
    "Emails",
    "Biling",
    "Forms",
    "Files",
    "History",
  ];
  return (
    <>
      <div className={styles.header}>
        <div className={styles.heading}>
          <img onClick={() => navigate(-1)} src={LeftArrow} alt="arrow" />
          <h3>Company name</h3>
          <div className={styles.contactStatus}>
            <p>{"Status"}</p>
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <RenderTabs
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          Tabs={Tabs}
        />
        {activeTab === "Work" && <WorkComponent />}
        {activeTab === "Information" && <InformationComponent />}
        {activeTab === "Connections" && <ConnectionsTable />}
        {activeTab === "Services" && <ServicesTable />}
        {activeTab === "Emails" && <EmailComponent />}
      </div>
      <div className={`form-group`}>
        <textarea
          className={`form-control ${styles.textArea}`}
          placeholder="Enter Comments Here"
        ></textarea>
      </div>
      <div>
        <button className={styles.CommentButton}>Comment</button>
      </div>
    </>
  );
}
