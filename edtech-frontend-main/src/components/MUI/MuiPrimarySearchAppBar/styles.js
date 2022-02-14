import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& p": {
      marginBottom: 0,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem",
  },
  logo: {
    display: "none",
    fontSize: "1.25rem",
    fontWeight: 500,
    color: "var(--clr-white)",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      cursor: "default",
    },
  },
  cursorPointer: {
    cursor: "pointer",
  },
  search: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    maxWidth: "25rem",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1.5),
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  searchIcon: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
    },
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    },
  },
  btn: {
    padding: theme.spacing(1),
  },
  searchButton: {
    cursor: "pointer",
  },
  categories: {
    cursor: "pointer",
    "& p": {
      marginBottom: "0",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  categoriesLabel: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      color: "inherit",
    },
  },
  menuItem: {
    "&:not(:first-child)": {
      borderTop: "1px solid var(--clr-grey-light)",
    },
  },
  mobileMenuItemIcon: {
    paddingLeft: 0,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export { useStyles };
