import React, { useState } from "react";
import RenderTabs from "../../../components/TabsComponent/RenderTabs";

export default function EmailComponent() {
  const tabs = ["All", "Sent", "Incoming"];
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div>
      <RenderTabs
        Tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "All" && <AllComponent />}
      {activeTab === "Sent" && <SentComponent />}
      {activeTab === "Incoming" && <IncomingComponent />}
    </div>
  );
}
const AllComponent = () => {
  return <div></div>;
};

const SentComponent = () => {
  return <div></div>;
};

const IncomingComponent = () => {
  return <div></div>;
};
