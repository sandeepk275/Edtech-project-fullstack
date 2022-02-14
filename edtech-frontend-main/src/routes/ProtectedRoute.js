import React from "react";

// imports for 3rd party libraries
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// imports for custom hooks
import { useAuth, authConstants } from "../contexts/auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn, getLoggedInUserDetails } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (rest.role === authConstants.ROLE.USER) {
          if (
            isLoggedIn &&
            getLoggedInUserDetails().role === authConstants.ROLE.USER
          ) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location },
                }}
              />
            );
          }
        }

        if (rest.role === authConstants.ROLE.ADMIN) {
          if (
            isLoggedIn &&
            getLoggedInUserDetails().role === authConstants.ROLE.ADMIN
          ) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location },
                }}
              />
            );
          }
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  role: PropTypes.string.isRequired,
};

export default ProtectedRoute;
