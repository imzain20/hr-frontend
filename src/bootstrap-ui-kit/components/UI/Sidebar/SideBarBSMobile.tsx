import { Link } from "react-router-dom";
import Analytics from "../../../assets/Main menu icons/Gray/Analytics Gray.svg";
import CRM from "../../../assets/Main menu icons/Gray/CRM Gray.svg";
import HR from "../../../assets/Main menu icons/Gray/HR Gray.svg";
import Proposals from "../../../assets/Main menu icons/Gray/Proposals Gray.svg";
import Settings from "../../../assets/Main menu icons/Gray/Settings Gray.svg";
import TaskManager from "../../../assets/Main menu icons/Gray/Task Manager Gray.svg";
import Templates from "../../../assets/Main menu icons/Gray/Templates Gray.svg";
import "./SideBar.css";

const SideBarBSMobile = () => {
	return (
		<ul className="d-flex d-md-none nav flex-column flex-nowrap pt-3 ps-3 gap-3">
			<li>
				<Link to="/">
					<div className="d-flex align-items-center gap-3">
						<img
							src={TaskManager}
							alt="task manager"
							width={"32px"}
							height={"32px"}
						/>
						<span className="iconText__mobile">Task Manager</span>
					</div>
				</Link>
			</li>
			<li>
				<div className="d-flex align-items-center gap-3">
					<img src={CRM} alt="task manager" width={"32px"} height={"32px"} />
					<span className="iconText__mobile">Emails</span>
				</div>
			</li>

			<li>
				<div className="d-flex align-items-center gap-3">
					<img
						src={Proposals}
						alt="task manager"
						width={"32px"}
						height={"32px"}
					/>
					<span className="iconText__mobile">Calendar</span>
				</div>
			</li>
			<li>
				<div className="d-flex align-items-center gap-3">
					<img src={CRM} alt="task manager" width={"32px"} height={"32px"} />
					<span className="iconText__mobile">CRM</span>
				</div>
			</li>
			<li>
				<div className="d-flex align-items-center gap-3">
					<img src={HR} alt="task manager" width={"32px"} height={"32px"} />
					<span className="iconText__mobile">HR</span>
				</div>
			</li>
			<li>
				<div className="d-flex align-items-center gap-3">
					<img
						src={Analytics}
						alt="task manager"
						width={"32px"}
						height={"32px"}
					/>
					<span className="iconText__mobile">Analytics</span>
				</div>
			</li>
			<li>
				<div className="d-flex align-items-center gap-3">
					<img
						src={Proposals}
						alt="task manager"
						width={"32px"}
						height={"32px"}
					/>
					<span className="iconText__mobile">Proposals</span>
				</div>
			</li>
			<li>
				<div className="d-flex align-items-center gap-3">
					<img
						src={Templates}
						alt="task manager"
						width={"32px"}
						height={"32px"}
					/>
					<span className="iconText__mobile">Templates</span>
				</div>
			</li>
			<li data-bs-dismiss="offcanvas">
				<Link
					to={"/business/settings"}
					className="d-flex align-items-center gap-3"
				>
					<img
						src={Settings}
						alt="task manager"
						width={"32px"}
						height={"32px"}
					/>
					<span className="iconText__mobile">Settings</span>
				</Link>
			</li>
		</ul>
	);
};
export default SideBarBSMobile;
