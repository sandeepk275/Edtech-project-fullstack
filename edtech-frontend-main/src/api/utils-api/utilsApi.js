import axios from "../axiosConfig";

/**
 * Function to build string from path parameters
 * @param {Array} pathParameters - array consisting of ordered path parameters
 * @returns substring of URL formed from path parameters
 */
const buildUrlWithPathParameters = (pathParameters) => {
  if (pathParameters && pathParameters.length !== 0) {
    let pathParametersString = "";
    for (let i = 0; i < pathParameters.length; i++) {
      pathParametersString += `/${pathParameters[i]}`;
    }
    return pathParametersString;
  } else {
    return "";
  }
};

/**
 * Function to build string from URL parameters
 * @param {Object} urlParameters - object containing the key-value pairs of the URL parameters
 * @returns {String} URI-encoded substring of URL formed from URL parameters
 */
const buildUrlWithUrlParameters = (urlParameters) => {
  if (!urlParameters) {
    return "";
  } else {
    let urlParametersString = "";
    for (let key in urlParameters) {
      if (urlParametersString) {
        urlParametersString += "&";
      }
      urlParametersString += key + "=" + encodeURIComponent(urlParameters[key]);
    }
    urlParametersString = "?" + urlParametersString;
    return urlParametersString;
  }
};

/**
 * Function to send an API request via Axios
 * @param {String} requestMethod - HTTP method
 * @param {String} requestUrl - URL to send request to
 * @param {Array} pathParameters - path parameters to be attached to request URL
 * @param {Object} urlParameters - URL parameters to be attached to request URL
 * @param {Object} requestDataBody - Data to be sent as body along with request
 * @param {Object} requestHeaders - Request headers to be sent along with request
 * @param {Function} successCallback - callback function to be invoked if the request succeeds
 * @param {Function} failureCallback - callback function to be invoked if the request fails
 */
export const sendApiRequest = async (
  requestMethod,
  requestUrl,// /login
  pathParameters,
  urlParameters,
  requestDataBody,
  requestHeaders,
  successCallback,
  failureCallback
) => {
  const url =
    requestUrl +
    buildUrlWithPathParameters(pathParameters) +
    buildUrlWithUrlParameters(urlParameters);
  try {
    const response = await axios({
      method: requestMethod,
      url: url,
      data: requestDataBody,
      headers: requestHeaders,
    });
    if (response && response.statusText === "OK") {
      if (successCallback) {
        successCallback(response);
      }
    }
  } catch (error) {
    // control comes here when a request was made and the server responded with a status code that falls out of the range of 2xx
    if (failureCallback) {
      if (error && error.request && error.request.responseText) {
        const errorMessage = JSON.parse(error.request.responseText).message;
        failureCallback(error, errorMessage);
      } else {
        failureCallback(error);
      }
      return;
    }
    throw error;
  }
};
