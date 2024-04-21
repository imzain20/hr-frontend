import React, { useState } from "react";
import axios from "axios";
import file from "../../assets/svg/FormsFiles.svg"
import { toast } from "react-toastify";
import { useUserState } from "../../redux/userSlice";
import "./create-payslip.css"

interface modalUsageProps {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreatePayslip = ({ isOpen, onClose }: modalUsageProps) => {

    const userState = useUserState();
    const [payslipFormData, setPayslipFormData] = useState({
        startDate: "",
        endDate: "",
        paymentDate: "",
        amount: "",
        currency: "",
    });

    const [attachment, setAttachment] = useState();

    const handleInputChange = (fieldName: string, value: any) => {
        setPayslipFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: any = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAttachment(file)
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCreatePayslip = async () => {
        if (attachment) {
            try {
                const formData = new FormData();
                formData.append("attachment", attachment);
                formData.append("startDate", payslipFormData.startDate);
                formData.append("endDate", payslipFormData.endDate);
                formData.append("paymentDate", payslipFormData.paymentDate);
                formData.append("amount", payslipFormData.amount);
                formData.append("currency", payslipFormData.currency);
                formData.append("businessId", userState.business._id);
                formData.append("userId", "6576c4068cd36a5d5dbe610a"); //To be replaced by the selected emp ID later
                
                const res = await axios.post(
                    `https://backend-b.cinqd.com/payslip/create-payslip`,
                    // `http://localhost:87/payslip/create-payslip`,
                    formData,
                    {
                        headers: {
                            "auth-token": userState.token,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                if (res.status === 200) {
                    toast.success("Payslip Added", {
                        position: "top-right",
                    });
                    onClose((prevState) => !prevState);
                } else {
                    toast.error("Failed to add payslip", {
                        position: "top-right",
                    });
                }
            } catch (error) {
                toast.error("Something went wrong", {
                    position: "top-right",
                });
            }
        }

    };

    const resetForm: any = () => {
        setPayslipFormData({
            startDate: "",
            endDate: "",
            paymentDate: "",
            amount: "",
            currency: "",
        });
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
                    <p className="heading">Add Payslip</p>
                    <div className="closeButton">
                        <span
                            onClick={() => {
                                resetForm();
                                onClose((prevState) => !prevState)
                            }}
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

                <div className="mainContainer">
                    <div className="departmentContainer">
                        <div className="formContainer">
                            <div className="container">
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <br />
                                        <span className="d-flex subheading" style={{ marginBottom: "10px" }}>Period</span>
                                        <div className="form-group input-container">
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
                                                Start Date*
                                            </label>
                                            <input
                                                type="date"
                                                id="departmentName"
                                                className="form-control"
                                                value={payslipFormData.startDate}
                                                style={{
                                                    fontSize: "14px",
                                                    borderRadius: '8px',
                                                }}
                                                onChange={(e) =>
                                                    handleInputChange("startDate", e.target.value)
                                                }
                                            />
                                            <br />
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
                                                End Date*
                                            </label>
                                            <input
                                                type="date"
                                                id="departmentName"
                                                className="form-control"
                                                value={payslipFormData.endDate}
                                                style={{
                                                    fontSize: "14px",
                                                    borderRadius: '8px',
                                                }}
                                                onChange={(e) =>
                                                    handleInputChange("endDate", e.target.value)
                                                }
                                            />
                                            <br />
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
                                                Payment Date*
                                            </label>
                                            <input
                                                type="date"
                                                id="departmentName"
                                                className="form-control"
                                                value={payslipFormData.paymentDate}
                                                style={{
                                                    fontSize: "14px",
                                                    borderRadius: '8px',
                                                }}
                                                onChange={(e) =>
                                                    handleInputChange("paymentDate", e.target.value)
                                                }
                                            />
                                            <div>
                                                <br />
                                                <span className="d-flex subheading" style={{ marginBottom: "10px" }}>Amount</span>
                                                <div className="d-flex flex-row">
                                                    <div className="col-md-7">
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
                                                            Amount*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="departmentName"
                                                            className="form-control"
                                                            placeholder="Enter"
                                                            value={payslipFormData.amount}
                                                            style={{
                                                                fontSize: "14px",
                                                                borderRadius: '8px',
                                                            }}
                                                            onChange={(e) =>
                                                                handleInputChange("amount", e.target.value)
                                                            }
                                                        />

                                                    </div>
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-4">
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
                                                            value={payslipFormData.currency}
                                                            onChange={(e) =>
                                                                handleInputChange("currency", e.target.value)
                                                            }
                                                        >
                                                            <option value="" disabled selected >
                                                                Choose
                                                            </option>
                                                            <option value="GBP">GBP £</option>
                                                            <option value="USD">USD $</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5" >
                                        <div className="form-group">
                                            <br />
                                            <span className="d-flex subheading" style={{ marginBottom: "10px" }}>Upload</span>
                                            <div
                                                className="d-flex justify-content-center uploader"
                                                // onClick={handleUploadSelect}
                                                style={{
                                                    cursor: "pointer",
                                                    // borderColor: isUploaderSelected ? "#228dff" : "#BDBDBD",
                                                    borderColor: "#BDBDBD",
                                                    padding: "5vw"
                                                }}
                                            >
                                                <label htmlFor="attachment" className="btn btn-outline-primary py-2" style={{ cursor: "pointer", boxShadow: "none", borderRadius: "8px", backgroundColor: "#ffffff", color: "#228dff", width: "170px", display: "flex", alignItems: "center" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-up" viewBox="0 0 16 16" style={{ paddingBottom: "4px" }}>
                                                        <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z" />
                                                        <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z" />
                                                    </svg>
                                                    &nbsp;
                                                    {"Upload"}
                                                </label>
                                                <input
                                                    type="file"
                                                    onChange={handleAttachment}
                                                    style={{ display: "none" }}
                                                    id="attachment"
                                                />
                                            </div>
                                            <div className="d-flex">
                                                <img src={file} alt="formfiles" />
                                                <span>Payslip.pdf</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btnSpace" style={{ marginTop: '24px' }}>
                            <button
                                className="btn-text btn "
                                style={{ color: "#228dff", borderRadius: '8px', backgroundColor: "white" }}
                                onClick={() => {
                                    if (onClose) {
                                        resetForm();
                                        onClose((prevState) => !prevState);
                                    }
                                }}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn-text btn btn-primary custom-button"
                                style={{ borderRadius: '8px' }}
                                onClick={handleCreatePayslip}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePayslip;
