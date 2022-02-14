import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  signupForm: {
    maxHeight: "70vh",
    overflowY: "scroll",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "none",
      overflowY: "visible",
    },
  },
  formControlsContainer: {
    display: "grid",
    rowGap: "1.5rem",
    padding: theme.spacing(2, 4),
  },
  error: {
    color: "red",
    fontSize: "0.75rem",
    fontWeight: 300,
    paddingTop: "0.5rem",
  },
  formButton: {
    marginTop: theme.spacing(3),
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    transition: "var(--transition)",
  },
}));

export { useStyles };
