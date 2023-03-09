import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  HomePage  from '@mui/icons-material/Home';
import NotificationPage from '@mui/icons-material/Notifications';
import Groups from '@mui/icons-material/Groups';
import SellIcon from '@mui/icons-material/Sell';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomeFile from '../homeFile';
import Order from '../order';
import Notification from '../notification';
import Customers from '../customers';
import Report from './report';
import Message from './message'

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <ListItem disablePadding onClick={() => navigate("/Message")}>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon/>
              </ListItemIcon>
              <ListItemText>MESSAGE</ListItemText>
            </ListItemButton>
          </ListItem>
      <Toolbar />
      <Divider />
      <List>
      <ListItem disablePadding onClick={() => navigate("/HomeFile")}>
            <ListItemButton>
              <ListItemIcon>
                <HomePage/>
              </ListItemIcon>
              <ListItemText>HOME</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <ListItem disablePadding onClick={() => navigate("/Notification")}>
            <ListItemButton>
              <ListItemIcon>
                <NotificationPage/>
              </ListItemIcon>
              <ListItemText>NOTIFICATION</ListItemText>
            </ListItemButton>
          </ListItem>
      <ListItem disablePadding onClick={() => navigate("/Order")}>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon/>
              </ListItemIcon>
              <ListItemText>ORDER</ListItemText>
            </ListItemButton>
          </ListItem>
      <ListItem disablePadding onClick={() => navigate("/Customers")}>
            <ListItemButton>
              <ListItemIcon>
                <Groups/>
              </ListItemIcon>
              <ListItemText>CUSTOMER</ListItemText>
            </ListItemButton>
          </ListItem>
      <ListItem disablePadding onClick={() => navigate("/Report")}>
            <ListItemButton>
              <ListItemIcon>
                <LeaderboardIcon/>
              </ListItemIcon>
              <ListItemText>SLIDE REPORT</ListItemText>
            </ListItemButton>
          </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASH BOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
    <Routes>
        <Route path='message' element={<Message/>}/>
        <Route path='homeFile' element={<HomeFile/>}/>
        <Route path='notification' element={<Notification/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='customers' element={<Customers/>}/>
        <Route path='report' element={<Report/>}/>
    </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;