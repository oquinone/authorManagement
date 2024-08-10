import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const DeleteAuthorComponent = (props) => {
  const { open, cancel, callDelete } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={cancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Remove Author"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to delete this Author from the database?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => cancel()}>Cancel</Button>
          <Button onClick={() => callDelete()} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteAuthorComponent;
