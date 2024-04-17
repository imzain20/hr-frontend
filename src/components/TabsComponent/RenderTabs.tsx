import React from "react";
import styles from "./Tabs.module.scss";

interface RenderTabsProps {
  setActiveTab: any;
  activeTab: string;
  Tabs: any;
}

const RenderTabs: React.FC<RenderTabsProps> = ({
  setActiveTab,
  activeTab,
  Tabs,
}) => {
  return (
    <div className={`${styles.tabs} flex-shrink-0`}>
      {Tabs.map((Tab: any) => {
        return (
          <p
            onClick={() => {
              setActiveTab(Tab);
            }}
            className={activeTab === Tab ? styles.activeTab : styles.SingleTab}
          >
            {Tab}
          </p>
        );
      })}
    </div>
  );
};

export default RenderTabs;
