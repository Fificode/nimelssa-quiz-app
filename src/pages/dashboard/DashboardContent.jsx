import React from 'react'
import Box from '@mui/material/Box';
import Chart from './Chart';
import Deposits from './Deposits';
import QuizList from './QuizList';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const DashboardContent = () => {
  return (
    <>
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
            position: 'absolute',
            left: '230px',
            top: '0px' 
                     }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
            <Grid item xs='auto' md={12}>
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
<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',flexWrap: 'wrap', '@media (min-width:600px)': {
          flexDirection: 'row', justifyContent:'space-around',
        },}}>
<Box>
<Paper
                  sx={{
                    my: 2,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 100,
                    width: 250,
                 backgroundColor: '#dc5353',
               
                  }}
                >
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <EmojiEventsIcon sx={{color:'#fff', height: '50px', width: '50px',}}/>
                </Box>
                <Box sx={{width:'150px'}}>
                <Typography sx={{fontSize:'18px', color: '#fff', fontWeight: 600}}>0</Typography>
  <Typography sx={{fontSize:'14px', color: '#fff', fontWeight: 500}}>Scholar of the week</Typography>
  </Box>
  </Paper>
</Box>
<Box>
  <Paper
                  sx={{
                    my: 2,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 100,
                    width: 250,
                 backgroundColor: '#7e5bef',
               
                  }}
                >
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <EmojiEventsIcon sx={{color:'#fff', height: '50px', width: '50px'}}/>
                </Box>
                <Box sx={{width:'150px'}}>
                <Typography sx={{fontSize:'18px', color: '#fff', fontWeight: 600}}>0</Typography>
  <Typography sx={{fontSize:'14px', color: '#fff', fontWeight: 500}}>Scholar of the month</Typography>
  </Box>
  </Paper>
</Box>
<Box>
  <Paper
                  sx={{
                    my: 2,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 100,
                    width: 250,
                 backgroundColor: 'orange',
                 
                  }}
                >
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <EmojiEventsIcon sx={{color:'#fff', height: '50px', width: '50px'}}/>
                </Box>
                <Box sx={{width:'160px'}}>
                <Typography sx={{fontSize:'18px', color: '#fff', fontWeight: 600}}>0</Typography>
  <Typography sx={{fontSize:'14px', color: '#fff', fontWeight: 500}}>Scholar of the semester</Typography>
  </Box>
  </Paper>
  
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
              <Grid item xs='auto' md={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <QuizList />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
    </>
  )
}

export default DashboardContent