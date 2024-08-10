import NavbarComponent from "./navbar";
import SnackBarComponent from "./snackbar";
import { addNewAuthorApi } from "../apis/api";
import { useAddAuthorHook } from "../hooks/hooks";
import { TextField, Button, Typography } from "@mui/material";
import "../styling/addAuthor.scss";

const AddAuthorComponent = () => {
  const {
    snackBar,
    setSnackBar,
    handleCloseSnackbar,
    firstName,
    lastName,
    located,
    phoneNumber,
    updateFirstName,
    updateLastName,
    updateLocated,
    updatePhoneNumber,
    resetData,
  } = useAddAuthorHook();

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
