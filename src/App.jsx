import React, { useState, useEffect } from 'react';
import Home from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import Signup from './pages/Signup';
import Logo from './pages/Logo';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Quiz from './pages/dashboard/Quiz';
import DashboardContent from './pages/dashboard/DashboardContent';
import Result from './pages/dashboard/Result';
import Settings from './pages/dashboard/Settings';
import QuizCountdown from './pages/dashboard/QuizPage/QuizCountdown';
import StartQuiz from './pages/dashboard/QuizPage/StartQuiz';
import LeaderBoard from './pages/dashboard/LeaderBoard';


function App() {
  // First loading of App
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(true);
  const [hasError, setHasError] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
  const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2000); 
   
return () => clearTimeout(timeout); 
  }, []);

  const handleImageError = () => {
    setHasError(true);
  };
  // Countdown Quiz
  const [countdown, setCountdown] = useState(5); // Initial countdown value
  const [showContent, setShowContent] = useState(false);

  const startCountdown = () => {
    // Update the countdown value every second
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Set a timeout to stop the countdown after 5 seconds and display content
    setTimeout(() => {
      clearInterval(countdownInterval);
      setShowContent(true);
    }, 5000); // 5 seconds

    // Initial button click, disable the button to prevent multiple clicks
    setCountdown(5);
  };

  return (
    <div className="App">
    {/* Nimelssa Quiz Time on Load */}
   {loading ? (<div className='flex justify-center items-center min-h-screen bg-gradient-to-t from-white-bg to-light-purple-bg animate-breathe'>
        
   {!hasError ? (<img src='./assets/nimelssaQuizTime.png' alt='Illustration of Quiz Time on Screen' className='w-[250px] h-[350px] mb-[20px] md:w-[300px] md:h-[400px]'  onError={handleImageError} />
       
      ) : (<span>Error Loading Image...</span>)} </div>): (
       <Router>
        
         <Routes>
         <Route path='/' element={<LayoutsWithLogo/>}>
           <Route path="/" exact element={<Home />} />
           <Route path="/signup" exact element={<Signup/>} />
           <Route path="/login" exact element={<Login/>} />
           </Route>
          <Route path='/dashboard' element={<LayoutsWithDashboard toggleDrawer={toggleDrawer} open={open}/>} >
          <Route path="/dashboard" exact element={<DashboardContent open={open}/>}/>
          <Route path="/dashboard/quiz" element={<Quiz  open={open} countdown={countdown} startCountdown={startCountdown} />}/>
          <Route path="/dashboard/result" element={<Result open={open} />}/>
          <Route path='/dashboard/leaderboard' element={<LeaderBoard open={open}/>} />
          <Route path="/dashboard/settings" element={<Settings open={open}/>}/>
          </Route>
          <Route path='/dashboard/quiz/startquiz' element={<StartQuiz startCountdown={startCountdown} countdown={countdown} />} />
          <Route path='/dashboard/quiz/startquiz/one' element={<QuizCountdown showContent={showContent} countdown={countdown} />} />
           </Routes>
           </Router>
      
      )}

    </div>
  );
}
function LayoutsWithLogo(){
  return(
    <>
    <Logo />
    <Outlet />
          </>
  )
}

function LayoutsWithDashboard({toggleDrawer, open}){
  return (
    <>
<Dashboard  toggleDrawer={toggleDrawer} open={open}/>
<Outlet />

    </>
  )
}
export default App;
