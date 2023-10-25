import React, { useEffect, useState } from "react";
import "../styling/employeeList.scss";
import NavbarComponent from "./navbar";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { getEmployeeList } from "../apis/api";
import { DialogComponent } from "./dialog";
import { deleteEmployeeFunc, updateEmployeeFunc } from "../apis/api";
import EditEmployeeComponenet from "./editEmployee";
import { useEditEmployeeStore } from "../store/store";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [deleteEmployee, setDeleteEmployee] = useState(false);
  const [editEmployee, setEditEmployee] = useState(false);
  const [selectedIdx, setSelectedIndex] = useState({});
  const updateFullName = useEditEmployeeStore((state) => state.editFullName);
  const updateCellNumber = useEditEmployeeStore(
    (state) => state.editCellNumber
  );
  const updateAddress = useEditEmployeeStore((state) => state.editAddress);
  const updateCity = useEditEmployeeStore((state) => state.editCity);
  const updateZipcode = useEditEmployeeStore((state) => state.editZipcode);

  const editFullName = useEditEmployeeStore((state) => state.fullName);
  const editCellNumber = useEditEmployeeStore((state) => state.cellNumber);
  const editAddress = useEditEmployeeStore((state) => state.address);
  const editCity = useEditEmployeeStore((state) => state.city);
  const editZipcode = useEditEmployeeStore((state) => state.zipcode);

  useEffect(() => {
    const getData = async () => {
      const data = await getEmployeeList();
      setEmployees(data);
    };
    getData();
  }, []);

  const cancel = () => {
    setDeleteEmployee(false);
  };

  const deleteCall = async () => {
    setDeleteEmployee(false);
    const item = employees[selectedIdx.index];
    await deleteEmployeeFunc(item.id);
    const data = await getEmployeeList();
    setEmployees(data);
  };

  const openEditDialog = (id, index) => {
    const row = employees[index];
    updateFullName(row.fullName);
    updateCellNumber(row.cellNumber);
    updateAddress(row.address);
    updateCity(row.city);
    updateZipcode(row.zipCode);
    setSelectedIndex({ id, index });
    setEditEmployee(true);
  };

  const closeEditDialog = () => {
    setEditEmployee(false);
  };

  const updateEmployee = async () => {
    let currentEmployee = {
      fullName: editFullName,
      cellNumber: editCellNumber,
      address: editAddress,
      city: editCity,
      zipcode: editZipcode,
      id: selectedIdx.id,
    };
    await updateEmployeeFunc(currentEmployee);
    const data = await getEmployeeList();
    setEmployees(data);
    setEditEmployee(false);
  };

  return (
    <div id="employee-list-container">
      {/* <DrawerComponent /> */}
      {/* <SidebarComponent /> */}
      <NavbarComponent />
      <DialogComponent
        open={deleteEmployee}
        cancel={cancel}
        callDelete={deleteCall}
      />
      <EditEmployeeComponenet
        open={editEmployee}
        closeDialog={closeEditDialog}
        updateEmployee={updateEmployee}
      />
      <div id="list-container">
        {employees.map((item, index) => {
          return (
            <div className="list-items" key={`${item.fullName}_${index}`}>
              <span>{item.fullName}</span>
              <span>{item.address}</span>
              <span>{item.cellNumber}</span>
              <span>
                <IconButton
                  onClick={() => {
                    openEditDialog(item.id, index);
                  }}
                >
                  <EditNoteIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setSelectedIndex({ id: item.id, index });
                    setDeleteEmployee(true);
                  }}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EmployeeList;
