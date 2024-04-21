import { useState } from "react";
import "./create-payslip.css"

interface modalUsageProps {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClaimExpense = ({ isOpen, onClose }: modalUsageProps) => {
    const [activeTab, setActiveTab] = useState("General");

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-custom">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <p className="heading">Claim Expense</p>
                    <div className="closeButton">
                        <span
                            onClick={() => onClose((prevState) => !prevState)}
                            style={{
                                fontSize: "24px",
                                color: "gray",
                                cursor: "pointer",
                            }}
                        >
                            &times;
                        </span>
                    </div>
                </div>
                <div
                    className="d-md-flex ps-3 gap-5 bg-white"
                    style={{
                        borderBottom: "2px solid #e0e0e0",
                        borderRadius: "5px",
                        paddingTop: "0.5rem",
                        color: "#BDBDBD"
                    }}
                >
                    <div
                        className="link"
                        onClick={() => handleTabClick("General")}
                        style={{
                            borderBottom: activeTab === "General" ? "2px solid #228dff" : "",
                            color: activeTab === "General" ? "#228dff" : "",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                    >
                        General
                    </div>
                    <div
                        className="link"
                        onClick={() => handleTabClick("Amount")}
                        style={{
                            borderBottom:
                                activeTab === "Amount" ? "2px solid #228dff" : "",
                            color: activeTab === "Amount" ? "#228dff" : "",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                    >
                        Amount
                    </div>
                    <div
                        className="link"
                        onClick={() => handleTabClick("Upload")}
                        style={{
                            borderBottom: activeTab === "Upload" ? "2px solid #228dff" : "",
                            color: activeTab === "Upload" ? "#228dff" : "",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                    >
                        Upload
                    </div>
                </div>

                <div className="mainContainer mt-3">
                    <div className="departmentContainer">
                        <div className="formContainer">
                            <div className="container">
                                {activeTab === "General" && (
                                    <>
                                        <span className="d-flex subheading" style={{ marginBottom: "10px" }}>General</span>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="branchName"
                                                        className="float-start mb-1"
                                                    >
                                                        Date*
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="branchName"
                                                        className="form-control"
                                                        // value={userFormData.name}
                                                        placeholder="Enter here"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="branchName"
                                                        className="float-start mb-1"
                                                    >
                                                        Type*
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label=".form-select"
                                                    >
                                                        <option value="" disabled selected>
                                                            Choose
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="branchName"
                                                        className="float-start mb-1"
                                                    >
                                                        Payment Method*
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label=".form-select"
                                                    >
                                                        <option value="" disabled selected>
                                                            Choose
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="branchName"
                                                        className="float-start mb-1"
                                                    >
                                                        Approver*
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label=".form-select"
                                                    >
                                                        <option value="" disabled selected>
                                                            Choose
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="float-start mb-1">Comment</label>
                                                    <textarea
                                                        className="form-control  placeholder-text"
                                                        style={{ borderRadius: '8px' }}
                                                        placeholder="Start typing"
                                                    // value={serviceFormData.description}
                                                    // onChange={(e) =>
                                                    //   handleInputChange("description", e.target.value)
                                                    // }
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === "Amount" && (
                                    <>
                                        <span className="d-flex subheading" style={{ marginBottom: "10px" }}>Amount</span>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label
                                                    htmlFor="departmentName"
                                                    className="float-start mb-1"
                                                    style={{
                                                        fontSize: "12px",
                                                        fontWeight: "400",
                                                        lineHeight: "16px",
                                                        fontFamily: "Roboto",
                                                    }}
                                                >
                                                    Amount without VAT*
                                                </label>
                                                <input
                                                    type="text"
                                                    id="departmentName"
                                                    className="form-control"
                                                    placeholder="Enter"
                                                    style={{
                                                        fontSize: "14px",
                                                        borderRadius: '8px',
                                                    }}

                                                />

                                            </div>
                                            <div className="col-md-2">
                                                <label
                                                    htmlFor="departmentName"
                                                    className="float-start mb-1"
                                                    style={{
                                                        fontSize: "12px",
                                                        fontWeight: "400",
                                                        lineHeight: "16px",
                                                        fontFamily: "Roboto",
                                                    }}
                                                >
                                                    Currency
                                                </label>
                                                <select
                                                    className="form-select"
                                                    style={{ borderRadius: '8px' }}
                                                    aria-label=".form-select"
                                                    id="currency"
                                                >
                                                    <option value="GBP">GBP £</option>
                                                    <option value="USD">USD $</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label
                                                    htmlFor="departmentName"
                                                    className="float-start mb-1"
                                                    style={{
                                                        fontSize: "12px",
                                                        fontWeight: "400",
                                                        lineHeight: "16px",
                                                        fontFamily: "Roboto",
                                                    }}
                                                >
                                                    VAT
                                                </label>
                                                <input
                                                    type="text"
                                                    id="departmentName"
                                                    className="form-control"
                                                    placeholder="Enter"
                                                    style={{
                                                        fontSize: "14px",
                                                        borderRadius: '8px',
                                                    }}

                                                />

                                            </div>
                                            <div className="col-md-2">
                                                <label
                                                    htmlFor="departmentName"
                                                    className="float-start mb-1"
                                                    style={{
                                                        fontSize: "12px",
                                                        fontWeight: "400",
                                                        lineHeight: "16px",
                                                        fontFamily: "Roboto",
                                                    }}
                                                >
                                                    Currency
                                                </label>
                                                <select
                                                    className="form-select"
                                                    style={{ borderRadius: '8px' }}
                                                    aria-label=".form-select"
                                                    id="currency"
                                                >
                                                    <option value="GBP">GBP £</option>
                                                    <option value="USD">USD $</option>
                                                </select>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === "Upload" && (
                                    <>
                                    <span className="d-flex subheading" style={{ marginBottom: "10px" }}>Upload</span>
                                        <div className="row mt-3">
                                            <div className="col-md-12" >
                                                <div className="form-group">
                                                    <div
                                                        className="d-flex justify-content-center uploader"
                                                        // onClick={handleUploadSelect}
                                                        style={{
                                                            cursor: "pointer",
                                                            // borderColor: isUploaderSelected ? "#228dff" : "#BDBDBD",
                                                            borderColor: "#BDBDBD",
                                                            padding: "3vw"
                                                        }}
                                                    >
                                                        <button
                                                            style={{
                                                                cursor: "pointer",
                                                                boxShadow: "none",
                                                                borderRadius: "8px",
                                                                backgroundColor: "#ffffff",
                                                                color: "#228dff",
                                                                width: "150px",
                                                                display: "flex",
                                                                justifyContent: "center"

                                                            }}
                                                            className="btn btn-outline-primary py-2"
                                                            onClick={() => { }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-up" viewBox="0 0 16 16" style={{ paddingBottom: "4px" }}>
                                                                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z" />
                                                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z" />
                                                            </svg>
                                                            &nbsp;
                                                            {"Upload"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <br />
                        <div className="btnSpace">
                            <button
                                className="btn-text btn "
                                style={{ color: "#228dff", backgroundColor: 'white' }}
                                onClick={() => {
                                    if (onClose) {
                                        onClose((prevState) => !prevState);
                                    }
                                    // if (departmentFormData) {
                                    //   resetForm();
                                    // }
                                }}
                            >
                                Cancel
                            </button>

                            <button className="btn btn-primary">
                                Claim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimExpense;
