import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./global-screen.module.scss";
import Navbar from "../../components/Navbar";
import Menu from "../../components/submenu/Menu";
import SideBarBS from "../../bootstrap-ui-kit/components/UI/Sidebar/SideBarBS";

const GlobalScreen: React.FC = () => {
	return (
		<>
				<IonPage>
					<IonContent>
						<div className={styles.flexContainer}>
							<div className={styles.navbarContainer}>
								<SideBarBS />
								<div
									className="d-flex flex-column flex-grow-1"
									style={{ background: "#F5F5F5" }}
								>
									<Navbar />

									<div
										className="d-flex overflow-y-hidden"
										style={{ height: "100vh" }}
									>
										<Menu />
										<div className="flex-grow-1 pt-0 ps-0 ps-md-3 overflow-y-scroll overflow-x-scroll">
											<Outlet />
										</div>
									</div>
								</div>
							</div>
						</div>
					</IonContent>
				</IonPage>
		</>
	);
};

export default GlobalScreen;
