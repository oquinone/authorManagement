import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

const NavbarComponent = () => {
  // const pages = ["Products", "Pricing", "Blog"];
  return (
    <div id="navbar-container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management
          </Typography>
          <Button color="inherit" href="/add">
            Add Employee
          </Button>
          <Button color="inherit" href="/">
            Employees
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarComponent;
