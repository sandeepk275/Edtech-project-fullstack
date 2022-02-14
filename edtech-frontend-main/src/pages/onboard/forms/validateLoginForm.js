import * as utils from "../../../utils";

const validateLoginForm = (values) => {
  let errors = {};

  /*
   Rule 1: email is required
   Rule 2: email should be valid
   */
  if (!values.email.trim()) {
    errors.email = "Required";
  } else if (!utils.checkValidEmail(values.email)) {
    errors.email = "Invalid email";
  }

  /*
   Rule 3: password is required
   */
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

export default validateLoginForm;
