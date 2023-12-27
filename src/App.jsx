import React, { useState, useEffect } from 'react';
import Home from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import Signup from './pages/Signup';
import Logo from './pages/Logo';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Quiz from './pages/dashboard/Quiz';
import DashboardContent from './pages/dashboard/dashboardContent/DashboardContent';
import Result from './pages/dashboard/Result';
import Settings from './pages/dashboard/Settings';



function App() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
  const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2000); 
return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className="App">
    {/* Nimelssa Quiz Time on Load */}
      {loading ? (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-t from-white-bg to-light-purple-bg animate-breathe'>
       <img src='./assets/nimelssaQuizTime.png' alt='Illustration of Quiz Time on Screen' className='w-[250px] h-[350px] md:w-[300px] md:h-[400px]' />
       </div>
      ) : (
       <Router>
        
         <Routes>
         <Route path='/' element={<LayoutsWithLogo/>}>
           <Route path="/" exact element={<Home />} />
           <Route path="/signup" exact element={<Signup/>} />
           <Route path="/login" exact element={<Login/>} />
           </Route>
          <Route path='/dashboard' element={<LayoutsWithDashboard toggleDrawer={toggleDrawer} open={open}/>} >
          <Route path="/dashboard" exact element={<DashboardContent open={open}/>}/>
          <Route path="/dashboard/quiz" element={<Quiz  open={open} />}/>
          <Route path="/dashboard/result" element={<Result open={open} />}/>
          <Route path="/dashboard/settings" element={<Settings open={open}/>}/>
     </Route>
      
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
