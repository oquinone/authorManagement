import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styling/navbar.scss";

const NavbarComponent = () => {
  return (
    <div id="navbar-container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Author Management
          </Typography>
          <Button color="inherit" href="#/authorManagement/add">
            Add Author
          </Button>
          <Button color="inherit" href="#/authorManagement">
            Authors
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarComponent;
