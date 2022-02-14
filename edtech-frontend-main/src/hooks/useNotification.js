import React, { useState } from "react";

// imports for custom components
import { MuiSnackbar } from "../components/MUI/MuiSnackbar";

const useNotification = (props) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showNotification = (msg) => {
    setIsNotificationOpen(true);
    setMessage(msg);
  };

  const hideNotification = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsNotificationOpen(false);
    setMessage("");
    if (props && props.hideNotificationSuccessCallback) {
      props.hideNotificationSuccessCallback();
    }
  };

  const notification = (
    <MuiSnackbar
      isOpen={isNotificationOpen}
      message={message}
      handleClose={hideNotification}
    />
  );

  return { notification, showNotification };
};

export default useNotification;
