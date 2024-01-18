import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import ParticipantsList from '../../components/ParticipantsList';

const LeaderBoard = ({open}) => {
  return (
    <>
    <Box  component="main"
    sx={{
      backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
      minHeight:'100vh',
            flexGrow: 1,
            maxWidth: '100%',
            overflow: 'auto',
            paddingLeft: open ? '230px' : '70px',
                     }}>
                      
                       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                       <Grid container spacing={3}>
                       <Typography sx={{color:"#303030", fontSize:'20px', marginLeft: '27px', marginTop: '80px'}}>Leader Board</Typography>
  {/* Recent Quiz Participant */}
  <Grid item xs='auto' md={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <ParticipantsList />
                </Paper>
              </Grid>
    </Grid>
    </Container>
   </Box>
  </>
  )
}

export default LeaderBoard