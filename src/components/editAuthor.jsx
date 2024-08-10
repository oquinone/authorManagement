import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useEditAuthorHook } from "../hooks/hooks";
import "../styling/editAuthor.scss";

const EditAuthorComponent = (props) => {
  const { open, closeDialog, updateAuthor } = props;
  const {
    firstName,
    lastName,
    located,
    phoneNumber,
    editFirstName,
    editLastName,
    editLocated,
    editPhoneNum,
  } = useEditAuthorHook();

  return (
    <div>
      <Dialog open={open} onClose={closeDialog} fullWidth>
        <DialogTitle id="edit-author-title">{"Edit Author"}</DialogTitle>
        <DialogContent id="edit-author-container">
          <div className="input-container">
            <TextField
              id="standard-size-normal"
              label="First Name"
              variant="outlined"
              size="small"
              value={firstName}
              onChange={(e) => editFirstName(e.target.value)}
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              id="standard-size-normal"
              label="Last Name"
              variant="outlined"
              size="small"
              value={lastName}
              onChange={(e) => editLastName(e.target.value)}
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              id="standard-size-normal"
              label="Located"
              variant="outlined"
              size="small"
              value={located}
              onChange={(e) => editLocated(e.target.value)}
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              id="standard-size-normal"
              label="Phone #"
              variant="outlined"
              size="small"
              value={phoneNumber}
              onChange={(e) => editPhoneNum(e.target.value)}
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog()}>Cancel</Button>
          <Button autoFocus onClick={() => updateAuthor()}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EditAuthorComponent;
