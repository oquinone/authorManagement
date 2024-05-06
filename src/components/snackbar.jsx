import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBarComponent = (props) => {
  const { open, handleClose } = props;
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => handleClose()}
        message={props.message}
      >
        <Alert
          onClose={() => handleClose()}
          severity="success"
          sx={{ width: "100%" }}
        >
          {"Successfully Added Author"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBarComponent;
