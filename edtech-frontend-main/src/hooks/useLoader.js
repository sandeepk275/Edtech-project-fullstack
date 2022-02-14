import React, { useState } from "react";

// imports for custom components
import { Loader } from "../components/UI/Loader";

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loader = isLoading && <Loader />;

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return { loader, isLoading, showLoader, hideLoader };
};

export default useLoader;
