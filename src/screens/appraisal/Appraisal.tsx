import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import back_button from "../../assets/png/back_button.png";
import "../../bootstrap-ui-kit/components/company-structure/branch.css";
import "../employees/employees.css"
import EmployeesTable from "./employee-table";
import MyTeamTable from "./myteam-table";


const Appraisal: React.FC = () => {
	const navigate = useNavigate();
	const tabs_mob = [
		{
			name: "Employees",
			component: <EmployeesTable />,
		},
		{
			name: "My team",
			component: <MyTeamTable />,
		},
		
		
	];
	const [selectedOption, setSelectedOption] = useState<string>(
		tabs_mob[0].name
	);
	const [activeTab, setTab] = useState<React.ReactElement>(
		tabs_mob[0].component
	);
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
		const selectedTab = tabs_mob.find((tab) => tab.name === event.target.value);
		if (selectedTab) {
			setTab(selectedTab.component);
		}
	};
	const isMobile = useMobile();


	return (
		<div>
			<div className={"flexSpaceCS"}>
				<div className="ps-3 ps-md-0">
					<div className="d-flex align-items-center mb-3 gap-2">
						{isMobile && (
							<div onClick={() => navigate(-1)}>
								<img src={back_button} alt="Back Button" />
							</div>
						)}
						<p className="HR">Appraisal</p>
					</div>
				</div>
				
			</div>
			
			<div className={"tabs"}>
				<select
					value={selectedOption}
					className="d-md-none d-inline-block w-100 ms-0 px-3"
					onChange={handleSelectChange}
					style={{
						height: "10vw",
						border: "none",
						borderTopRightRadius: "12px",
						borderTopLeftRadius: "12px",
						borderBottom: "2px solid #E0E0E0",
						position: "relative", // Add this line
						// zIndex: "1",
						borderRight: "16px solid transparent",
						
					}}
				>
					{tabs_mob.map((tab) => (
						<option key={tab.name} value={tab.name} >
							{tab.name}
						</option>
					))}
				</select>
				<div
					className="d-md-flex gap-1 bg-white d-none"
					style={{
						borderBottom: "2px solid #e0e0e0",
						borderRadius: "5px",
						paddingTop: "0.5rem",
						paddingLeft: "0px !Important",
					}}
				>
					<NavLink
						to="."
						className={"links"}
						style={({ isActive }) => {
							return {
								borderBottom: isActive ? "2px solid #228dff" : "",
								color: isActive ? "#228dff" : "",
								textAlign: "center",
								marginBottom: "-2px",
							};
						}}
						end
					>
					Employee
					</NavLink>
					<NavLink
						to="myteam"
						className={"links"}
						style={({ isActive }) => {
							return {
								borderBottom: isActive ? "2px solid #228dff" : "",
								color: isActive ? "#228dff" : "",
								textAlign: "center",
								marginBottom: "-2px",
							};
						}}
					>
						My team
					</NavLink>
					
				</div>
				<div className="d-none d-md-block">
					<Outlet />
				</div>
				<div className="d-block d-md-none">{activeTab}</div>
			</div>
		</div>
	);
};

export default Appraisal;
