import React from "react";
import { list } from "../mockData";
import "../styling/employeeList.scss";
import DrawerComponent from "./drawer";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const EmployeeList = () => {
  return (
    <div>
      <DrawerComponent />
      {list.map((item) => {
        return (
          <div id="container">
            <span>{item.fullName}</span>
            <span>{item.address}</span>
            <span>{item.cellNumber}</span>
            <span>
              <IconButton>
                <EditNoteIcon />
              </IconButton>
              <IconButton>
                <DeleteForeverIcon />
              </IconButton>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default EmployeeList;
