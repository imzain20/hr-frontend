import { useState } from 'react';
import styles from './editinformation.module.scss';
import AddExperience from './add-experience';

const JobInformation = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    const personalDetails = [
        { label: "Period", value: "16.05.2023" },
        { label: "Team", value: "Team Name" },
        { label: "Department", value: "Department Name" },
        { label: "Time of Employment", value: "Hybrid" },
        { label: "Total Compensation", value: "€ 1236,56" },
        { label: "Salary", value: "€ 836,56" },
        { label: "Bonus", value: "€ 234" },
        { label: "Working Days", value: "Mon - Fri" },
        { label: "Working Hours", value: "09:00 - 18:00" },
        { label: "Description", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exest laborum." },
    ];

    return (
        <>
            <div>
                <div className="d-flex pt-2" style={{ marginLeft: "1vw", marginRight: "1vw", flexDirection: "row", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "25px", fontWeight: "600" }}>Working History</span>
                    <span style={{ fontSize: "18px", color: "#228dff", cursor: "pointer" }} onClick={() => openModal()}>+ Experience</span>
                </div>
                <div className="row">
                    <div className="col m-0">
                        <p className={`${styles.headingstyle}`} style={{ marginTop: "1vw" }}>Senior Designer
                            &nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="18"
                                fill="#228dff"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                onClick={() => openModal()}
                            >
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                            </svg></p>
                    </div>
                </div>
                {personalDetails.map((detail, index) => (
                    <div className="row" key={index}>
                        <div className="col" style={{ marginLeft: "1vw" }}>
                            <p>{detail.label}: <span>{detail.value}</span></p>
                        </div>
                    </div>
                ))}
                <hr />
            </div>
            <AddExperience
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};

export default JobInformation;
