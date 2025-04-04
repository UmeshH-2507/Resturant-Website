import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <img src={Logo} alt="logo" height="70" width="200" />
      </Box>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="logo" height="70" width="250" />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/menu">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/cart">
                    Orders
                  </NavLink>

                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
