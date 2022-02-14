import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tabsContainer: {
    borderRadius: "var(--radius)",
    boxShadow: "var(--dark-shadow)",
    width: "90%",
    maxWidth: "20rem",
  },
  tab: {
    cursor: "pointer",
  },
});

export { useStyles };
