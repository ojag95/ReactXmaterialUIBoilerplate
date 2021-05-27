import React, { useState, useEffect, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";


const drawerWidth = 240;

const NavBar = () => {
  const styles = useStyles();
  return (
    <Fragment>
      <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
          <IconButton
            className={styles.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.titleStyle}>
            React X material UI
          </Typography>
          <Button
            color="inherit"
            endIcon={
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/random"
              />
            }
          >
            Oscar Josué Avila Gutiérrez
          </Button>
        </Toolbar>
      </AppBar>
      <div className={styles.offset} />

      </Fragment>
    
  );
};

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      titleStyle: {
        flexGrow: 1,
        textAlign: "left",
      },
  }))


export default NavBar;
