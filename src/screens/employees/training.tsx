import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import "./employees-table.css"
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import "./employees-table.css"
import { useState } from "react";

const data = [
    {
        name: "Course name",
        lessons: "12",
        description: "Small description of the course will be here Small description of the course will be here",
        deadline: "10/04/24",

    },
    {
        name: "Course name",
        lessons: "12",
        description: "Small description of the course will be here Small description of the course will be here",
        deadline: "10/04/24",

    },
    {
        name: "Course name",
        lessons: "12",
        description: "Small description of the course will be here Small description of the course will be here",
        deadline: "10/04/24",

    },
    {
        name: "Course name",
        lessons: "12",
        description: "Small description of the course will be here Small description of the course will be here",
        deadline: "10/04/24",

    },
    {
        name: "Course name",
        lessons: "12",
        description: "Small description of the course will be here Small description of the course will be here",
        deadline: "10/04/24",

    },
    {
        name: "Course name",
        lessons: "12",
        description: "Small description of the course will be here Small description of the course will be here",
        deadline: "10/04/24",

    },
];

const Training = () => {

    const [activeCoursesVisible, setActiveCoursesVisible] = useState(false);
    const [completedCoursesVisible, setCompletedCoursesVisible] = useState(false);

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
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            style={{ backgroundColor: "white" }}
                            type="button"
                            onClick={() => setActiveCoursesVisible(!activeCoursesVisible)}
                        >
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
                            &nbsp;&nbsp;
                            <span style={{ fontSize: "20px" }}>Active courses</span> <span style={{ marginLeft: "1175px" }}>5 Courses</span>
                        </button>
                    </h2>
                    {activeCoursesVisible && (
                        <div className="accordion-collapse show">
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="headerText"></th>
                                            <th className="headerText" scope="col">
                                                Course name
                                            </th>
                                            <th className="headerText" scope="col">
                                                Lessons
                                            </th>
                                            <th className="headerText" scope="col">
                                                Description
                                            </th>
                                            <th className="headerText" scope="col">
                                                Deadline
                                            </th>
                                            <th className="headerText" scope="col">
                                                progress
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
                                                <td className="tableDataText">{item.name}</td>
                                                <td className="tableDataText">{item.lessons}</td>
                                                <td className="tableDataText">{item.description}</td>
                                                <td className="tableDataText">{item.deadline}</td>
                                                <td className="tableDataText">
                                                    <div className="progress" style={{ height: "15px", position: "relative" }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>
                                                            80%
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            style={{ backgroundColor: "white" }}
                            type="button"
                            onClick={() => setCompletedCoursesVisible(!completedCoursesVisible)}
                        >
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
                            &nbsp;&nbsp;
                            <span style={{ fontSize: "20px" }}>Completed courses</span> <span style={{ marginLeft: "1130px" }}>5 Courses</span>
                        </button>
                    </h2>
                    {completedCoursesVisible && (
                        <div className="accordion-collapse show">
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="headerText"></th>
                                            <th className="headerText" scope="col">
                                                Course name
                                            </th>
                                            <th className="headerText" scope="col">
                                                Lessons
                                            </th>
                                            <th className="headerText" scope="col">
                                                Description
                                            </th>
                                            <th className="headerText" scope="col">
                                                Deadline
                                            </th>
                                            <th className="headerText" scope="col">
                                                Progress
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
                                                <td className="tableDataText">{item.name}</td>
                                                <td className="tableDataText">{item.lessons}</td>
                                                <td className="tableDataText">{item.description}</td>
                                                <td className="tableDataText">{item.deadline}</td>
                                                <td className="tableDataText">
                                                    <div className="progress" style={{ height: "15px", position: "relative" }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: "65%" }}>
                                                            65%
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Training;