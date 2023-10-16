import React from "react";
import { list } from "../mockData";
import "../styling/employeeList.scss";

const EmployeeList = () => {
  return (
    <div>
      {list.map((item) => {
        return (
          <div id="container">
            <span>{item.fullName}</span>
            <span>{item.address}</span>
            <span>{item.cellNumber}</span>
          </div>
        );
      })}
    </div>
  );
};
export default EmployeeList;
