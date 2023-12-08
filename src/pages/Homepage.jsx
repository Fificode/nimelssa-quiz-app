import React, {useState, useEffect} from 'react'
import imageOne from '/assets/peopleQuestion.png'
import imageTwo from '/assets/peopleLaptops.png'
import imageThree from '/assets/peopleCelebration.png'



const Home = () => {
 
  const images = [imageOne, imageTwo, imageThree];
  const headings = ['Take a quiz be more creative in your work', 'Take quiz challenges together with your course mates', 'Find fun and interesting quizzes to boost up your knowledge'];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,


      );
    }, 3000);
    return () => {
      clearInterval(interval);
     
    }
   
  }, [images.length, headings.length]); 
return (
    <div className='flex flex-col justify-between min-h-screen lg:flex-row '>
<div className='bg-[#f3f3f3] w-[100%] min-h-screen lg:w-[50%]'>
<div>
Nimelssa Logo
</div>
<div className='flex flex-col items-center justify-center'>
<img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]'/>
<div>
  <h2 className='w-[300px] lg:w-[400px] font-[700] text-[22px] text-center space-[3px] font-roboto my-[10px]'>{headings[currentImageIndex]}</h2>
</div>
<div className='mt-[10px]'>
  <span className="bg-[#bbb] w-[12px] h-[12px] mx-[2px] rounded-[50%] inline-block" ></span>
  <span className="bg-[#bbb] w-[12px] h-[12px] mx-[2px] rounded-[50%] inline-block" ></span>
  <span className="bg-[#bbb] w-[12px] h-[12px] mx-[2px] rounded-[50%] inline-block" ></span>
</div>
</div>
   <div
            className='w-[100%]'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          ></div>
</div>
<div className='w-[100%] min-h-screen lg:w-[50%] font-sans'>
   Welcome to NIMELSSA Quiz
</div>
    </div>
  )
}

export default Home