import Login from "./Screens/AuthSection/Login";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './Config/themeConfig';
import {List,ListItem,ListItemIcon,ListItemText,Divider} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MainContainer from "./Screens/MainContainer/MainContainer";
import MainDrawer from "./Components/MainDrawer";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
        <MainContainer/>
        {/* <ScreenSizer/>
        <List component="nav">
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon color='inherit' />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon color='inherit' />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
             <Divider/>
             <ListItem button>
                <ListItemIcon>
                    <InboxIcon color='inherit' />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
        </List>
        <Login /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
