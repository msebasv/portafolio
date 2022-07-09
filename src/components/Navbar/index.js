import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./index.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className="appBar" component="nav">
      <Toolbar className="toolbar">
        <Box className="container-nav">
          <Box>
            <Typography className="logo" variant="h3">
              {"<SM/>"}
            </Typography>
          </Box>
          <Box className={mobileOpen ? "menu nav-menu_visible" : "menu"}>
            <Link to="/" className="link">
              <MenuItem className="menu-item">
                <Typography>Inicio </Typography>
              </MenuItem>
            </Link>
            <Link to="/about" className="link">
              <MenuItem className="menu-item">
                <Typography>Sobre mi</Typography>
              </MenuItem>
            </Link>
            <Link to="/projects" className="link">
              <MenuItem className="menu-item">
                <Typography>Proyectos</Typography>
              </MenuItem>
            </Link>
            <Link to="/contact" className="link">
              <MenuItem className="menu-item">
                <Typography>Contacto</Typography>
              </MenuItem>
            </Link>
          </Box>
        </Box>
        <IconButton onClick={handleClick} className="container-icon">
          {mobileOpen ? (
            <CloseIcon className="close-icon" />
          ) : (
            <MenuIcon className="hamburger-icon" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
