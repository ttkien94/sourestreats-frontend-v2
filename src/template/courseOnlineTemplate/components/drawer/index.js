import * as React from "react";
import { NavLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// import SettingsIcon from "@mui/icons-material/Settings";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WebIcon from "@mui/icons-material/Web";
import SchoolIcon from "@mui/icons-material/School";
const drawerWidth = 240;

const menuMagager = [
  {
    text: "OverView",
    icon: <WebIcon />,
    // link: "/chuong-trinh-huan-luyen/online",
    link: "/",
  },
  {
    text: "Course",
    icon: <SchoolIcon />,
    link: "/chuong-trinh-huan-luyen/online/tower-one",
  },
  // {
  //   text: "Setting",
  //   icon: <SettingsIcon />,
  //   // link: "/chuong-trinh-huan-luyen/online",
  //   link: "/",
  // },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function AdminDrawer({ isOpen, onHandleDrawerClose }) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    onHandleDrawerClose && onHandleDrawerClose();
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <div className="wrapper-menu-admin">
        <List>
          {menuMagager?.map((item, index) => (
            <NavLink
              to={item.link}
              exact
              activeClassName="menu-selected"
              className="menu"
              key={index}
            >
              <ListItem sx={{ height: "60px" }}>
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "#ffffff" }} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
