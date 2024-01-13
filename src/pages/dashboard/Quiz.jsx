import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Quiz = ({open}) => {
  return (
    <>
   <Box  component="main"
    sx={{
      backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            paddingLeft: '20px',
            maxWidth: '100%',
            overflow: 'auto',
            position: 'absolute',
            left: open ? '230px' : '55px',
            top: '0px' 
                     }}>
                       <Toolbar />
                       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                       <Grid container spacing={3}>

 <Grid item  md={12}>
 <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
   <Box sx={{ }}><Typography sx={{color:"#303030", fontSize:'30px', textAlign:'center'}}>Start Quiz</Typography> </Box> 
</Box>
</Grid>
    </Grid>
    </Container>
   </Box>
  </>
  )
}

export default Quiz