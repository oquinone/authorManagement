import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../styling/addEmployee.scss";
import Button from "@mui/material/Button";
import NavbarComponent from "./navbar";
import Typography from "@mui/material/Typography";
import { useEmployeeStore } from "../store/store";
import { addNewEmployee } from "../apis/api";
import SnackBarComponent from "../components/snackbar";

const AddEmployeeComponent = () => {
  const [snackBar, setSnackBar] = useState(false);
  const fullName = useEmployeeStore((state) => state.fullName);
  const cellNumber = useEmployeeStore((state) => state.cellNumber);
  const address = useEmployeeStore((state) => state.address);
  const city = useEmployeeStore((state) => state.city);
  const zipCode = useEmployeeStore((state) => state.zipCode);

  const updateFullName = useEmployeeStore((state) => state.updateFullName);
  const updateCellNumber = useEmployeeStore((state) => state.updateCellNumber);
  const updateAddress = useEmployeeStore((state) => state.updateAddress);
  const updateCity = useEmployeeStore((state) => state.updateCity);
  const updateZipcode = useEmployeeStore((state) => state.updateZipcode);
  const resetData = useEmployeeStore((state) => state.resetData);

  const handleCloseSnackbar = () => {
    setSnackBar(false);
  };

  return (
    <div id="add-employee-outer-container">
      <SnackBarComponent open={snackBar} handleClose={handleCloseSnackbar} />
      <NavbarComponent />
      <div id="add-employee-container">
        <div className="input-container">
          <Typography variant="h5" align="center">
            Add Employee
          </Typography>
        </div>
        <div className="input-container">
          {/* <Typography variant="subtitle1">Full Name</Typography> */}
          <TextField
            id="standard-size-normal"
            label="Full Name"
            variant="outlined"
            size="small"
            value={fullName}
            onChange={(e) => updateFullName(e.target.value)}
            fullWidth
          />
        </div>
        <div className="input-container">
          {/* <Typography variant="subtitle1">Cell Phone #</Typography> */}
          <TextField
            id="standard-size-normal"
            label="Cell #"
            variant="outlined"
            size="small"
            value={cellNumber}
            onChange={(e) => updateCellNumber(e.target.value)}
            fullWidth
          />
        </div>
        <div className="input-container">
          {/* <Typography variant="subtitle1">Address</Typography> */}
          <TextField
            id="standard-size-normal"
            label="Address"
            variant="outlined"
            size="small"
            value={address}
            onChange={(e) => updateAddress(e.target.value)}
            fullWidth
          />
        </div>
        <div className="input-container">
          {/* <Typography variant="subtitle1">City</Typography> */}
          <TextField
            id="standard-size-normal"
            label="City"
            variant="outlined"
            size="small"
            value={city}
            onChange={(e) => updateCity(e.target.value)}
            fullWidth
          />
        </div>
        <div className="input-container">
          {/* <Typography variant="subtitle1">Zipcode</Typography> */}
          <TextField
            id="standard-size-normal"
            label="Zipcode"
            variant="outlined"
            size="small"
            value={zipCode}
            onChange={(e) => updateZipcode(e.target.value)}
            fullWidth
          />
        </div>
        <div className="btn-container">
          <Button
            variant="contained"
            onClick={() => {
              addNewEmployee({
                fullName,
                address,
                city,
                cellNumber,
                zipCode,
              });
              setSnackBar(true);
              resetData();
            }}
          >
            Add Employee
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddEmployeeComponent;
