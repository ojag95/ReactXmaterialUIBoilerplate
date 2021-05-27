import React from "react";
import { CssBaseline, makeStyles,Typography } from "@material-ui/core";
import NavBar from "../../Components/NavBar";
import MainDrawer from "../../Components/MainDrawer";


const MainContainer = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
        <CssBaseline/>
        <NavBar/>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content:{
      flexGrow:1,
      backgroundColor:theme.palette.background.default,
      padding:theme.spacing(3),
  }
}));
export default MainContainer;
