import React from "react";
import Button from "@mui/material/Button";
import "../styling/sidebar.scss";
import Link from "@mui/material/Link";

const SidebarComponent = () => {
  return (
    <div id="sidebar-container">
      <Link href="/" underline="none" className="sidebar-item">
        Employees
      </Link>
      <Link href="/add" underline="none" className="sidebar-item">
        Add Employee
      </Link>
      {/* <Button variant="text" >Employees</Button>
      <Button variant="text">Add Employee</Button> */}
    </div>
  );
};
export default SidebarComponent;
