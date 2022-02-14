import React, { Fragment } from "react";

// imports for utils
import * as utils from "../../../utils";

// imports for 3rd party libraries
import { useHistory } from "react-router-dom";

// imports for routes
import * as routeConstants from "../../../routes/routeConstants";

// imports for components from MUI library
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";

// imports for MUI components
import { MuiPrimarySearchAppBar } from "../../../components/MUI/MuiPrimarySearchAppBar";

// imports for custom components
import { Footer } from "../../../components/UI/Footer";

// imports for custom hooks
import useNotification from "../../../hooks/useNotification";

// imports for styles
import classes from "./SummaryPage.module.css";

const SummaryPage = () => {
  const history = useHistory();

  const hideNotificationSuccessCallback = () => {
    history.push(routeConstants.ROUTE_URL.ROOT);
  };

  const { notification, showNotification } = useNotification({
    hideNotificationSuccessCallback,
  });

  // get details of course selected by and address of currently logged-in user
  const courseDetails = utils.getFromLocalStorage(
    utils.constants.LOCAL_STORAGE_KEY.COURSE
  );
  const addressDetails = utils.getFromLocalStorage(
    utils.constants.LOCAL_STORAGE_KEY.ADDRESS
  );

  const placeOrder = () => {
    // show the success message inside Snackbar component
    showNotification("Your order has been successfully placed!");
  };

  return (
    <div className={classes.summaryPage}>
      <MuiPrimarySearchAppBar isLogoClickable={true} isProfileVisible={true} />
      <main className={classes.summaryPageContent}>
        {courseDetails && addressDetails ? (
          <Fragment>
            {/* Summary Heading */}
            <Typography
              variant="inherit"
              component="h3"
              color="textSecondary"
              className={classes.summaryPageHeading}
            >
              Summary
            </Typography>
            {/* Summary Content */}
            <article className={classes.summary}>
              {/* Course Summary */}
              <div>
                <Typography
                  variant="inherit"
                  component="h4"
                  color="secondary"
                  gutterBottom
                >
                  Course:
                </Typography>
                <Typography variant="inherit" component="p" gutterBottom>
                  <span className={classes.bold}>Title: </span>
                  {courseDetails.title}
                </Typography>
                <Typography variant="inherit" component="p" gutterBottom>
                  <span className={classes.bold}>Author: </span>
                  {courseDetails.author}
                </Typography>
                <Typography variant="inherit" component="p" gutterBottom>
                  <span className={classes.bold}>Price: </span>
                  {courseDetails.priceAfterDiscount}
                </Typography>
              </div>

              {/* Address Summary */}
              <div>
                <Typography
                  variant="inherit"
                  component="h4"
                  color="secondary"
                  gutterBottom
                >
                  Address:
                </Typography>
                <Typography variant="inherit" component="p" gutterBottom>
                  {`${addressDetails.flatOrBuilding}, ${addressDetails.street}`}
                </Typography>
                <Typography variant="inherit" component="p" gutterBottom>
                  {`${addressDetails.city}, ${addressDetails.state}, ${addressDetails.country}`}
                </Typography>
                <Typography
                  variant="inherit"
                  component="p"
                  gutterBottom
                ></Typography>
                <Typography
                  variant="inherit"
                  component="p"
                  className={classes.pin}
                  gutterBottom
                >
                  <RoomIcon fontSize="small" />
                  &nbsp;
                  {addressDetails.pin}
                </Typography>
                <Typography
                  variant="inherit"
                  component="p"
                  className={classes.phone}
                  gutterBottom
                >
                  <PhoneIcon fontSize="small" />
                  &nbsp;
                  {addressDetails.phone}
                </Typography>
              </div>
            </article>
            <div className={classes.placeOrderBtn}>
              <Button
                variant="contained"
                color="secondary"
                onClick={placeOrder}
              >
                place order
              </Button>
            </div>
          </Fragment>
        ) : courseDetails ? (
          history.push(routeConstants.ROUTE_URL.CHECKOUT)
        ) : (
          history.push(routeConstants.ROUTE_URL.ROOT)
        )}
        {notification}
      </main>
      <Footer />
    </div>
  );
};

export default SummaryPage;
