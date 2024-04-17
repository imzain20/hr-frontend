import { useState } from "react";
import RenderTabs from "../../../components/TabsComponent/RenderTabs";
import Search from "../../../assets/svg/Search.svg";
import Filter from "../../../assets/svg/Filter.svg";
import styles from "./work.module.scss";
import { Accordion } from "react-bootstrap";
import sortingArrows from "../../../assets/svg/Sort arrows.svg";
import KanbanGRay from "../../../assets/WorkTable/Kanban Gray.svg";
import KanbanBlue from "../../../assets/WorkTable/Kanban Blue.svg";
import TableBlue from "../../../assets/WorkTable/Table Blue.svg";
import TableGray from "../../../assets/WorkTable/Table Gray.svg";
import Kanban from "../../../components/KanbanBoard/Kanboard";
const dummyData = [
  {
    id: 1,
    jobName: "Project Alpha",
    description: "Lorem ipsum dolor sit amet",
    deadline: "2024-05-15",
    assignedTo: "John Doe",
    progress: "50%",
  },
  {
    id: 2,
    jobName: "Project Beta",
    description: "Consectetur adipiscing elit",
    deadline: "2024-06-01",
    assignedTo: "Jane Smith",
    progress: "25%",
  },
  {
    id: 3,
    jobName: "Project Gamma",
    description: "Sed do eiusmod tempor incididunt",
    deadline: "2024-04-30",
    assignedTo: "Alice Johnson",
    progress: "75%",
  },
  // Add more objects as needed
];
export default function WorkComponent() {
  const tabs = ["Jobs", "Tasks", "Analytics"];
  const [activeTab, setActiveTab] = useState("Jobs");
  return (
    <div>
      <RenderTabs
        Tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "Jobs" && <JobsComponent />}
      {activeTab === "Tasks" && <TaskComponent />}
      {activeTab === "Analytics" && <Analytics />}
    </div>
  );
}

function JobsComponent() {
  const [data, setdata] = useState<any[]>(dummyData);
  const [selectedView, setSelectedView] = useState("Table");
  return (
    <div className="d-flex bg-white py-2 CustomTable">
      <div className={styles.buttonsRow}>
        <div className={`"bg-white d-flex align-items-center"`}>
          <img className="btn" src={Search} alt="Search"></img>
          <img className="btn" src={Filter} alt="Filter"></img>
        </div>
        <div
          className={`"bg-white d-flex align-items-center"`}
          style={{ marginLeft: "40px" }}
        >
          <img
            className="btn"
            src={selectedView === "Table" ? TableBlue : TableGray}
            onClick={() => setSelectedView("Table")}
            alt="Table"
          ></img>
          <img
            className="btn"
            src={selectedView === "Kanban" ? KanbanBlue : KanbanGRay}
            onClick={() => setSelectedView("Kanban")}
            alt="Kanban"
          ></img>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <button
            className={`${styles.customButton} "btn btn-outline-primary mx-2 px-3 py-2"`}
          >
            {"Start New Job"}
          </button>
        </div>
      </div>
      {selectedView === "Table" ? (
        <Accordion>
          <Accordion.Item
            eventKey="0"
            style={{
              borderLeft: "unset",
              borderRight: "unset",
              borderTop: "unset",
            }}
          >
            <Accordion.Header>
              <div className={styles.customAccordinHeader}>
                <p>In progress</p>
                <p>21 Jobs</p>
              </div>
            </Accordion.Header>
            <Accordion.Body style={{ padding: 0 }}>
              <table className="table" style={{ marginBottom: 0 }}>
                <thead>
                  <tr>
                    <th
                      className={styles.headerText}
                      scope="col"
                      style={{ paddingLeft: "5%" }}
                    >
                      {"Job Name"}
                      <img src={sortingArrows} alt="Sorting Arrows" />
                    </th>
                    <th className={styles.headerText} scope="col">
                      Description
                    </th>

                    <th className={styles.headerText} scope="col">
                      Dead Line
                      <img src={sortingArrows} alt="Sorting Arrows" />
                    </th>
                    <th className={styles.headerText} scope="col">
                      Assigned to
                      <img src={sortingArrows} alt="Sorting Arrows" />
                    </th>
                    <th className={styles.headerText} scope="col">
                      Progress
                      <img src={sortingArrows} alt="Sorting Arrows" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td
                        className={styles.tableDataText}
                        style={{ paddingLeft: "5%" }}
                      >
                        {item.jobName}
                      </td>
                      <td className={styles.tableDataText}>
                        {item.description}
                      </td>
                      <td className={styles.tableDataText}>{item.deadline}</td>
                      <td className={styles.tableDataText}>
                        {item.assignedTo}
                      </td>
                      <td className={styles.tableDataText}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {item.progress}
                          <div
                            className="progress"
                            style={{
                              height: "15px",
                              position: "relative",
                              flex: 1,
                              marginLeft: "10px",
                            }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${40}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            style={{
              borderLeft: "unset",
              borderRight: "unset",
              borderTop: "unset",
            }}
          >
            <Accordion.Header>
              <div className={styles.customAccordinHeader}>
                <p>Completed</p>
                <p>201 Jobs</p>
              </div>
            </Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            style={{
              borderLeft: "unset",
              borderRight: "unset",
              borderTop: "unset",
            }}
          >
            <Accordion.Header>
              <div className={styles.customAccordinHeader}>
                <p>Upcoming (next 3 months)</p>
                <p>20 Jobs</p>
              </div>
            </Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Kanban />
      )}
    </div>
  );
}

const TaskComponent = () => {
  const [data, setdata] = useState<any[]>(dummyData);
  const [selectedView, setSelectedView] = useState("Table");
  return (
    <div className="d-flex bg-white py-2 CustomTable">
      <div className={styles.buttonsRow}>
        <div className={`"bg-white d-flex align-items-center"`}>
          <img className="btn" src={Search} alt="Search"></img>
          <img className="btn" src={Filter} alt="Filter"></img>
        </div>
        <div
          className={`"bg-white d-flex align-items-center"`}
          style={{ marginLeft: "40px" }}
        >
          <img
            className="btn"
            src={selectedView === "Table" ? TableBlue : TableGray}
            onClick={() => setSelectedView("Table")}
            alt="Table"
          ></img>
          <img
            className="btn"
            src={selectedView === "Kanban" ? KanbanBlue : KanbanGRay}
            onClick={() => setSelectedView("Kanban")}
            alt="Kanban"
          ></img>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <button
            className={`${styles.customButton} "btn btn-outline-primary mx-2 px-3 py-2"`}
          >
            {"New Task"}
          </button>
        </div>
      </div>
      {selectedView === "Table" ? (
        <div>
          <Accordion>
            <Accordion.Item
              eventKey="0"
              style={{
                borderLeft: "unset",
                borderRight: "unset",
                borderTop: "unset",
              }}
            >
              <Accordion.Header>
                <div className={styles.customAccordinHeader}>
                  <p>In progress</p>
                  <p>21 Jobs</p>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ padding: 0 }}>
                <table className="table" style={{ marginBottom: 0 }}>
                  <thead>
                    <tr>
                      <th
                        className={styles.headerText}
                        scope="col"
                        style={{ paddingLeft: "5%" }}
                      >
                        {"Job Name"}
                        <img src={sortingArrows} alt="Sorting Arrows" />
                      </th>
                      <th className={styles.headerText} scope="col">
                        Description
                      </th>

                      <th className={styles.headerText} scope="col">
                        Dead Line
                        <img src={sortingArrows} alt="Sorting Arrows" />
                      </th>
                      <th className={styles.headerText} scope="col">
                        Assigned to
                        <img src={sortingArrows} alt="Sorting Arrows" />
                      </th>
                      <th className={styles.headerText} scope="col">
                        Progress
                        <img src={sortingArrows} alt="Sorting Arrows" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item: any, index: number) => (
                      <tr key={index}>
                        <td
                          className={styles.tableDataText}
                          style={{ paddingLeft: "5%" }}
                        >
                          {item.jobName}
                        </td>
                        <td className={styles.tableDataText}>
                          {item.description}
                        </td>
                        <td className={styles.tableDataText}>
                          {item.deadline}
                        </td>
                        <td className={styles.tableDataText}>
                          {item.assignedTo}
                        </td>
                        <td className={styles.tableDataText}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {item.progress}
                            <div
                              className="progress"
                              style={{
                                height: "15px",
                                position: "relative",
                                flex: 1,
                                marginLeft: "10px",
                              }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${40}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              style={{
                borderLeft: "unset",
                borderRight: "unset",
                borderTop: "unset",
              }}
            >
              <Accordion.Header>
                <div className={styles.customAccordinHeader}>
                  <p>Completed</p>
                  <p>201 Jobs</p>
                </div>
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              style={{
                borderLeft: "unset",
                borderRight: "unset",
                borderTop: "unset",
              }}
            >
              <Accordion.Header>
                <div className={styles.customAccordinHeader}>
                  <p>Upcoming (next 3 months)</p>
                  <p>20 Jobs</p>
                </div>
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ) : (
        <Kanban />
      )}
    </div>
  );
};

const Analytics = () => {
  const [data, setdata] = useState<any[]>(dummyData);
  return (
    <div className="d-flex bg-white py-2 CustomTable">
      <div className={styles.buttonsRow}>
        <div className={`"bg-white d-flex align-items-center"`}>
          <img className="btn" src={Search} alt="Search"></img>
          <img className="btn" src={Filter} alt="Filter"></img>
        </div>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.leftHeaderBlock}>
          <h4>Time</h4>
          <div className={styles.leftSubBlock}>
            <div className={styles.LabelRow}>
              <label className={styles.LabelText}>Budgeted Time:</label>
              <p className={styles.labelValue}>10h</p>
            </div>
            <div className={styles.LabelRow}>
              <label className={styles.LabelText}>Logged Time:</label>
              <p className={styles.labelValue}>9h</p>
            </div>
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.Efficiency}>
            <p className={styles.ProgressLabel}>Efficiency: </p>
            <p className={styles.ProgressText}>{"90%"}</p>
          </div>
          <div
            className="progress"
            style={{
              maxHeight: "15px",
              position: "relative",
              flex: 1,
              width: "100%",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${40}%` }}
            ></div>
          </div>
        </div>
      </div>
      <table className="table" style={{ marginBottom: 0 }}>
        <thead>
          <tr>
            <th
              className={styles.headerText}
              scope="col"
              style={{ paddingLeft: "24px" }}
            >
              {"Job Name"}
              <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className={styles.headerText} scope="col">
              Job Status
            </th>

            <th className={styles.headerText} scope="col">
              Budgeted Time
              <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className={styles.headerText} scope="col">
              Actual Time
              <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
            <th className={styles.headerText} scope="col">
              Efficiency
              <img src={sortingArrows} alt="Sorting Arrows" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => (
            <tr key={index}>
              <td
                className={styles.tableDataText}
                style={{ paddingLeft: "24px" }}
              >
                {item.jobName}
              </td>
              <td className={styles.tableDataText}>{item.description}</td>
              <td className={styles.tableDataText}>{item.deadline}</td>
              <td className={styles.tableDataText}>{item.assignedTo}</td>
              <td className={styles.tableDataText}>{item.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
