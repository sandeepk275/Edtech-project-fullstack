// imports for 3rd party libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imports for custom components
import { OnboardPage } from "../pages/onboard";
import { HomePage } from "../pages/user/home";
import { DetailsPage } from "../pages/user/details";
import { ListPage } from "../pages/admin/list";
import { AddPage } from "../pages/admin/add";
import { EditPage } from "../pages/admin/edit";
import { NotFoundPage } from "../pages/notfound";
import { CheckoutPage } from "../pages/user/checkout";
import { SummaryPage } from "../pages/user/summary";

// imports for contexts
import { AuthProvider, authConstants } from "../contexts/auth";

// imports for routes
import ProtectedRoute from "./ProtectedRoute";
import * as routeConstants from "./routeConstants";

const Routes = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* User Routes */}
          <Route
            exact
            path={routeConstants.ROUTE_URL.ONBOARD}
            component={OnboardPage}
          ></Route>
          <Route
            exact
            path={[
              routeConstants.ROUTE_URL.HOME,
              routeConstants.ROUTE_URL.ROOT,
            ]}
            component={HomePage}
          ></Route>
          <Route
            exact
            path={routeConstants.ROUTE_URL.DETAILS}
            component={DetailsPage}
          ></Route>
          <ProtectedRoute
            exact
            path={routeConstants.ROUTE_URL.CHECKOUT}
            component={CheckoutPage}
            role={authConstants.ROLE.USER}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path={routeConstants.ROUTE_URL.SUMMARY}
            component={SummaryPage}
            role={authConstants.ROLE.USER}
          ></ProtectedRoute>

          {/* Admin Routes */}
          <ProtectedRoute
            exact
            path={routeConstants.ROUTE_URL.COURSES_LIST}
            component={ListPage}
            role={authConstants.ROLE.ADMIN}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path={routeConstants.ROUTE_URL.ADD_COURSE}
            component={AddPage}
            role={authConstants.ROLE.ADMIN}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path={routeConstants.ROUTE_URL.EDIT_COURSE}
            component={EditPage}
            role={authConstants.ROLE.ADMIN}
          ></ProtectedRoute>

          {/* Not Found Page Route */}
          <Route
            path={routeConstants.ROUTE_URL.ANY}
            component={NotFoundPage}
          ></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default Routes;
