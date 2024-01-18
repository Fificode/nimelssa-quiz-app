import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Quiz = ({open}) => {
 
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

 <Grid item  xs={12}>
 <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}>
   <Box><Typography sx={{color:"#303030", fontSize:'30px', textAlign:'center', paddingBottom:'15px', fontWeight: 600,}}>Ready for some quiz ?</Typography>
  <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src="/assets/start-quiz-bg.jpg" alt="Quiz background showing kids playing around a Quiz text" style={{width: '250px', height: 'auto', borderRadius: '10px'}} /></Box> 
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', marginTop: '40px'}}>
   <Button sx={{backgroundColor: 'purple', color: '#fff', padding: '10px 20px', textTransform: 'none', fontSize: '15px',  '&:hover': {
          backgroundColor: '#cd9cf2', 
        },}}><Link to='/dashboard/quiz/startquiz' target="_blank" rel="noopener noreferrer">Get Started</Link></Button>
   </Box>
    </Box> 
</Box>
</Grid>
    </Grid>
    </Container>
   </Box>
  </>
  )
}

export default Quiz