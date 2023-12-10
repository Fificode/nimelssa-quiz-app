import React, { useState, useEffect } from 'react';
import Home from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';


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
          <Home/>
           </div>
           <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/signup" element={<Signup/>} />
           </Routes>
           </Router>
      )}
    </div>
  );
}

export default App;
