import React from "react";
import { useEditAuthorStore } from "../store/store";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import "../styling/editAuthor.scss";

const EditAuthorComponenet = (props) => {
  const { open, closeDialog, updateAuthor } = props;
  const firstName = useEditAuthorStore((state) => state.firstName);
  const lastName = useEditAuthorStore((state) => state.lastName);
  const located = useEditAuthorStore((state) => state.located);
  const phoneNumber = useEditAuthorStore((state) => state.phoneNumber);

  const editFirstName = useEditAuthorStore((state) => state.editFirstName);
  const editLastName = useEditAuthorStore((state) => state.editLastName);
  const editLocated = useEditAuthorStore((state) => state.editLocated);
  const editPhoneNum = useEditAuthorStore((state) => state.editPhoneNumber);

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
export default EditAuthorComponenet;
