import * as React from 'react';
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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import QuizList from './QuizList';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';


const drawerWidth = 240;

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

// const useStyles = makeStyles((theme) => ({
//   searchInput: {
//     '& .MuiOutlinedInput-root': {
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: '#f5f5f5', // Change the background color
//       '& fieldset': {
//         borderColor: 'transparent', // Hide the border
//       },
//       '&:hover fieldset': {
//         borderColor: 'transparent', // Hide the border on hover
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'transparent', // Hide the border when focused
//       },
//     },
//     '& .MuiInputBase-input': {
//       paddingLeft: theme.spacing(2), // Add padding for the input text
//     },
//   },
// }));


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
// const classes = useStyles();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{backgroundColor: '#ffffff', boxShadow: 0,}}>
        
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
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
            //  className={classes.searchInput}
      variant="outlined"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <SearchIcon color="disabled" />
        ),
      }}
     
    />
    <Box sx={{display:'flex', justifyContent:'flex-end', flexGrow: 3}}>
            <IconButton color="secondary" sx={{marginRight: '10px'}} >
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

  <Avatar sx={{marginRight: '5px'}}/>
<Typography sx={{color:'#303030', marginTop:'8px'}}>Layla Towers</Typography>
<IconButton>
              <ChevronLeftIcon />
            </IconButton>
</Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
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
          <Divider />
          <List component="nav">
            {mainListItems}
           <Box sx={{paddingTop: '220px'}}>{secondaryListItems}</Box> 
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        

            <Grid container spacing={3}>
            <Grid item xs={12}>
  <Box sx={{width: '100%', height: '150px', backgroundColor: '#cd9cf2', borderRadius: '10px', display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
  <Box sx={{flexGrow: 1,  padding: '30px', display: 'flex', flexDirection: 'column'}}>
  <Typography sx={{color: '#303030', fontSize: '30px'}}>Hi, Layla</Typography>
  <Typography sx={{color: '#303030'}}>Ready to start your day with some quiz?</Typography>
  </Box>
  
           
  <img src="/assets/isometric.png" alt="NIMELSSA Logo" style={{width: '400px', height: '180px'}} />
  </Box>

          </Grid>
          {/* Overview */}
          <Grid item xs={12}>
<Typography sx={{color:"#303030", fontSize:'20px', marginLeft: '15px'}}>Overview</Typography>
<Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', marginTop:'40px'}}>
<Box sx={{}}>
<Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 100,
                    width: 250,
                 backgroundColor: '#ffc82c',
                  }}
                >
  <Typography>No of Quiz Taken</Typography>
  </Paper>
</Box>
<Box>
<Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 100,
                    width: 250,
                    backgroundColor: '#7e5bef ',
                  }}
                >
  <Typography>Scholar of the month</Typography></Paper>
</Box>
<Box>
<Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 100,
                    width: 250,
                    backgroundColor: '#1fb6ff',
                  }}
                >
  <Typography>Scholar of the semester</Typography></Paper>
</Box>
</Box>

          </Grid>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Quiz Participant */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <QuizList />
                </Paper>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}