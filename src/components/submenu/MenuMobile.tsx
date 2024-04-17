import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DA from "../../../assets/svg/Arrowdown.svg";
import Services from "../../../assets/svg/Submenu 2/Files.svg";
import Configrations from "../../../assets/svg/Submenu 2/General.svg";
import Roles from "../../../assets/svg/Submenu 2/Profiles & Users-1.svg";
import Users from "../../../assets/svg/Submenu 2/Profiles & Users.svg";
import BusinessProfile from "../../../assets/svg/Submenu 2/Travel & Location.svg";
import Integrations from "../../../assets/svg/Submenu 2/Weather.svg";
import billings from "../../../assets/svg/colorizedSvgs/finance.svg";
import Company from "../../../bootstrap-ui-kit/assets/Development.svg";

const MenuMobile = () => {
	const [show, setShow] = useState(true);
	const [showConfig, setShowConfig] = useState(false);
	const navigate = useNavigate();
	return (
		<>
			<h1
				className="pt-4 ms-4"
				style={{
					fontFamily: "Open Sans",
					fontSize: "20px",
					fontWeight: "600",
					lineHeight: "32px",
				}}
			>
				Settings
			</h1>
			<ul
				className={`d-flex d-md-none nav flex-column flex-nowrap ms-4 gap-3 pt-3 
			`}
			>
				<li onClick={() => navigate("/business/business-profile")}>
					<div className="d-flex flex align-items-center gap-3">
						<img
							src={BusinessProfile}
							alt="Business Profile"
							width={"24px"}
							height={"24px"}
						/>

						<span
							className={`${show ? "iconText-right__mobile" : "d-none"} 
										
									`}
						>
							Business Profile
						</span>
					</div>
				</li>
				<li onClick={() => navigate("/business/company-structure")}>
					<div className="d-flex flex align-items-center gap-3">
						<img
							src={Company}
							alt="task manager"
							width={"24px"}
							height={"24px"}
						/>

						<span className={`${show ? "iconText-right__mobile" : "d-none"}`}>
							Company Structure
						</span>
					</div>
				</li>
				<li onClick={() => navigate("/business/services")}>
					<div className="d-flex flex align-items-center gap-3">
						<img
							src={Services}
							alt="task manager"
							width={"24px"}
							height={"24px"}
						/>

						<span className={`${show ? "iconText-right__mobile" : "d-none"}`}>
							Services
						</span>
					</div>
				</li>
				<li onClick={() => navigate("/business/users")}>
					<div className="d-flex flex align-items-center gap-3">
						<img
							src={Users}
							alt="task manager"
							width={"24px"}
							height={"24px"}
						/>

						<span className={`${show ? "iconText-right__mobile" : "d-none"}`}>
							Users{" "}
						</span>
					</div>
				</li>
				<li onClick={() => navigate("/business/role")}>
					<div className="d-flex flex align-items-center gap-3">
						<img
							src={Roles}
							alt="task manager"
							width={"24px"}
							height={"24px"}
						/>
						<span className={`${show ? "iconText-right__mobile" : "d-none"} `}>
							Roles & Permissions{" "}
						</span>
					</div>
				</li>
				<li>
					<>
						<div
							className="d-flex flex align-items-center gap-3 "
							onClick={() => setShowConfig((prev) => !prev)}
						>
							<img
								src={Configrations}
								alt="task manager"
								width={"24px"}
								height={"24px"}
							/>

							<span className={`${show ? "iconText-right__mobile" : "d-none"}`}>
								Configurations <img src={DA} alt="down arrow" />
							</span>
						</div>
						{showConfig && (
							<div
								className="d-flex flex-column pt-4 gap-3"
								style={{
									paddingLeft: "2.5rem",
								}}
							>
								<div
									style={{
										color: "#333333",
										fontFamily: "Roboto",
										fontSize: "12px",
										fontStyle: "normal",
										fontWeight: "300",
										lineHeight: "16px",
									}}
									onClick={() => navigate("/business/configurations")}
								>
									Email
								</div>
								<div
									style={{
										color: "#333333",
										fontFamily: "Roboto",
										fontSize: "12px",
										fontStyle: "normal",
										fontWeight: "300",
										lineHeight: "16px",
									}}
									onClick={() => navigate("/business/configurations/hr")}
								>
									HR
								</div>
								<div
									onClick={() => navigate("/business/configurations/finance")}
									style={{
										color: "#333333",
										fontFamily: "Roboto",
										fontSize: "12px",
										fontStyle: "normal",
										fontWeight: "300",
										lineHeight: "16px",
									}}
								>
									Finance
								</div>
							</div>
						)}
					</>
				</li>
				<li onClick={() => navigate("/business/integrations")}>
					<div className="d-flex flex align-items-center gap-3">
						<img
							src={Integrations}
							alt="task manager"
							width={"24px"}
							height={"24px"}
						/>

						<span className={`${show ? "iconText-right__mobile" : "d-none"} `}>
							integrations{" "}
						</span>
					</div>
				</li>
				<li onClick={() => navigate("/business/billings")}>
					<div className="d-flex flex align-items-center gap-3">
						<img
							src={billings}
							alt="task manager"
							width={"24px"}
							height={"24px"}
						/>

						<span className={`${show ? "iconText-right__mobile" : "d-none"}`}>
							Billings{" "}
						</span>
					</div>
				</li>
			</ul>
		</>
	);
};
export default MenuMobile;
