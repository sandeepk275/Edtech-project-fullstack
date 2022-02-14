import React from "react";

// imports for 3rd party libraries
import PropTypes from "prop-types";

// imports for utils
import * as utils from "../../../utils";

// imports for components from Material UI
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";

// imports for styles
import { useStyles } from "./styles.js";

const MuiCard = ({ data, handleClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardMedia
        className={classes.media}
        image={data.imageURL}
        title={data.title}
      />
      <CardContent>
        <Typography variant="h5" component="h3" className={classes.title}>
          {data.title}
        </Typography>
        <div className={classes.footerInfo}>
          <Typography>{data.author}</Typography>
          <div className={classes.flex}>
            <StarIcon fontSize="inherit" color="primary" />
            &nbsp;
            <Typography>{data.popularity.toFixed(1)}</Typography>
          </div>
        </div>
        <div className={classes.footerInfo}>
          <Typography variant="inherit" component="h5">
            {utils.getFormattedTimeInHoursAndMinutes(data.duration)}
          </Typography>
          <Typography variant="inherit" component="h5">
            INR{" "}
            <span className={classes.originalPrice}>{data.priceInRupees}</span>
            &nbsp;
            <span className={classes.discountedPrice}>
              {data.priceAfterDiscount}
            </span>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

MuiCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
};

export default MuiCard;
