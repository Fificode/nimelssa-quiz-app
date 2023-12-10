import React, {useState, useEffect} from 'react'
import imageOne from '/assets/peopleQuestion.png'
import imageTwo from '/assets/peopleLaptops.png'
import imageThree from '/assets/peopleCelebration.png'
import Signup from './Signup'
import { Link } from 'react-router-dom'



const Home = () => {
 
  const images = [imageOne, imageTwo, imageThree];
  const headings = ['Take a quiz and be more creative in your work', 'Take quiz challenges together with your course mates', 'Find fun and interesting quizzes to boost up your knowledge'];
  const colors = ['bg-light-purple-bg', 'bg-light-purple-bg', 'bg-light-purple-bg'];
  
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
    <div className='flex flex-col justify-between min-h-screen md:flex-row '>
<div className='bg-[#f3f3f3] w-[100%] min-h-screen md:w-[50%]'>
<div className='flex flex-col items-center justify-center mt-[30px]'>
{/* Image Slide Show */}
<img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className='w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'/>
<div className='w-[300px] h-[auto] mt-[20px] mb-[10px] lg:w-[400px]'>
{/* Text under the Image Slide show */}
  <h2 className=' font-[700] text-[22px] text-center space-[3px] font-roboto '>{headings[currentImageIndex]}</h2>
</div>
<div className='mt-[20px] flex justify-center'>
{/* Carousel */}
  {colors.map((color, index) => (
            <span
              key={index}
              className={`bg-[#bbb] w-[12px] h-[12px] mx-[2px] rounded-[50%] inline-block ${
                currentImageIndex === index ? colors[currentImageIndex] : ''
              }`}
            ></span>
          ))}
</div>
<div className='flex flex-col items-center my-[10px] md:hidden'>
  <Link to='/signup' className='p-[10px] mt-[30px] mb-[10px] bg-purple text-[#ffffff] rounded-[20px] w-[250px] text-[13px] text-center  hover:bg-[#ffffff] hover:text-purple hover:border-light-purple-bg hover:border-[1px]'>GET STARTED </Link>
  <a href='/login' className='p-[10px] mt-[10px] mb-[5px] bg-[#bbbbbb] text-[#303030] rounded-[20px] w-[250px] text-[13px] text-center  hover:text-purple hover:border-purple hover:border-[1px]'>I ALREADY HAVE AN ACCOUNT</a>
</div>
</div>
  
</div>
<div className='hidden md:block min-h-screen md:w-[50%] font-roboto '>
<div className='flex justify-end m-[10px]'>
<p className='font-roboto text-[14px] text-[#bbbbbb] mr-[5px] mt-[5px] space-[5px] font-[400]'>Already have an account ?</p>
<a href='/login' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#bbbbbb] rounded-[20px] w-[90px] text-[13px] text-center cursor-pointer hover:bg-light-purple-bg hover:text-[#ffffff]'>Login</a>
</div>
<div >
<Signup />
 </div>
</div>
    </div>
  )
}

export default Home