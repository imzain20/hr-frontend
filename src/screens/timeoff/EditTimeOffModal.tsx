import "../employees/create-payslip.css"
import { useState, useEffect } from "react";
import moment from "moment";

interface modalUsageProps {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
    // timeoff:any;
    selectedEvent: any;
    onSave:any
}

const EditTimeOffModal = ({ isOpen, onClose , selectedEvent , onSave}: modalUsageProps) => {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
  
        if (selectedEvent) {
            setStartDate(moment(selectedEvent.start).format('YYYY-MM-DD'));
            setEndDate(moment(selectedEvent.end).format('YYYY-MM-DD'));
            setStatus(selectedEvent.status);
            setComment(selectedEvent.comment || "");
        }
    }, [selectedEvent]);

    const handleSave = () => {
        const updatedEvent = {
            ...selectedEvent,
            start: startDate,
            end: endDate,
            status: status,
            comment: comment,
        };
        onSave(updatedEvent);
    };
    

    if (!isOpen) return null;

    console.log(selectedEvent)

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
                    <p className="heading" style={{fontFamily:"Roboto"}}>Edit approved time-off</p>
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
                                              Name Surname
                                            </label>
                                          
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
                                                value={startDate} 
                                                onChange={(e) => setStartDate(e.target.value)}
                                              
                                                placeholder="Enter here"
                                           
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
                                                value={endDate} 
                                                onChange={(e) => setEndDate(e.target.value)}
                                              
                                                placeholder="Enter here"
                                            
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
                                                Status
                                            </label>
                                            <select
                                                className="form-select"
                                                style={{ borderRadius: '8px' }}
                                                aria-label=".form-select"
                                                id="type"
                                                value={status} 
                                                onChange={(e) => setStatus(e.target.value)}
                                            >
                                                <option value="approved">Approved</option>
                                                <option value="declined">Declined</option>
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
                                  
                                    onClick={handleSave}
                                    >
                                        Save
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
export default EditTimeOffModal;
