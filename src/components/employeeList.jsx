import React, { useEffect, useState } from "react";
import "../styling/employeeList.scss";
// import SidebarComponent from "./sidebar";
import NavbarComponent from "./navbar";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { getEmployeeList } from "../apis/api";
import { DialogComponent } from "./dialog";
import { deleteEmployeeFunc } from "../apis/api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [deleteEmployee, setDeleteEmployee] = useState(false);
  const [idxDelete, setIdxDelete] = useState(-1);

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
    const item = employees[idxDelete];
    await deleteEmployeeFunc(item.id);
    const data = await getEmployeeList();
    setEmployees(data);
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
      <div id="list-container">
        {employees.map((item, index) => {
          return (
            <div className="list-items" key={`${item.fullName}_${index}`}>
              <span>{item.fullName}</span>
              <span>{item.address}</span>
              <span>{item.cellNumber}</span>
              <span>
                <IconButton>
                  <EditNoteIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setDeleteEmployee(true);
                    setIdxDelete(index);
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
