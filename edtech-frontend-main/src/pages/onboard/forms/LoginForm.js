import React, { useState } from "react";

// imports for 3rd party libraries
import PropTypes from "prop-types";

// imports for components from MUI library
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

// imports for custom hook
import { useForm } from "../../../hooks";
import validateLoginForm from "./validateLoginForm";

// imports for styles
import { useStyles } from "../../../styles/formStyles.js";

const LoginForm = ({ successHandler, isLoginSuccessful }) => {
  const initialFormValues = {
    // the keys are similar to `name` attribute provided to form controls
    email: "",
    password: "",
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialFormValues,
    validateLoginForm,
    successHandler,
    isLoginSuccessful // determining if values of form control should be cleared
  );
  const { email, password } = values;

  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <form id="loginForm" noValidate autoComplete="off">
      <div className={classes.formControlsContainer}>
        <FormControl variant="filled">
          <InputLabel htmlFor="loginEmail" color="secondary">
            Email
          </InputLabel>
          <FilledInput
            id="loginEmail"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            autoComplete="on"
            color="secondary"
          />
          {errors.email && <div className={classes.error}>{errors.email}</div>}
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor="loginPassword" color="secondary">
            Password
          </InputLabel>
          <FilledInput
            id="loginPassword"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
            autoComplete="on"
            color="secondary"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPasswordChange}
                  onMouseDown={handleShowPasswordMouseDown}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.password && (
            <div className={classes.error}>{errors.password}</div>
          )}
        </FormControl>
      </div>

      <Button
        variant="contained"
        color="secondary"
        fullWidth={true}
        size="large"
        className={classes.formButton}
        onClick={handleSubmit}
      >
        log me in
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  successHandler: PropTypes.func.isRequired,
  isLoginSuccessful: PropTypes.bool.isRequired,
};

export default LoginForm;
