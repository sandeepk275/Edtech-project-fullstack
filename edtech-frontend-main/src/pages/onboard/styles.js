import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  onboardPageHeader: {
    boxShadow: "var(--light-shadow)",
    height: "3rem",
    [theme.breakpoints.up("sm")]: {
      height: "4rem",
    },
  },
  logo: {
    width: "auto",
    height: "100%",
    margin: "0 auto",
  },
  onboardPageContent: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 3rem)",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 4rem)",
    },
  },
  loaderContainer: {
    margin: "auto 0",
  },
  onboardPageTabsContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export { useStyles };
