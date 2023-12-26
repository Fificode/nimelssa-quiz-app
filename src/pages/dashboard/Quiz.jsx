import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Quiz = () => {
  return (
    <>
   <Box  component="main"
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
                     }}>
                       <Toolbar />
                       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                       <Grid container spacing={3}>

 <Grid item xs={12}>
<Typography sx={{color:"#303030", fontSize:'20px', marginLeft: '15px'}}>Quiz</Typography>
</Grid>
    </Grid>
    </Container>
   </Box>
  </>
  )
}

export default Quiz