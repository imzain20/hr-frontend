import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import file from "../../assets/svg/FormsFiles.svg"
import { useState } from "react";
import "./employees-table.css"
import AddFile from "./add-file";


const FilesAndForms = () => {

    const files = [
        {
            fileName: "Filename.doc",
            description: "Description of the file will be here for better understanding of the content inside"

        },
        {
            fileName: "Filename.doc",
            description: "Description of the file will be here for better understanding of the content inside"
        },
        {
            fileName: "Filename.doc",
            description: "Description of the file will be here for better understanding of the content inside"
        },
        {
            fileName: "Filename.doc",
            description: "Description of the file will be here for better understanding of the content inside"
        },
    ];

    const forms = [
        {
            fileName: "Form name",
            description: "Description of the form will be here for better understanding of the content inside"

        },
        {
            fileName: "Form name",
            description: "Description of the form will be here for better understanding of the content inside"
        },
        {
            fileName: "Form name",
            description: "Description of the form will be here for better understanding of the content inside"
        },
        {
            fileName: "Form name",
            description: "Description of the form will be here for better understanding of the content inside"
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Files");

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                className="d-md-flex ps-3 gap-4 bg-white"
                style={{
                    borderBottom: "2px solid #e0e0e0",
                    borderRadius: "5px",
                    paddingTop: "8px",
                    paddingRight: "20px",
                    paddingLeft: "20px",
                    color: "#BDBDBD"
                }}
            >
                <div
                    className="link"
                    onClick={() => handleTabClick("Files")}
                    style={{
                        borderBottom: activeTab === "Files" ? "2px solid #228dff" : "",
                        color: activeTab === "Files" ? "#228dff" : "",
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                >
                    Files
                </div>
                <div
                    className="link"
                    onClick={() => handleTabClick("Forms")}
                    style={{
                        borderBottom:
                            activeTab === "Forms" ? "2px solid #228dff" : "",
                        color: activeTab === "Forms" ? "#228dff" : "",
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                >
                    Forms
                </div>
            </div>
            {
                activeTab === "Files" && (
                    <>
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
                                            <span className="me-1">+</span> File
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="headerText"></th>
                                        <th className="headerText">File Name</th>
                                        <th className="headerText" scope="col">Description</th>
                                        <th className="headerText" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map((item: any) => (
                                        <tr key={item.name}>
                                            <td style={{ verticalAlign: "middle", paddingLeft: "20px" }}>
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
                                            <td className="tableDataText" style={{ verticalAlign: "middle" }}><img src={file} alt="formfiles" />&nbsp;{item.fileName}</td>
                                            <td className="tableDataText" style={{ verticalAlign: "middle" }}>{item.description}</td>
                                            <td className="tableDataText" style={{ color: "#228dff" }}>View <br /> <br />Download</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            }

            {
                activeTab === "Forms" && (
                    <>
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

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="headerText"></th>
                                        <th className="headerText">Form Name</th>
                                        <th className="headerText" scope="col">Description</th>
                                        <th className="headerText" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {forms.map((item: any) => (
                                        <tr key={item.name}>
                                            <td style={{ verticalAlign: "middle", paddingLeft: "20px" }}>
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
                                            <td className="tableDataText" style={{ verticalAlign: "middle" }}><img src={file} alt="formfiles" />&nbsp;{item.fileName}</td>
                                            <td className="tableDataText" style={{ verticalAlign: "middle" }}>{item.description}</td>
                                            <td className="tableDataText" style={{ color: "#228dff" }}>View <br /> <br /> Download</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            }
            <AddFile
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};

export default FilesAndForms;