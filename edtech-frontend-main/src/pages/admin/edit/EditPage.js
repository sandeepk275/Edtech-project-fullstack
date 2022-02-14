import React, { Fragment, useState, useEffect } from "react";

// imports for 3rd party libraries
import { useHistory } from "react-router-dom";

// imports for routes
import * as routeConstants from "../../../routes/routeConstants";

// imports for MUI components
import { MuiPrimarySearchAppBar } from "../../../components/MUI/MuiPrimarySearchAppBar";

// imports for components from MUI library
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Button from "@material-ui/core/Button";

// imports for custom components
import { Footer } from "../../../components/UI/Footer";

// imports for custom hooks
import { useForm } from "../../../hooks";
import validateCourseForm from "../validateCourseForm";
import useLoader from "../../../hooks/useLoader";
import useNotification from "../../../hooks/useNotification";

// imports for APIs
import * as coursesApi from "../../../api/coursesApi";

// imports for styles
import classes from "../Course.module.css";
import { useStyles } from "../../../styles/formStyles";

const EditPage = (props) => {
  // merging all styles imported
  const cssClasses = { ...classes, ...useStyles() };

  const history = useHistory();
  const { loader, isLoading, showLoader, hideLoader } = useLoader();
  const { notification, showNotification } = useNotification();

  const navigateToListPage = () => {
    history.push({
      pathname: routeConstants.ROUTE_URL.COURSES_LIST,
    });
  };

  const [courseDetails, setCourseDetails] = useState({});

  const { values, errors, handleChange, handleSubmit } = useForm(
    courseDetails,
    validateCourseForm,
    navigateToListPage,
    false // determining if values of form control should be cleared
  );

  const {
    title,
    description,
    category,
    author,
    skills,
    chapters,
    priceInRupees,
    priceAfterDiscount,
    duration,
    popularity,
    imageURL,
    videoURL,
  } = values;
 
  // get all data of course with given id
  useEffect(() => {
    showLoader();
    const courseId = props.match.params.id;
    coursesApi.getCourseById(
      courseId,
      // success callback
      (response) => {
        setCourseDetails(response.data);
        values.title = response.data.title;
        values.description = response.data.description;
        values.category = response.data.category;
        values.author = response.data.author;
        values.skills = response.data.skills;
        values.chapters = response.data.chapters;
        values.priceInRupees = response.data.priceInRupees;
        values.priceAfterDiscount = response.data.priceAfterDiscount;
        values.duration = response.data.duration;
        values.popularity = response.data.popularity;
        values.imageURL = response.data.imageURL;
        values.videoURL = response.data.videoURL;
        hideLoader();
      },
      // failure callback
      (error, errorMessage) => {
        // show errors from specific to generic
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }
        hideLoader();
      }
    );
  }, []);

  const handlePublishedFilterChange = (event) => {
    setCourseDetails({ ...courseDetails, published: event.target.checked });
  };

  const editCourseHandler = () => {
    values.published = courseDetails.published;
    showLoader();
    coursesApi.editCourse(
      courseDetails._id,
      values,
      // success callback
      (response) => {
        showNotification("Course Edited successfully!");
        hideLoader();
        navigateToListPage();
      },
      // failure callback
      (error, errorMessage) => {
        // show errors from specific to generic
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }
        hideLoader();
      }
    );
  };

  return (
    <div className={cssClasses.coursePage}>
      {/* Header */}
      <MuiPrimarySearchAppBar isLogoClickable={true} isProfileVisible={true} />

      {/* Main Content */}
      <main className={cssClasses.coursePageContent}>
        {isLoading ? (
          loader
        ) : (
          <Fragment>
            <Button
              variant="contained"
              className={classes.backButton}
              onClick={navigateToListPage}
            >
              Go Back
            </Button>
            <Typography
              variant="inherit"
              component="h3"
              color="secondary"
              className={cssClasses.coursePageHeading}
            >
              Edit Course
            </Typography>
            <form
              id="editCourseForm"
              noValidate
              autoComplete="off"
              className={cssClasses.courseForm}
            >
              <FormControl variant="filled">
                <InputLabel htmlFor="title" color="secondary">
                  Title
                </InputLabel>
                <FilledInput
                  id="title"
                  name="title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  autoComplete="on"
                  color="secondary"
                />
                {errors.title && (
                  <div className={cssClasses.error}>{errors.title}</div>
                )}
              </FormControl>
              <TextField
                id="description"
                name="description"
                multiline
                rows={4}
                label="Description"
                value={values.description}
                onChange={handleChange}
                autoComplete="on"
                color="secondary"
                variant="filled"
              />
              {errors.description && (
                <div className={cssClasses.error}>{errors.description}</div>
              )}
              <div className={cssClasses.controlsGroup}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="category" color="secondary">
                    Category
                  </InputLabel>
                  <FilledInput
                    id="category"
                    name="category"
                    type="text"
                    value={values.category}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.category && (
                    <div className={cssClasses.error}>{errors.category}</div>
                  )}
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="author" color="secondary">
                    Author
                  </InputLabel>
                  <FilledInput
                    id="author"
                    name="author"
                    type="text"
                    value={values.author}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.author && (
                    <div className={cssClasses.error}>{errors.author}</div>
                  )}
                </FormControl>
              </div>
              <FormControl variant="filled">
                <InputLabel htmlFor="skills" color="secondary">
                  Skills
                </InputLabel>
                <FilledInput
                  id="skills"
                  name="skills"
                  type="text"
                  value={values.skills}
                  onChange={handleChange}
                  autoComplete="on"
                  color="secondary"
                />
                {errors.skills && (
                  <div className={cssClasses.error}>{errors.skills}</div>
                )}
              </FormControl>
              <FormControl variant="filled">
                <InputLabel htmlFor="chapters" color="secondary">
                  Chapters
                </InputLabel>
                <FilledInput
                  id="chapters"
                  name="chapters"
                  type="text"
                  value={values.chapters}
                  onChange={handleChange}
                  autoComplete="on"
                  color="secondary"
                />
                {errors.chapters && (
                  <div className={cssClasses.error}>{errors.chapters}</div>
                )}
              </FormControl>
              <div className={classes.controlsGroup}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="priceInRupees" color="secondary">
                    Price before discount (INR)
                  </InputLabel>
                  <FilledInput
                    id="priceInRupees"
                    name="priceInRupees"
                    type="text"
                    value={values.priceInRupees}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.priceInRupees && (
                    <div className={cssClasses.error}>
                      {errors.priceInRupees}
                    </div>
                  )}
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="priceAfterDiscount" color="secondary">
                    Price after discount (INR)
                  </InputLabel>
                  <FilledInput
                    id="priceAfterDiscount"
                    name="priceAfterDiscount"
                    type="text"
                    value={values.priceAfterDiscount}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.priceAfterDiscount && (
                    <div className={cssClasses.error}>
                      {errors.priceAfterDiscount}
                    </div>
                  )}
                </FormControl>
              </div>
              <div className={classes.controlsGroup}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="duration" color="secondary">
                    Duration (min.)
                  </InputLabel>
                  <FilledInput
                    id="duration"
                    name="duration"
                    type="text"
                    value={values.duration}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.duration && (
                    <div className={cssClasses.error}>{errors.duration}</div>
                  )}
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="popularity" color="secondary">
                    Popularity
                  </InputLabel>
                  <FilledInput
                    id="popularity"
                    name="popularity"
                    type="text"
                    value={values.popularity}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.popularity && (
                    <div className={cssClasses.error}>{errors.popularity}</div>
                  )}
                </FormControl>
              </div>
              <div className={classes.controlsGroup}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="imageURL" color="secondary">
                    Image URL
                  </InputLabel>
                  <FilledInput
                    id="imageURL"
                    name="imageURL"
                    type="text"
                    value={values.imageURL}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.imageURL && (
                    <div className={cssClasses.error}>{errors.imageURL}</div>
                  )}
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="videoURL" color="secondary">
                    Video URL
                  </InputLabel>
                  <FilledInput
                    id="videoURL"
                    name="videoURL"
                    type="text"
                    value={values.videoURL}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.videoURL && (
                    <div className={cssClasses.error}>{errors.videoURL}</div>
                  )}
                </FormControl>
              </div>
              <FormControlLabel
                control={
                  <Switch
                    id="published"
                    name="published"
                    checked={
                      courseDetails.published ? courseDetails.published : false
                    }
                    onChange={handlePublishedFilterChange}
                    color="secondary"
                  />
                }
                label="Published"
              />

              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={`${cssClasses.courseButton} ${cssClasses.formButton}`}
                onClick={editCourseHandler}
              >
                Edit
              </Button>
            </form>
          </Fragment>
        )}
        {notification}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EditPage;
