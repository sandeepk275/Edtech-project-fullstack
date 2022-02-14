import * as utils from "../../../utils";

const validateCheckoutForm = (values) => {
  let errors = {};

  /*
   Rule 1: flat / building no. is required
   */
  if (!values.flatOrBuilding.trim()) {
    errors.flatOrBuilding = "Required";
  }

  /*
   Rule 2: street is required
   */
  if (!values.street.trim()) {
    errors.street = "Required";
  }

  /*
   Rule 3: city is required
   */
  if (!values.city.trim()) {
    errors.city = "Required";
  }

  /*
   Rule 4: state is required
   */
  if (!values.state.trim()) {
    errors.state = "Required";
  }

  /*
   Rule 4: country is required
   */
  if (!values.country.trim()) {
    errors.country = "Required";
  }

  /*
   Rule 5: pin code is required
   Rule 6: pin is numerical
   Rule 7: pin should have exactly 6 numbers long
   */
  if (!values.pin.trim()) {
    errors.pin = "Required";
  } else if (!utils.checkIfValueIsInteger(values.pin)) {
    errors.pin = "Pin should contain only digits";
  } else if (values.pin.length !== utils.constants.PIN_CODE_LEN) {
    errors.pin = `Pin should be exactly ${utils.constants.PIN_CODE_LEN} digits long`;
  }

  /*
   Rule 8: phone number is required
   Rule 9: phone number is numerical
   Rule 10: phone number is exactly 10 numbers long
   */
  if (!values.phone) {
    errors.phone = "Required";
  } else if (!utils.checkIfValueIsInteger(values.phone)) {
    errors.phone = "Phone number should contain only digits";
  } else if (values.phone.length !== utils.constants.PHONE_NUMBER_LEN) {
    errors.phone = `Phone number should be exactly ${utils.constants.PHONE_NUMBER_LEN} digits long`;
  }

  return errors;
};

export default validateCheckoutForm;
