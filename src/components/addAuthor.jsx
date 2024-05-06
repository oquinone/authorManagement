import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavbarComponent from "./navbar";
import Typography from "@mui/material/Typography";
import SnackBarComponent from "./snackbar";
import { useAuthorStore } from "../store/store";
import { addNewAuthorApi } from "../apis/api";
import "../styling/addAuthor.scss";

const AddAuthorComponent = () => {
  const [snackBar, setSnackBar] = useState(false);
  const firstName = useAuthorStore((state) => state.firstName);
  const lastName = useAuthorStore((state) => state.lastName);
  const located = useAuthorStore((state) => state.located);
  const phoneNumber = useAuthorStore((state) => state.phoneNumber);

  const updateFirstName = useAuthorStore((state) => state.updateFirstName);
  const updateLastName = useAuthorStore((state) => state.updateLastName);
  const updateLocated = useAuthorStore((state) => state.updateLocated);
  const updatePhoneNumber = useAuthorStore((state) => state.updatePhoneNumber);
  const resetData = useAuthorStore((state) => state.resetData);

  const handleCloseSnackbar = () => {
    setSnackBar(false);
  };

  return (
    <div id="add-author-outer-container">
      <SnackBarComponent open={snackBar} handleClose={handleCloseSnackbar} />
      <NavbarComponent />
      <div id="add-author-container">
        <div className="input-container">
          <Typography variant="h5" align="center">
            Add Author
          </Typography>
        </div>
        <div className="input-container">
          <TextField
            id="standard-size-normal"
            label="First Name"
            variant="outlined"
            size="small"
            value={firstName}
            onChange={(e) => updateFirstName(e.target.value)}
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
            onChange={(e) => updateLastName(e.target.value)}
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
            onChange={(e) => updatePhoneNumber(e.target.value)}
            fullWidth
          />
        </div>
        <div className="input-container">
          <TextField
            id="standard-size-normal"
            label="Based out of"
            variant="outlined"
            size="small"
            value={located}
            onChange={(e) => updateLocated(e.target.value)}
            fullWidth
          />
        </div>
        <div className="btn-container">
          <Button
            variant="contained"
            onClick={() => {
              addNewAuthorApi({
                firstName,
                lastName,
                located,
                phoneNumber,
              });
              setSnackBar(true);
              resetData();
            }}
          >
            Add Author
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddAuthorComponent;
