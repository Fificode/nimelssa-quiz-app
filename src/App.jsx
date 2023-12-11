import React, { useState, useEffect } from 'react';
import Home from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';


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
        <div className='box-border'>
        {/* Main content of the website */}
           </div>
           {/* Logo */}
           <div className='mt-[5px] mb-[10px] fixed top-0 left-0'>
<div className='flex'>
<img src='/assets/nimelssaLogo.png' alt='Logo of Nimelssa' className='ml-[5px] w-[50px] h-[50px]'/>
<h1 className='font-[600] text-[18px] font-roboto space-[2px] mt-[10px]'><Link to='/'>NIMELSSA Quiz</Link></h1>
</div>
</div>
           <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>} />
           </Routes>
           </Router>
      )}
    </div>
  );
}

export default App;
