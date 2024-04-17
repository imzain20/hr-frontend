import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnalyticsBlue from "../../../assets/Main menu icons/Blue/Analytics Blue.svg";
import CRMBlue from "../../../assets/Main menu icons/Blue/CRM Blue.svg";
import HRBlue from "../../../assets/Main menu icons/Blue/HR Blue.svg";
import Analytics from "../../../assets/Main menu icons/Gray/Analytics Gray.svg";
import CRM from "../../../assets/Main menu icons/Gray/CRM Gray.svg";
import HR from "../../../assets/Main menu icons/Gray/HR Gray.svg";
import LA from "../../../assets/png/icon_left.png";

const SubMenu = () => {
	const [show, setShow] = useState(true);
	return (
		<ul
			className={`nav flex-column ${
				show ? "sidebar-right" : "sidebar-right--mobile"
			}`}
		>
			<div
				className="d-flex hide-btn gap-3"
				onClick={() => setShow((preState) => !preState)}
			>
				<img src={LA} alt="arrow" />
				<span className={`${show ? "d-block" : "d-none"}`}>hide</span>
			</div>
			<li>
				<NavLink to={"."} end>
					{({ isActive }) => (
						<div className="d-flex flex align-items-center gap-3">
							{!isActive ? (
								<img
									src={CRM}
									alt="task manager"
									width={"24px"}
									height={"24px"}
								/>
							) : (
								<img
									src={CRMBlue}
									alt="task manager"
									width={"24px"}
									height={"24px"}
								/>
							)}
							<span
								className={`${show ? "iconText-right" : "d-none"} ${
									isActive ? "active" : ""
								}`}
							>
								CRM
							</span>
						</div>
					)}
				</NavLink>
			</li>
			<li>
				<NavLink to={"hr"}>
					{({ isActive }) => (
						<div className="d-flex flex align-items-center gap-3">
							{!isActive ? (
								<img
									src={HR}
									alt="task manager"
									width={"24px"}
									height={"24px"}
								/>
							) : (
								<img
									src={HRBlue}
									alt="task manager"
									width={"24px"}
									height={"24px"}
								/>
							)}
							<span
								className={`${show ? "iconText-right" : "d-none"} ${
									isActive ? "active" : ""
								}`}
							>
								HR
							</span>
						</div>
					)}
				</NavLink>
			</li>
			<li>
				<NavLink to={"lookups"}>
					{({ isActive }) => (
						<div className="d-flex flex align-items-center gap-3">
							{!isActive ? (
								<img
									src={Analytics}
									alt="task manager"
									width={"24px"}
									height={"24px"}
								/>
							) : (
								<img
									src={AnalyticsBlue}
									alt="task manager"
									width={"24px"}
									height={"24px"}
								/>
							)}
							<span
								className={`${show ? "iconText-right" : "d-none"} ${
									isActive ? "active" : ""
								}`}
							>
								Look up
							</span>
						</div>
					)}
				</NavLink>
			</li>
		</ul>
	);
};
export default SubMenu;
