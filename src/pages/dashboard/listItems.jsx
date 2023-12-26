import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   activeLink: {
//     backgroundColor: theme.palette.primary.main,
//     color: '#fff',
//   },
// }));
// const classes = useStyles();

export const mainListItems = (
  <React.Fragment>
<NavLink to='/dashboard'>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItemButton>
</NavLink>
<NavLink to='/dashboard/quiz'>
    <ListItemButton>
      <ListItemIcon>
      <QuizIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz" />
    </ListItemButton>
</NavLink>
<NavLink to='/dashboard/result'>
    <ListItemButton>
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Result" />
    </ListItemButton>
</NavLink>
<NavLink to='/dashboard/settings'>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    </NavLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
  <NavLink to='/logout'>
    <ListItemButton>
      <ListItemIcon>
      <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton>
    </NavLink>
  </React.Fragment>
);