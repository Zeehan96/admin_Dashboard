import React from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import {
  Drawer,
  Box,
  IconButton,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

function AppSidebar({
  handleDrawerToggle,
  drawerWidth,
  mobileOpen,
  setMobileOpen,
}) {
  const location = useLocation();
  const sidebar_config = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon sx={{ color: "#FFEB80" }} />, // Set icon color to gold
    },
    {
      title: "Programs",
      path: "/programs",
      icon: <WorkIcon sx={{ color: "#FFEB80" }} />,
    },
    {
      title: "Members",
      path: "/members",
      icon: <GroupIcon sx={{ color: "#FFEB80" }} />, // Set icon color to gold
    },
  ];

  const drawer = (
    <div style={{ width: drawerWidth }}>
      <Box
        sx={{
          backgroundColor: "black",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Toolbar
          sx={{ backgroundColor: "black", boxShadow: "1px 1px 1px light" }}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="Dashboard" style={{ height: "auto" }} />
        </div>
        <Divider />
        <List>
          {sidebar_config.map((item, index) => (
            <ListItem key={item.path} disablePadding>
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <ListItemButton
                  sx={{
                    borderRadius: 0,
                    backgroundColor:
                      location.pathname === item.path
                        ? "rgba(255,255,255,0.1)"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "block" }, ml: 1 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default AppSidebar;
