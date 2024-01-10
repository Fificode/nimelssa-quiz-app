import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




const drawerWidth = 230;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
const useStyles = makeStyles()(() => {
  return {
    activeLink: {
      backgroundColor: '#cd9cf2',
    },
  };
});

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Dashboard({toggleDrawer, open}) {
  const {classes} = useStyles();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  
  // Get location path for dashboard link
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  
  // Dashboard link active
  const isActive = (path) => {
    return path === activeLink ? 'activeLink' : '';
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', height:'100vh' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{backgroundColor: '#ffffff', boxShadow: 0,  position:'fixed'}}>
        
          <Toolbar
            sx={{
              pr: '24px', 
              maxWidth: '100%',
             
            }}
          >
          
         
            <IconButton
              edge="start"
              color="#303030"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
             
              <MenuIcon />
            </IconButton>

            <TextField
            sx={{marginRight:'30px', }}
            color='secondary'
            size='small'
      variant="outlined"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <SearchIcon color="disabled" aria-label='search icon'/>
        ),
      }}
     
    />
    <Box sx={{display:'flex', justifyContent:'flex-end', flexGrow: 3}}>
            <IconButton color="secondary" sx={{marginRight: '10px'}} >
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

  <Avatar sx={{marginRight: '5px',}}/>
<Typography sx={{display:'none','@media (min-width:600px)': {
          display: 'block', color:'#303030', marginTop:'8px', 
        },}}>Layla Towers</Typography>
<IconButton>
              <ArrowDropDownIcon />
            </IconButton>
</Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent"  open={open} sx={{minHeight: '100vh', position:'fixed'}}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
          <Box>
      <img src="/assets/nimelssaLogo.png" alt="NIMELSSA Logo" style={{width: '50px', height: '50px'}} />
    </Box>
          <Typography
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >NIMELSSA Quiz</Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider/>
          <List component="nav"  >
          <NavLink to='/dashboard'  >
    <ListItemButton className={isActive('/dashboard') ? classes.activeLink : null}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItemButton>
</NavLink>
<NavLink to='/dashboard/quiz'  >
    <ListItemButton className={isActive('/dashboard/quiz') ? classes.activeLink : null}>
      <ListItemIcon>
      <QuizIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz" />
    </ListItemButton>
</NavLink>
<NavLink to='/dashboard/result'>
    <ListItemButton className={isActive('/dashboard/result') ? classes.activeLink : null}>
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Result" />
    </ListItemButton>
</NavLink>
<NavLink to='/dashboard/settings'>
    <ListItemButton className={isActive('/dashboard/settings') ? classes.activeLink : null}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    </NavLink>
    <NavLink >
    <ListItemButton>
      <ListItemIcon>
      <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton>
    </NavLink>
            {/* <Box>{secondaryListItems}</Box> */}
           {/* <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', height: '80vh' }}>
        
         <Box sx={{ mt: 'auto' }}>
         <ListItemButton>
      <ListItemIcon>
      <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton>
         </Box>
           </Box>  */}
          </List>
        </Drawer>
    
             </Box>
    </ThemeProvider>
  );
}