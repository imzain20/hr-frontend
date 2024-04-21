import "./create-payslip.css"

interface modalUsageProps {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestTimeoff = ({ isOpen, onClose }: modalUsageProps) => {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-custom" style={{ maxWidth: "530px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <p className="heading">Request Time-off</p>
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
                <div className="serviceContainer">
                    <div className="departmentContainer">
                        <div className="formContainer">
                            <div className="container">
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label
                                                htmlFor="serviceName"
                                                className="float-start mb-1 name"
                                            >
                                                Type*
                                            </label>
                                            <select
                                                className="form-select"
                                                style={{ borderRadius: '8px' }}
                                                aria-label=".form-select"
                                                id="type"
                                            >
                                                <option value="Annual Leave">Annual Leave</option>
                                                <option value="Sick Leave">Sick Leave</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="serviceName"
                                                className="float-start mb-1 name"
                                            >
                                                Start Date*
                                            </label>
                                            <input
                                                type="date"
                                                id="serviceName"
                                                className="form-control"
                                                style={{ borderRadius: '8px' }}
                                                // value={serviceFormData.name}
                                                placeholder="Enter here"
                                            // onChange={(e) =>
                                            //   handleInputChange("name", e.target.value)
                                            // }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="serviceName"
                                                className="float-start mb-1 name"
                                            >
                                                End Date*
                                            </label>
                                            <input
                                                type="date"
                                                id="serviceName"
                                                className="form-control"
                                                style={{ borderRadius: '8px' }}
                                                // value={serviceFormData.name}
                                                placeholder="Enter here"
                                            // onChange={(e) =>
                                            //   handleInputChange("name", e.target.value)
                                            // }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label
                                                htmlFor="serviceName"
                                                className="float-start mb-1 name"
                                            >
                                                Duration
                                            </label>
                                            <input
                                                type="text"
                                                id="serviceName"
                                                className="form-control"
                                                style={{ borderRadius: '8px' }}
                                                // value={serviceFormData.name}
                                                placeholder="Enter here"
                                            // onChange={(e) =>
                                            //   handleInputChange("name", e.target.value)
                                            // }
                                            />
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



                                <br />
                                <div className="btnSpace">
                                    <button
                                        className="btn-text btn "
                                        style={{ color: "#228dff", backgroundColor: 'white' }}
                                        onClick={() => {
                                            if (onClose) {
                                                onClose((prevState) => !prevState);
                                            }
                                        }}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        className="btn btn-primary custom-button"
                                    // onClick={handleCreateService}
                                    >
                                        Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RequestTimeoff;
