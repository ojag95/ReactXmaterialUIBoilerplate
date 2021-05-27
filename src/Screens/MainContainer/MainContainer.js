import React from "react";
import { CssBaseline, makeStyles,Typography } from "@material-ui/core";
import NavBar from "../Dashboard/NavBar";

const MainContainer = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
        <CssBaseline/>
       <NavBar />
       <main className={styles.content}>
           <div className={styles.toolbar}>
            <Typography variant="h6">HOLA MUNDO</Typography>
           </div>
       </main>
      
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
