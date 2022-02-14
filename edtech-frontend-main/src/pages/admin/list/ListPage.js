import React, { useState, useEffect } from "react";

// imports for components from MUI library
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// imports for MUI components
import { MuiPrimarySearchAppBar } from "../../../components/MUI/MuiPrimarySearchAppBar";

// imports for custom components
import { Footer } from "../../../components/UI/Footer";

// imports for custom hooks
import useLoader from "../../../hooks/useLoader";
import useNotification from "../../../hooks/useNotification";
import { useHistory, Link } from "react-router-dom";

// imports for routes
import { routeUtils, routeConstants } from "../../../routes";

// imports for utils
import * as utils from "../../../utils";

// imports for APIs
import * as coursesApi from "../../../api/coursesApi";

// imports for styles
import classes from "./ListPage.module.css";

const ListPage = () => {
  const { loader, isLoading, showLoader, hideLoader } = useLoader();
  const { notification, showNotification } = useNotification();
  const history = useHistory();

  const [coursesList, setCoursesList] = useState([]);
  const [isPublishedFilterOn, setIsPublishedFilterOn] = useState(false);

  const navigateToEditCoursePage = (courseId) => {
    history.push(routeUtils.getEditPageRouteUrl(courseId)); // redirect to course edit page on click of edit icon
  };

  const handlePublishedFilterChange = (event) => {
    setIsPublishedFilterOn(event.target.checked);
  };

  const getCoursesSuccessCallback = (response) => {
    setCoursesList(response.data);
    hideLoader();
  };

  const getCoursesFailureCallback = (error, errorMessage) => {
    // show errors from specific to generic
    if (errorMessage) {
      showNotification(errorMessage);
    } else {
      showNotification(error.toString());
    }
    hideLoader();
  };

  useEffect(() => {
    showLoader();
    isPublishedFilterOn
      ? coursesApi.getAllPublishedCourses(
          getCoursesSuccessCallback,
          getCoursesFailureCallback
        )
      : coursesApi.getAllCourses(
          getCoursesSuccessCallback,
          getCoursesFailureCallback
        );
  }, [isPublishedFilterOn]);

  const deleteCourseHandler = (courseId) => {
    showLoader();
    coursesApi.deleteCourse(
      courseId,
      // success callback
      (response) => {
        setCoursesList(coursesList.filter((course) => course._id !== courseId));
        showNotification("Course deleted successfully!");
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
  };

  return (
    <div className={classes.listPage}>
      {/* Header */}
      <MuiPrimarySearchAppBar isProfileVisible={true} />

      {/* Main Content */}
      <main className={classes.listPageContent}>
        {/* Table Main Action Header */}
        <article className={classes.tableMainActionHeader}>
          <Link to={routeConstants.ROUTE_URL.ADD_COURSE}>
            <Button variant="contained" color="secondary">
              <AddIcon />
              Add Course
            </Button>
          </Link>
          <FormControlLabel
            control={
              <Switch
                checked={isPublishedFilterOn}
                onChange={handlePublishedFilterChange}
                name="publishedCoursesFilter"
                color="secondary"
              />
            }
            className={classes.publishedFilter}
            label="Published"
          />
        </article>

        {/* Courses in Tabular Format */}
        {isLoading ? (
          <section className={classes.loaderContainer}>{loader}</section>
        ) : (
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell>Course ID</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Instructor</TableCell>
                  <TableCell align="right">
                    Duration <br />
                    (in h)
                  </TableCell>
                  <TableCell>Published</TableCell>
                  <TableCell align="right">
                    Price <br />
                    (in INR)
                  </TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coursesList.map((course) => (
                  <TableRow key={course._id}>
                    <TableCell component="th" scope="row">
                      {course._id}
                    </TableCell>
                    <TableCell>{course.category}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.author}</TableCell>
                    <TableCell align="right">
                      {utils.getFormattedTimeInHoursAndMinutes(course.duration)}
                    </TableCell>
                    <TableCell>{course.published ? "Yes" : "No"}</TableCell>
                    <TableCell align="right">
                      {course.priceAfterDiscount?course.priceAfterDiscount.toFixed(2):"--"}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        aria-label="edit course"
                        aria-controls="admin actions"
                        aria-haspopup="false"
                        color="inherit"
                        onClick={() => navigateToEditCoursePage(course._id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete course"
                        aria-controls="admin actions"
                        aria-haspopup="false"
                        color="inherit"
                        onClick={() => deleteCourseHandler(course._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {notification}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ListPage;
