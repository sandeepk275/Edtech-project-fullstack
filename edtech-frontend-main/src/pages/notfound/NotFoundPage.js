import React from "react";

// imports for 3rd party libraries
import { Link } from "react-router-dom";

// imports for styles
import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={classes.notFoundPage}>
      <h1>404</h1>
      <p>page not found</p>
      <Link to="/">
        <button className={classes.btn}>go to home</button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
