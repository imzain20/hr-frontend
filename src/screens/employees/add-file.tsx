import React, { useEffect, useState } from "react";
import axios from "axios";
import file from "../../assets/svg/FormsFiles.svg"
import { toast } from "react-toastify";
import { useUserState } from "../../redux/userSlice";
import "./create-payslip.css"

interface modalUsageProps {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddFile = ({ isOpen, onClose }: modalUsageProps) => {

    const userState = useUserState();
    const [fileFormData, setFileFormData] = useState({
        name: "",
        comment: "",
    });

    const [filename, setFilename] = useState("");
    const [fileSize, setFileSize] = useState("");
    const [fileType, setFileType] = useState("");
    const [attachment, setAttachment] = useState<any>();

    const handleInputChange = (fieldName: string, value: any) => {
        setFileFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: any = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAttachment(file);
                setFilename(file.name);
                setFileSize(convertBytesToMB(file.size));
                setFileType(file.type);
            };
            reader.readAsDataURL(file);
        }
    };

    const convertBytesToMB = (bytes: number) => {
        return (bytes / (1024 * 1024)).toFixed(2);
    };

    const handleCreatePayslip = async () => {

        if (attachment) {
            try {
            const formData = new FormData();
            formData.append("attachment", attachment);
            formData.append("name", fileFormData.name);
            formData.append("comment", fileFormData.comment);
            formData.append("type", fileType);
            formData.append("businessId", userState.business._id);
            // formData.append("businessId", "6576e03e4cd4bd8ad120ea3d");
            formData.append("createdBy", userState.user._id);
            // formData.append("createdBy", "6576c4068cd36a5d5dbe610a");

            const res = await axios.post(
                `https://backend-b.cinqd.com/file/create-file`,
                // `http://localhost:82/file/create-file`,
                formData,
                {
                    headers: {
                        "auth-token": userState.token,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (res.status === 200) {
                toast.success("File Added", {
                    position: "top-right",
                });
                onClose((prevState) => !prevState);
            } else {
                toast.error("Failed to add file", {
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
        setFileFormData({
            name: "",
            comment: ""
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
                    <p className="heading">Add File</p>
                    <div className="closeButton">
                        <span
                            onClick={() => {
                                setAttachment(null);
                                setFilename("");
                                setFileSize("");
                                setFileType("");
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
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="departmentName"
                                                className="form-control"
                                                placeholder="Name of the file"
                                                value={fileFormData.name}
                                                style={{
                                                    fontSize: "14px",
                                                    borderRadius: '8px',
                                                }}
                                                onChange={(e) =>
                                                    handleInputChange("name", e.target.value)
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
                                                Comment
                                            </label>
                                            <textarea
                                                className="form-control  placeholder-text"
                                                style={{ borderRadius: '8px', height: '215px' }}
                                                placeholder="Start typing"
                                                value={fileFormData.comment}
                                                onChange={(e) =>
                                                    handleInputChange("comment", e.target.value)
                                                }
                                            ></textarea>
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
                                            <br />
                                            <div className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                                                {attachment && <div>
                                                    <img src={file} alt="formfiles" />&nbsp;
                                                    <span>{filename}</span><br />
                                                    &nbsp;&nbsp;&nbsp;<span>{fileSize} Mb</span>
                                                </div>}
                                                {attachment && <div>
                                                    <span
                                                        onClick={() => {
                                                            setAttachment(null);
                                                            setFilename("");
                                                            setFileSize("");
                                                            setFileType("");
                                                        }}
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "gray",
                                                            cursor: "pointer",
                                                            verticalAlign: "middle"
                                                        }}
                                                    >
                                                        &times;
                                                    </span>
                                                </div>}
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
                                        setAttachment(null);
                                        setFilename("");
                                        setFileSize("");
                                        setFileType("");
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

export default AddFile;
