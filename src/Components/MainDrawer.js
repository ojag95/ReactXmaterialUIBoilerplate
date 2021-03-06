import React, { Fragment,useState,useEffect } from "react";
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
import { IconButton, Button, Avatar, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";



const drawerWidth = 240;

const MainDrawer = (props) => {
  const [routeName,setRouteName]= useState('React X material UI');
  const [selectedItem,setSelectedItem] =useState(0)

  const routes=[
    {
      id:1,
      name:'Dashboard',
      path:'/Componente1',
      icon:'ListItemIcon'
    },
    {
      id:2,
      name:'Clientes',
      path:'/Componente2',
      icon:'ListItemIcon'
    },
    {
      id:3,
      name:'Josmar',
      path:'/Componente2',
      icon:'ListItemIcon'
    }
  ]
  useEffect(() => {
    let currentLocation = document.location.pathname;
    console.log('ubicacion Actual:',currentLocation)
    setRouteName(currentLocation)
    return () => {
      console.log('DATA')
    }
  }, [])
  const classes = useStyles();


  

  const PrimerContenido=()=>{
    return(
      <Fragment>
      <Typography variant="h1">Primer contenido</Typography>
      <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        </Fragment>
    )
  }

  const SegundoContenido=()=>{
    return(
      <Fragment>
      <Typography variant="h1">Segundo contenido</Typography>
      <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </Fragment>
    )
  }

  const TercerContenido=()=>{
    return(
      <Fragment>
      <Typography variant="h1">Tercer contenido</Typography>
      <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </Fragment>
    )
  }


  const RenderListItems=()=>{
    return(routes.map((route)=>(
      <ListItem key={route.id} button component={NavLink}
      to="/Componente3" onClick={()=>props.routeNameHandler('Componente3')}>
      <ListItemIcon>
        <InboxIcon color="inherit" />
      </ListItemIcon>
      <ListItemText primary={route.name} />
    </ListItem>
    
    )))
  }
 
  const SelectItem=(route,index)=>{
    props.routeNameHandler(route);
    setSelectedItem(index)

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      
      <Router>
        

        
      <Drawer
        className={classes.drawer}
        variant={props.variant}
        open={props.open}
        onClose={props.onClose?props.onClose:null}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List component="nav">
          <ListItem button component={NavLink}
            to="/Componente1" onClick={()=>SelectItem('Componente1',0)} selected={selectedItem === 0}>
            <ListItemIcon>
              <InboxIcon color="inherit" />
            </ListItemIcon>
            <ListItemText primary="Componente 1" />
          </ListItem>
          <ListItem button component={NavLink}
            to="/Componente2" onClick={()=>SelectItem('Componente2',1)} selected={selectedItem === 1}>
            <ListItemIcon>
              <InboxIcon color="inherit" />
            </ListItemIcon>
            <ListItemText primary="Componente 2" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
        <ListItem button component={NavLink}
            to="/Componente3" onClick={()=>SelectItem('Componente3',2)} selected={selectedItem === 2}>
            <ListItemIcon>
              <InboxIcon color="inherit" />
            </ListItemIcon>
            <ListItemText primary="Componente 3" />
          </ListItem>
          <RenderListItems/>
          
        </List>
      </Drawer>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {/*
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Componente1">
            <PrimerContenido />
          </Route>
          <Route path="/Componente2">
            <SegundoContenido />
          </Route>
          <Route path="/Componente3">
            <TercerContenido />
          </Route>
          <Route path="/">
            <Typography>Contenido por default</Typography>
          </Route>
        </Switch>
     
        
      </main>
    </Router>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
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
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  titleStyle: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

export default MainDrawer;
