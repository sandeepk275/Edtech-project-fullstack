import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "min(90%, 20rem)",
    cursor: "pointer",
  },
  media: {
    height: 180,
  },
  title: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    marginBottom: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      height: "4rem",
    },
  },
  footerInfo: {
    display: "block",
    color: "var(--clr-grey-dark)",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginBottom: 0,
  },
  originalPrice: {
    textDecoration: "line-through",
  },
  discountedPrice: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  "@supports (-webkit-line-clamp: 2)": {
    title: {
      whiteSpace: "initial",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
    },
  },
}));

export { useStyles };
