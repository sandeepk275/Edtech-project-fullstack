import React, { Fragment } from "react";

// imports for MUI components
import { MuiTabs } from "../../components/MUI/MuiTabs";

// imports for custom components
import { LoginForm, SignupForm } from "./forms";

// imports for custom hooks
import useLoader from "../../hooks/useLoader";
import useNotification from "../../hooks/useNotification";
import { useAuth } from "../../contexts/auth";

// imports for assets
import logo from "../../assets/logo.png";

// imports for styles
import { useStyles } from "./styles.js";

const OnboardPage = () => {
  const classes = useStyles();
  const { loader, isLoading } = useLoader();
  const { notification } = useNotification();
  const { isLoggedIn, login, signup, tabValue, handleTabChange } = useAuth();

  // array consisting of details of tabs to be displayed
  const tabsDetails = [
    {
      id: "login",
      label: "login",
      children: (
        <LoginForm
          successHandler={(values) => login(values)}
          isLoginSuccessful={isLoggedIn ? true : false}
        />
      ),
    },
    {
      id: "signup",
      label: "signup",
      children: <SignupForm successHandler={(values) => signup(values)} />,
    },
  ];

  return (
    <Fragment>
      <header className={classes.onboardPageHeader}>
        <img src={logo} alt="upGrad Logo" className={classes.logo} />
      </header>
      <main className={classes.onboardPageContent}>
        {isLoading ? (
          <div className={classes.loaderContainer}>{loader}</div>
        ) : (
          <div className={classes.onboardPageTabsContainer}>
            <MuiTabs
              tabValue={tabValue}
              handleTabChange={handleTabChange}
              data={tabsDetails}
            ></MuiTabs>
          </div>
        )}
        {notification}
      </main>
    </Fragment>
  );
};

export default OnboardPage;
