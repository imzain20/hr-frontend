// BranchList.tsx
import React from "react";
import "../../../bootstrap-ui-kit/components/company-structure/branchList.css";

interface BranchListProps {
	data: Array<{
		id: number;
		name: string;
		manager: string;
		employees: Array<string>;
	}>;
}

const BranchList: React.FC<BranchListProps> = ({ data }) => {
	return (
			<>
				{data.map((branch) => (
					<div
						key={branch.id}
						className="row bg-white mt-3 me-4 p-2"
						style={{ borderBottom: "1px solid #e9e9e9" }}
					>
						<div className="col-3">
							<input
								className="form-check-input mt-0"
								type="checkbox"
								value=""
								aria-label="Checkbox for following text input"
							/>
							<span className="ms-3">{branch.name}</span>
						</div>
						<div className="col-3 offset-1">
							<p className="ms-3" >{branch.manager}</p>
						</div>
						<div className="col-3">{/* Render employees here */}</div>
					</div>
				))}
			</>
	);
};

export default BranchList;
