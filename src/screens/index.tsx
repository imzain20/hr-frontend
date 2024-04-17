import Navbar from "../components/Navbar";

import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import Menu from "../components/submenu/Menu";
import SideBarBS from "../bootstrap-ui-kit/components/UI/Sidebar/SideBarBS";

const GlobalScreen: React.FC = () => {
  return (
    <>
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
              style={{ height: "93vh" }}
            >
              <Menu />
              <div className="flex-grow-1 pt-0 ps-0 ps-md-3 overflow-y-auto overflow-x-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalScreen;
