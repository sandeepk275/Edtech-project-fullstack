import { useState, useEffect } from "react";

const useForm = (
  valuesInitialState, // initial state of form values
  validate, // function to validate form values
  successCallback, // callback to be executed when all values of form control are valid (a.k.a. validation is successful)
  shouldSetValuesToInitialState // whether form values should be set to initial state
) => {
  // form values entered on UI
  const [values, setValues] = useState(valuesInitialState);
  // form errors based on values entered on UI
  const [errors, setErrors] = useState({});

  // avoids invoking callback function when the errors object is empty on first page load
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Event handler detecting change in any form control
  const handleChange = (e) => {
    const { name, value } = e.target;
    // key in state object = `name` attribute of form control
    setValues({ ...values, [name]: value });
  };

  // Event handler detecting click of Submit button inside form
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // clears form values
  useEffect(() => {
    shouldSetValuesToInitialState && setValues(valuesInitialState);
  }, [shouldSetValuesToInitialState]);

  useEffect(() => {
    // if the submit button is clicked atleast once and there's no error, invoke success callback
    if (isSubmitting && Object.keys(errors).length === 0 && successCallback) {
      successCallback(values);
    }
  }, [errors]);

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
