import { useState } from "react";

const useTabs = () => {
  const [tabValue, setTabValue] = useState(0);

  // Event handler triggered when a tab is changed
  const handleTabChange = (_, newTabValue) => {
    setTabValue(newTabValue);
  };

  return { tabValue, handleTabChange };
};

export default useTabs;
