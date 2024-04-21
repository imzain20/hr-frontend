import "./create-payslip.css"
import { useEffect, } from "react";
import { useUserState } from "../../redux/userSlice";
import { useGetFormByIdQuery } from "../../redux/apic";
import RenderForm from "./RenderForm";

interface modalUsageProps {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddExperience = ({ isOpen, onClose }: modalUsageProps) => {

    const userState = useUserState();
    const { data, refetch } = useGetFormByIdQuery({
        token: userState.token,
        id: '661ce07b5c0f2552cd8a95ec'

    });
    useEffect(() => {
        refetch();
    }, []);
    
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
                    <p className="heading">Add Experience</p>
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
                        <div className="formContainer">
                            <div className="container">
                                <RenderForm formfields={data?.data?.formFields} />
                                <br/>
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
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    );
};
export default AddExperience;
