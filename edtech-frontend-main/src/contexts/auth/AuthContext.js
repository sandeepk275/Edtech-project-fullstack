import React, { createContext, useState, useContext } from "react";

// imports for 3rd party libraries
import { useHistory } from "react-router-dom";

// imports for routes
import * as routeConstants from "../../routes/routeConstants";

// imports for utils
import * as utils from "../../utils";

// imports for constants
import * as authConstants from "./authConstants";

// imports for API methods
import * as userApi from "../../api/userApi";

// imports for custom hooks
import useLoader from "../../hooks/useLoader";
import useNotification from "../../hooks/useNotification";
import useTabs from "../../hooks/useTabs";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const { showLoader, hideLoader } = useLoader();
  const { notification, showNotification } = useNotification();
  const { tabValue, handleTabChange } = useTabs();

  const [currentUser, setCurrentUser] = useState(null);

  // Variable to check whether a user is logged in either from state or from local storage
  const isLoggedIn =
    currentUser ||
    utils.getFromLocalStorage(utils.constants.LOCAL_STORAGE_KEY.USER)
      ? true
      : false;

  // Function to get details of logged-in user either from state or from local storage
  const getLoggedInUserDetails = () => {
    return (
      currentUser ||
      utils.getFromLocalStorage(utils.constants.LOCAL_STORAGE_KEY.USER)
    );
  };

  // Function to get the role of logged-in user
  const getLoggedInUserRole = () => {
    return getLoggedInUserDetails().role;
  };

  // Function to call login API and pass success and failure callbacks to it
  const login = ({ email, password }) => {
    showLoader();
    userApi.doLogin(
      { email: email, password: password },
      // success callback
      (response) => {
        setCurrentUser(response.data);

        // set logged-in user's details in local storage
        utils.setInLocalStorage(
          utils.constants.LOCAL_STORAGE_KEY.USER,
          response.data
        );

        hideLoader();

        // show the success message inside Snackbar component
        showNotification("Logged in successfully!");

        // redirect to home page on successful login of user
        if (getLoggedInUserRole() === authConstants.ROLE.USER) {
          history.push(routeConstants.ROUTE_URL.HOME);
        }

        // redirect to list page on successful login of admin
        if (getLoggedInUserRole() === authConstants.ROLE.ADMIN) {
          history.push(routeConstants.ROUTE_URL.COURSES_LIST);
        }
      },
      // failure callback
      (error, errorMessage) => {
        // show errors from specific to generic
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }
        hideLoader();
      }
    );
  };

  // Function to call signup API and pass success and failure callbacks to it
  const signup = (values) => {
    showLoader();
    userApi.doSignup(
      values,
      // success callback
      (response) => {
        handleTabChange(null, 0); // redirect to login tab when signup is successful
        hideLoader();

        // show the success message inside Snackbar component
        showNotification("Signed up successfully! Please login.");
      },
      // failure callback
      (error, errorMessage) => {
        // show errors from specific to generic
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }
        hideLoader();
      }
    );
  };

  // Function to call logout API and pass success and failure callbacks to it
  const logout = () => {
    showLoader();
    userApi.doLogout(
      getLoggedInUserDetails()._id,
      // success callback
      (response) => {
        setCurrentUser(null);

        // clear all details of logged-in user inside local storage
        utils.clearLocalStorage();

        hideLoader();
        // show the success message inside Snackbar component
        showNotification("Logged out successfully!");
        history.push(routeConstants.ROUTE_URL.ONBOARD); // redirect to onboard page on successful logout
      },
      // failure callback
      (error, errorMessage) => {
        // show errors from specific to generic
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }
        hideLoader();
      }
    );
  };

  const authValues = {
    login,
    signup,
    logout,
    isLoggedIn,
    getLoggedInUserDetails,
    tabValue,
    handleTabChange,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {children} {notification}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
