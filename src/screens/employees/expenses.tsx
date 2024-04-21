import Search from "../../assets/svg/Search.svg";
import Filter from "../../assets/svg/Filter.svg";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import "./employees-table.css"
import { useState } from "react";
import ClaimExpense from "./claim-expense";


const data = [
    {
        payment: "01.09.2024",
        type: "Transportation",
        receipt: "receipt123.png",
        amount: "€ 1236,56",
        created: "01.09.2024",
        status: "submitted"

    },
    {
        payment: "01.09.2024",
        type: "Transportation",
        receipt: "receipt456.png",
        amount: "€ 1236,56",
        created: "01.09.2024",
        status: "paid"
    },
];

const Expenses = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


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
                        <button
                            style={{ cursor: "pointer", boxShadow: "none", outline: "none", borderRadius: '8px' }}
                            className="btn btn-outline-primary px-3 py-2"
                            onClick={() => openModal()}
                        >
                            <span className="me-1">+</span>Claim expense
                        </button>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th className="headerText"></th>
                        <th className="headerText">Payment date</th>
                        <th className="headerText" scope="col">
                            type
                        </th>
                        <th className="headerText" scope="col">
                            Receipt
                        </th>
                        <th className="headerText" scope="col">
                            Amount
                        </th>
                        <th className="headerText" scope="col">
                            Created on
                        </th>
                        <th className="headerText" scope="col">
                            Status
                        </th>
                        <th className="headerText" scope="col">

                        </th>
                        <th className="headerText" scope="col">

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
                            <td className="tableDataText">{item.payment}</td>
                            <td className="tableDataText">{item.type}</td>
                            <td className="tableDataText" style={{ color: "#228dff" }}>{item.receipt}</td>
                            <td className="tableDataText">{item.amount}</td>
                            <td className="tableDataText">{item.created}</td>
                            <td className="tableDataText" style={{ color: item.status === "submitted" ? "orange" : "#00c04b" }}>{item.status}</td>
                            <td className="tableDataText"></td>
                            <td className="tableDataText" style={{ color: "#228dff" }}>View</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ClaimExpense
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
};

export default Expenses;