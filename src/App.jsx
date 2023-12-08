import React, { useState, useEffect } from 'react';
import Home from './pages/Homepage';



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
      {loading ? (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-t from-white-bg to-light-purple-bg animate-breathe'>
       <img src='./assets/nimelssaQuizTime.png' alt='Illustration of Quiz Time on Screen' className='w-[250px] h-[300px]' />
       </div>
      ) : (
       
        <div className='box-border'>
          <Home/>
           </div>
      )}
    </div>
  );
}

export default App;
