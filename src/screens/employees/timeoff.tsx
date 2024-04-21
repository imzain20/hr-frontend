import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import "./employees-table.css"
import { useState } from "react";
import RequestTimeoff from "./request-timeoff";


const data = [
    {
        submitted: "01.09.2024",
        type: "Annual Time Off 2024",
        compensation: "paid",
        start: "01.12.2024",
        end: "01.18.2024",
        duration: "7 days",
        status: "submitted"
    },
    {
        submitted: "02.26.2024",
        type: "Sick Leave",
        compensation: "unpaid",
        start: "02.27.2024",
        end: "02.27.2024",
        duration: "1 day",
        status: "approved"
    },
    {
        submitted: "03.01.2024",
        type: "Sick Leave",
        compensation: "paid",
        start: "03.01.2024",
        end: "03.04.2024",
        duration: "4 days",
        status: "approved"
    },
    {
        submitted: "03.18.2024",
        type: "Public Holiday",
        compensation: "paid",
        start: "03.18.2024",
        end: "03.19.2024",
        duration: "2 days",
        status: "approved"

    },
];


const Timeoff = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <div className="d-flex align-items-center bg-white buttonsRow">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-column">
                        <br />
                        <span style={{ fontWeight: "500" }}>Time-off</span>
                        <span><span style={{ color: "#bdbdbd" }}>Total:</span>&nbsp; 22   &nbsp;&nbsp;<span style={{ color: "#bdbdbd" }}>Used:</span>&nbsp; 10     &nbsp;&nbsp;<span style={{ color: "#bdbdbd" }}>Left:</span>&nbsp; 12</span>
                    </div>
                    <br />
                    <div className="d-flex flex-column">
                        <span style={{ fontWeight: "500" }}>Roll-over</span>
                        <span><span style={{ color: "#bdbdbd" }}>Available:</span> &nbsp;5</span>
                    </div>
                    <br />
                </div>
                <div style={{ width: "40%", position: "relative" }}>
                    <div className="progress" style={{ height: "10px" }}>
                        <div
                            className="progress-bar"
                            style={{ width: "40%" }}
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                        <span
                            style={{
                                position: "absolute",
                                left: "0",
                                top: "-20px",
                                fontSize: "14px"
                            }}
                        >
                            <span style={{ color: "#bdbdbd" }}>Left:</span> 12
                        </span>
                        <span
                            style={{
                                position: "absolute",
                                right: "0",
                                top: "-20px",
                                fontSize: "14px"
                            }}
                        >
                            <span style={{ color: "#bdbdbd" }}>Used:</span>10
                        </span>
                    </div>
                </div>
            </div>
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
                            <button
                                style={{ cursor: "pointer", boxShadow: "none", outline: "none", borderRadius: '8px' }}
                                className="btn btn-outline-primary px-3 py-2"
                                onClick={() => openModal()}
                            >
                                <span className="me-1">+</span> Request time-off
                            </button>
                        </div>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="headerText"></th>
                            <th className="headerText">Submitted on</th>
                            <th className="headerText" scope="col">
                                Time-off type
                            </th>
                            <th className="headerText" scope="col">
                                Compensation
                            </th>
                            <th className="headerText" scope="col">
                                Start
                            </th>
                            <th className="headerText" scope="col">
                                End
                            </th>
                            <th className="headerText" scope="col">
                                Duration
                            </th>
                            <th className="headerText" scope="col">
                                Status
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
                                <td className="tableDataText">{item.submitted}</td>
                                <td className="tableDataText">{item.type}</td>
                                <td className="tableDataText">{item.compensation}</td>
                                <td className="tableDataText">{item.start}</td>
                                <td className="tableDataText">{item.end}</td>
                                <td className="tableDataText">{item.duration}</td>
                                <td className="tableDataText" style={{ color: item.status === "submitted" ? "orange" : "#00c04b" }}>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <RequestTimeoff
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};

export default Timeoff;