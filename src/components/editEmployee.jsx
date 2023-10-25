import React from "react";
import { useEditEmployeeStore } from "../store/store";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import "../styling/editEmployee.scss";

const EditEmployeeComponenet = (props) => {
  const { open, closeDialog, updateEmployee } = props;
  const fullName = useEditEmployeeStore((state) => state.fullName);
  const cellNumber = useEditEmployeeStore((state) => state.cellNumber);
  const address = useEditEmployeeStore((state) => state.address);
  const city = useEditEmployeeStore((state) => state.city);
  const zipCode = useEditEmployeeStore((state) => state.zipCode);

  const editFullName = useEditEmployeeStore((state) => state.editFullName);
  const editCellNumber = useEditEmployeeStore((state) => state.editCellNumber);
  const editAddress = useEditEmployeeStore((state) => state.editAddress);
  const editCity = useEditEmployeeStore((state) => state.editCity);
  const editZipcode = useEditEmployeeStore((state) => state.editZipcode);

  return (
    <div>
      <Dialog open={open} onClose={closeDialog} fullWidth>
        <DialogTitle id="edit-employee-title">{"Edit Employee"}</DialogTitle>
        <DialogContent id="edit-employee-container">
          <div className="input-container">
            {/* <Typography variant="subtitle1">Full Name</Typography> */}
            <TextField
              id="standard-size-normal"
              label="Full Name"
              variant="outlined"
              size="small"
              value={fullName}
              onChange={(e) => editFullName(e.target.value)}
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
              onChange={(e) => editCellNumber(e.target.value)}
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
              onChange={(e) => editAddress(e.target.value)}
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
              onChange={(e) => editCity(e.target.value)}
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
              onChange={(e) => editZipcode(e.target.value)}
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog()}>Cancel</Button>
          <Button autoFocus onClick={() => updateEmployee()}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default EditEmployeeComponenet;
