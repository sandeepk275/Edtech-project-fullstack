export const BASE_URL = "http://localhost:8080/api";

export const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const REQUEST_HEADER_KEY = {
  CONTENT_TYPE: "Content-Type",
  CACHE_CONTROL: "cache-control",
};

export const REQUEST_HEADER_VALUE = {
  APPLICATION_JSON: "application/json",
  CHARSET_UTF8: "charset=UTF-8",
  NO_CACHE: "no-cache",
};

export const USER_API_ROUTE = {
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  LOGOUT: "/logout",
};

export const COURSES_API_ROUTE = {
  TUTORIALS: "/tutorials",
  ADD_COURSE: "tutorials/add",
  GET_CATEGORY: "tutorials/categories",
  TUTORIALSBYTITLE: "/tutorials/title"
};

export const COURSES_API_PATH_PARAMETER = {
  PUBLISHED: "published",
  CATEGORY: "category",
};
