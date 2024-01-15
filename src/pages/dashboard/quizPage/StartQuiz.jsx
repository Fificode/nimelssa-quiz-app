import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';



const StartQuiz = ({countdown, startCountdown}) => {
  return (
    <>
        <Box  component="main"
    sx={{
      backgroundImage: "url('/assets/quiz-bg-three.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height:'100vh',
     maxWidth: '100%',
     display: 'flex', 
     justifyContent: 'center', 
     alignItems:'center',
                     }}>
 <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center',}}>
   <Button onClick={startCountdown}
        disabled={countdown !== 5}  sx={{backgroundColor: '#f5f5f5', color: 'purple', padding: '10px 30px', textTransform: 'none', fontSize: '15px', boxShadow: 10 ,  '&:hover': {
          backgroundColor: '#cd9cf2', color: '#fff'
        },}}><Link to='/dashboard/quiz/startquiz/one'>Start Quiz</Link></Button>
   </Box>
                     </Box>
    </>
  )
}

export default StartQuiz