import React from "react";

// imports for 3rd party libraries
import PropTypes from "prop-types";

// imports for styles
import { useStyles } from "./styles.js";

const MuiTabPanel = (props) => {
  const { children, tabValue, index, id, ...other } = props;

  const classes = useStyles();

  return (
    <article
      role="tabpanel"
      hidden={tabValue !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      {...other}
    >
      {tabValue === index && <div className={classes.tabPanel}>{children}</div>}
    </article>
  );
};

MuiTabPanel.propTypes = {
  children: PropTypes.node,
  tabValue: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default MuiTabPanel;
