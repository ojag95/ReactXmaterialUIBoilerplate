import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  IconButton,
  Button,
  Avatar,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MainDrawer from "../Components/MainDrawer";

const drawerWidth = 240;
const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const [routeName, setRouteName] = useState("ReactXMaterialUI");
  const [anclaje, setAnclaje] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnclaje(event.currentTarget);
  };

  const handleMenuClosing = () => {
    setAnclaje(null);
  };

  const handleRouteName = (routeName) => {
    setRouteName(routeName);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => handleDrawerToggle()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.titleStyle}>
            {routeName}
          </Typography>
          <Button
            color="inherit"
            aria-haspopup="true"
            onClick={(event) => handleMenuOpen(event)}
            endIcon={
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/random"
              />
            }
          >
            Oscar Josué Avila Gutiérrez
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anclaje}
            className={classes.menuStyles}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            getContentAnchorEl={null}
            keepMounted
            open={Boolean(anclaje)}
            onClose={handleMenuClosing}
          >
            <MenuItem onClick={handleMenuClosing}>
            <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                
                primary="Perfil"
              />
            </MenuItem>
            <MenuItem onClick={handleMenuClosing}>
            <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                
                primary="Ajustes"
              />
            </MenuItem>
            <Divider/>

            <MenuItem onClick={handleMenuClosing}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                
                primary="Cerrar Sesión"
              />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <MainDrawer variant={"permanent"} routeNameHandler={handleRouteName} />
      </Hidden>
      <Hidden mdUp>
        <MainDrawer
          variant={"temporary"}
          open={open}
          routeNameHandler={handleRouteName}
          onClose={() => handleDrawerToggle()}
        />
      </Hidden>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuStyles:{
    marginTop: theme.spacing(6),
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  titleStyle: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

export default NavBar;
