import React from "react";

// imports for styles
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* copyright text */}
      <p className={classes.copyright}>
        Copyright &copy;&nbsp;
        <a
          href="https://www.upgrad.com/"
          target="_blank"
          rel="noreferrer"
          className={classes.company}
        >
          upGrad Education
        </a>
      </p>

      {/* social media links */}
      <article className={classes.socialLinks}>
        <a
          href="https://www.facebook.com/upGradGlobal"
          target="_blank"
          rel="noreferrer"
          className={classes.socialLink}
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/upGrad_edu"
          target="_blank"
          rel="noreferrer"
          className={classes.socialLink}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/ueducation/"
          target="_blank"
          rel="noreferrer"
          className={classes.socialLink}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </article>

      {/* creator details */}
      <p className={classes.creator}>
        created by{" "}
        <a href="https://www.srishtigupta.in" target="_blank" rel="noreferrer">
          srishti gupta
        </a>
      </p>
    </footer>
  );
};

export default Footer;
