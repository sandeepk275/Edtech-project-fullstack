import React from "react";

// imports for 3rd party libraries
import PropTypes from "prop-types";

// imports for components from Material UI library
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// imports for MUI components
import { MuiTabPanel } from "./MuiTabPanel";

// imports for styles
import { useStyles } from "./styles.js";

// adding attributes for accessibility to Tab component
const a11yProps = (id, index) => {
  return {
    id: `${id}-tab-${index}`,
    "aria-controls": `${id}-tabpanel-${index}`,
  };
};

const MuiTabs = ({ tabValue, handleTabChange, data }) => {
  const classes = useStyles();

  return (
    <section className={classes.tabsContainer}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="login & signup tabs"
      >
        {data.map((tab, index) => {
          return (
            <Tab
              key={tab.id}
              label={tab.label}
              {...a11yProps(tab.id, index)}
              className={classes.tab}
            />
          );
        })}
      </Tabs>

      {data.map((tab, index) => {
        return (
          <MuiTabPanel
            key={tab.id}
            tabValue={tabValue}
            index={index}
            id={tab.id}
          >
            {tab.children}
          </MuiTabPanel>
        );
      })}
    </section>
  );
};

MuiTabs.propTypes = {
  tabValue: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default MuiTabs;
