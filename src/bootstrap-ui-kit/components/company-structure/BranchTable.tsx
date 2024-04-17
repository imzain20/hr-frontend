import { NavLink } from "react-router-dom";
import Arrowdown from "../../../assets/svg/Arrowdown.svg";
import Filter from "../../../assets/svg/Filter.svg";
import Search from "../../../assets/svg/Search.svg";
import "./branch.css";
import BranchList from "./BranchList";

const BranchTable = () => {
	return (
		<>
			<div className="d-flex ps-3 mx-5 bg-white pt-3 pb-1 gap-4 mt-4 branch">
				<NavLink to="/">
					<button>Departments</button>
				</NavLink>
				<NavLink to="/">
					<button>Departments</button>
				</NavLink>
				<NavLink to="/">
					<button>Departments</button>
				</NavLink>
				<NavLink to="/">
					<button>Departments</button>
				</NavLink>
			</div>
			<div className="d-flex px-3 mx-5 bg-white py-2 gap-4 branch">
				<div className="d-flex bg-white ">
					<div className="bg-white d-flex align-items-center">
						<input
							className="form-check-input mt-0"
							type="checkbox"
							value=""
							aria-label="Checkbox for following text input"
						/>
					</div>
					<img src={Arrowdown} alt="Arrowdown"></img>
				</div>

				<div className="ms-auto d-flex gap-4">
					<img src={Search} alt="Search"></img>
					<img src={Filter} alt="Filter"></img>
					<button className="btn btn-outline-primary px-3 py-2 ">
						<span className="me-1">+</span> Branch
					</button>
				</div>
			</div>
			<div className="branch bg-white mx-5 ps-3">
				<div className="row me-5 pt-4" style={{ paddingLeft: "1.9rem" }}>
					<div className="col-3">Branch</div>
					<div className="col-3 offset-3">Manager</div>
					<div className="col-3">Employees</div>
				</div>
				{/* <BranchList />
				<BranchList />
				<BranchList />
				<BranchList /> */}
			</div>
		</>
	);
};
export default BranchTable;
