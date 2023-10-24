import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBarComponent = (props) => {
  const [isOpen, setOpen] = useState(props.open);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => handleClose}
        message={props.message}
      >
        <Alert
          onClose={() => handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBarComponent;
