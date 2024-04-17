import { NavLink } from "react-router-dom";
import styles from "./userprofilemenu.module.css";

const UserProfileMenu = () => {
	// const [show, setShow] = useState(true);
	return (
		<div className={`nav flex-column ${styles.usersidebar} gap-3`}>
			<div>
				<NavLink
					className={styles.link}
					style={({ isActive }) => {
						return {
							background: isActive ? "aliceblue" : "",
							padding: isActive ? "24px 20px" : "",
							borderRight: isActive ? "2px solid #228dff" : "",
							fontWeight: isActive ? "600" : "",
						};
					}}
					to={"."}
					end
				>
					Personal Information
				</NavLink>
			</div>
			<div>
				<NavLink
					to={"my-businesses"}
					className={styles.link}
					style={({ isActive }) => {
						return {
							background: isActive ? "aliceblue" : "",
							padding: isActive ? "24px 20px" : "",
							borderRight: isActive ? "2px solid #228dff" : "",
							fontWeight: isActive ? "600" : "",
						};
					}}
				>
					My Business
				</NavLink>
			</div>
			<div>
				<NavLink
					to={"date-and-time"}
					className={styles.link}
					style={({ isActive }) => {
						return {
							background: isActive ? "aliceblue" : "",
							padding: isActive ? "24px 20px" : "",
							borderRight: isActive ? "2px solid #228dff" : "",
							fontWeight: isActive ? "600" : "",
						};
					}}
				>
					Date and Time
				</NavLink>
			</div>
			<div>
				<NavLink
					to={"security"}
					className={styles.link}
					style={({ isActive }) => {
						return {
							background: isActive ? "aliceblue" : "",
							padding: isActive ? "24px 20px" : "",
							borderRight: isActive ? "2px solid #228dff" : "",
							fontWeight: isActive ? "600" : "",
						};
					}}
				>
					Security{" "}
				</NavLink>
			</div>
			<div>
				<NavLink
					to={"notifications"}
					className={styles.link}
					style={({ isActive }) => {
						return {
							background: isActive ? "aliceblue" : "",
							padding: isActive ? "24px 20px" : "",
							borderRight: isActive ? "2px solid #228dff" : "",
							fontWeight: isActive ? "600" : "",
						};
					}}
				>
					Notifications{" "}
				</NavLink>
			</div>
		</div>
	);
};
export default UserProfileMenu;
