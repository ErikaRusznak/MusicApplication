import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <div className="justify-center align-middle mx-auto ">
      <Alert
        variant={variant}
        style={{ fontSize: 20 }}
        className="text-center align-middle"
      >
        <strong>{children}</strong>
      </Alert>
    </div>
  );
};

export default ErrorMessage;
