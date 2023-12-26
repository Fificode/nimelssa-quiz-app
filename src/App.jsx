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



function App() {
  const [loading, setLoading] = useState(true);
  

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
          <Route path='/dashboard' element={<LayoutsWithDashboard/>} >
          <Route path="/dashboard" exact element={<DashboardContent />}/>
          <Route path="/dashboard/quiz" element={<Quiz />}/>
          <Route path="/dashboard/result" element={<Result />}/>
          <Route path="/dashboard/settings" element={<Settings/>}/>
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

function LayoutsWithDashboard(){
  return (
    <>
<Dashboard />
<Outlet />

    </>
  )
}
export default App;
