import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const QuizCountdown = ({showContent, countdown}) => {
  
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', }}>
    <Box>
  {showContent && <Typography sx={{fontSize: '35px', color: '#303030'}}>Quiz page</Typography>}
{countdown > 0 && <Box sx ={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

<Box><Typography sx={{fontSize: '35px', color: '#303030'}}>GET READY !</Typography></Box>
<Box><Typography sx={{fontSize: '30px', color: '#303030'}}>{countdown}</Typography></Box>

 </Box>} 
</Box>
    </Box>
  );


}

export default QuizCountdown