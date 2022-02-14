import * as routeConstants from "./routeConstants";

export const getDetailsPageRouteUrl = (courseId) => {
  const regex = /:ID/i;
  return routeConstants.ROUTE_URL.DETAILS.replace(regex, courseId);
};

export const getEditPageRouteUrl = (courseId) => {
  const regex = /:ID/i;
  return routeConstants.ROUTE_URL.EDIT_COURSE.replace(regex, courseId);
};
