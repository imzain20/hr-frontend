import { Link, useNavigate } from "react-router-dom";
import Analytics from "../../../assets/Main menu icons/Gray/Analytics Gray.svg";
import CRM from "../../../assets/Main menu icons/Gray/CRM Gray.svg";
import HR from "../../../assets/Main menu icons/Gray/HR Gray.svg";
import Proposals from "../../../assets/Main menu icons/Gray/Proposals Gray.svg";
import Settings from "../../../assets/Main menu icons/Gray/Settings Gray.svg";
import TaskManager from "../../../assets/Main menu icons/Gray/Task Manager Gray.svg";
import Templates from "../../../assets/Main menu icons/Gray/Templates Gray.svg";

import "./SideBar.css";

const SideBarBS = () => {
	const navigate = useNavigate();
	return (
		<ul
			className="d-none d-md-flex nav flex-column sidebar z-1 flex-nowrap"
			style={{ paddingTop: "5rem" }}
		>
			<li>
				<Link to="/">
					<div className="d-flex flex-column align-items-center gap-1">
						<img
							src={TaskManager}
							alt="task manager"
							width={"24px"}
							height={"24px"}
						/>
						<span className="iconText">Task Manager</span>
					</div>
				</Link>
			</li>
			<li>
				<div className="d-flex flex-column align-items-center gap-1">
					<img src={CRM} alt="task manager" width={"24px"} height={"24px"} />
					<span className="iconText">Emails</span>
				</div>
			</li>

			<li>
				<div className="d-flex flex-column align-items-center gap-1">
					<img
						src={Proposals}
						alt="task manager"
						width={"24px"}
						height={"24px"}
					/>
					<span className="iconText">Calendar</span>
				</div>
			</li>
			<li>
				<div className="d-flex flex-column align-items-center gap-1">
					<img src={CRM} alt="task manager" width={"24px"} height={"24px"} />
					<span className="iconText">CRM</span>
				</div>
			</li>
			<li>
				<div className="d-flex flex-column align-items-center gap-1">
					<img src={HR} alt="task manager" width={"24px"} height={"24px"} />
					<span className="iconText">HR</span>
				</div>
			</li>
			<li>
				<div className="d-flex flex-column align-items-center gap-1">
					<img
						src={Analytics}
						alt="task manager"
						width={"24px"}
						height={"24px"}
					/>
					<span className="iconText">Analytics</span>
				</div>
			</li>
			<li>
				<div className="d-flex flex-column align-items-center gap-1">
					<img
						src={Proposals}
						alt="task manager"
						width={"24px"}
						height={"24px"}
					/>
					<span className="iconText">Proposals</span>
				</div>
			</li>
			<li>
				<div
					className="d-flex flex-column align-items-center gap-1"
					onClick={() => {
						navigate("/builder");
						window.location.reload();
					}}
				>
					<img
						src={Templates}
						alt="task manager"
						width={"24px"}
						height={"24px"}
					/>
					<span className="iconText">Templates</span>
				</div>
			</li>
			<li>
				<div className="d-flex flex-column align-items-center gap-1">
					<img
						src={Settings}
						alt="task manager"
						width={"24px"}
						height={"24px"}
					/>
					<span className="iconText">Settings</span>
				</div>
			</li>
		</ul>
	);
};
export default SideBarBS;
