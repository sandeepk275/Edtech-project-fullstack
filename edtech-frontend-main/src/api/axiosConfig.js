import axios from "axios";

import * as apiConstants from "./utils-api/apiConstants";

const axiosInstance = axios.create({
  baseURL: apiConstants.BASE_URL,
});

// default headers for all Axios requests
axiosInstance.defaults.headers.common[
  apiConstants.REQUEST_HEADER_KEY.CONTENT_TYPE
] = `${apiConstants.REQUEST_HEADER_VALUE.APPLICATION_JSON};${apiConstants.REQUEST_HEADER_VALUE.CHARSET_UTF8}`;
axiosInstance.defaults.headers.common[
  apiConstants.REQUEST_HEADER_KEY.CACHE_CONTROL
] = apiConstants.REQUEST_HEADER_VALUE.NO_CACHE;

export default axiosInstance;
