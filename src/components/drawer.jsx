import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import "../styling/drawer.scss";

const DrawerComponent = () => {
  const [open, isOpen] = useState(false);
  return (
    <div id="drawer-container">
      <IconButton id="icon-btn" onClick={() => isOpen(true)}>
        <DensityMediumIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => isOpen(false)}>
        <div>Hello World</div>
      </Drawer>
    </div>
  );
};
export default DrawerComponent;
