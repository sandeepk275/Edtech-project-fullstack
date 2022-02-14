import * as utils from "../../utils";

const validateCourseForm = (values) => {
  let errors = {};

  /*
   Rule 1: title is required
   */
  if (!values.title.trim()) {
    errors.title = "Required";
  }

  /*
   Rule 2: category is required
   */
  if (!values.category.trim()) {
    errors.category = "Required";
  }

  /*
   Rule 3: author is required
   */
  if (!values.author.trim()) {
    errors.author = "Required";
  }

  /*
   Rule 4: skills is required
   */
  if (!values.skills.trim()) {
    errors.skills = "Required";
  }

  /*
   Rule 5: chapters is required
   */
  if (!values.chapters.trim()) {
    errors.chapters = "Required";
  }

  /*
   Rule 6: priceInRupees is required
   Rule 7: priceInRupees should be a numerical value (integer or decimal)
   Rule 8: priceInRupees cannot be negative
   */
  if (!values.priceInRupees.trim()) {
    errors.priceInRupees = "Required";
  } else if (!utils.checkIfValueIsNumerical(values.priceInRupees)) {
    errors.priceInRupees = "Price should be numerical";
  } else if (values.priceInRupees < 0) {
    errors.priceInRupees = "Price cannot be negative";
  }

  /*
   Rule 9: priceAfterDiscount is required
   Rule 10: priceAfterDiscount should be a numerical value (integer or decimal)
   Rule 11: priceAfterDiscount cannot be negative
   */
  if (!values.priceAfterDiscount.trim()) {
    errors.priceAfterDiscount = "Required";
  } else if (!utils.checkIfValueIsNumerical(values.priceAfterDiscount)) {
    errors.priceAfterDiscount = "Price should be numerical";
  } else if (values.priceAfterDiscount < 0) {
    errors.priceAfterDiscount = "Price cannot be negative";
  }

  /*
   Rule 12: duration is required
   Rule 13: duration should be an integer value
   Rule 14: duration cannot be negative
   */
  if (!values.duration.trim()) {
    errors.duration = "Required";
  } else if (!utils.checkIfValueIsInteger(values.duration)) {
    errors.duration = "Duration should contain only digits";
  } else if (values.duration < 0) {
    errors.duration = "Duration cannot be negative";
  }

  /*
   Rule 15: popularity is required
   Rule 16: popularity should be a numerical value (integer or decimal)
   Rule 17: popularity cannot be negative
   */
  if (!values.popularity.trim()) {
    errors.popularity = "Required";
  } else if (!utils.checkIfValueIsNumerical(values.popularity)) {
    errors.popularity = "Popularity should be numerical";
  } else if (values.popularity < 0) {
    errors.popularity = "Popularity cannot be negative";
  }

  /*
   Rule 18: imageURL should be a valid URL, if provided
   */
  if (values.imageURL && !utils.checkIfValidUrl(values.imageURL)) {
    errors.imageURL = "Invalid image URL";
  }

  /*
   Rule 19: videoURL is required
   Rule 20: videoURL should be a valid URL
   */
  if (!values.videoURL.trim()) {
    errors.videoURL = "Required";
  } else if (!utils.checkIfValidUrl(values.videoURL)) {
    errors.videoURL = "Invalid video URL";
  }

  return errors;
};

export default validateCourseForm;
