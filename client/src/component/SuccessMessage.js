import React from "react";
import { Alert } from "react-bootstrap";

const SuccessMessage = ({ variant = "info", children }) => {
  return (
    <div className="justify-center align-middle mx-auto w-50">
      <Alert
        variant={variant}
        style={{ fontSize: 20 }}
        className="text-center p-2 align-middle"
      >
        <strong>{children}</strong>
      </Alert>
    </div>
  );
};

export default SuccessMessage;
