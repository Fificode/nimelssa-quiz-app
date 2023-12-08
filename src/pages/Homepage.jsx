import React, {useState, useEffect} from 'react'
import imageOne from '/assets/peopleQuestion.png'
import imageTwo from '/assets/peopleLaptops.png'
import imageThree from '/assets/peopleCelebration.png'



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
    <div className='flex flex-col justify-between min-h-screen lg:flex-row '>
<div className='bg-[#f3f3f3] w-[100%] min-h-screen lg:w-[50%]'>
{/* Logo */}
<div className='flex'>
<img src='/assets/nimelssaLogo.png' alt='Logo of Nimelssa' className='ml-[5px] w-[50px] h-[50px]'/>
<h1 className='font-[600] text-[18px] font-roboto space-[2px] mt-[10px]'>NIMELSSA Quiz</h1>
</div>
<div className='flex flex-col items-center justify-center'>
{/* Image Slide Show */}
<img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className='w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'/>
<div className='w-[300px] lg:w-[400px]'>
{/* Text under the Image Slide show */}
  <h2 className=' font-[700] text-[22px] text-center space-[3px] font-roboto my-[10px]'>{headings[currentImageIndex]}</h2>
</div>
<div className='mt-[10px] flex justify-center'>
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
</div>
  
</div>
<div className='w-[100%] min-h-screen lg:w-[50%] font-roboto '>
<div className='flex justify-end m-[10px]'>
<p className='font-roboto text-[14px] text-[#bbbbbb] mr-[5px] mt-[5px] space-[5px] font-[400]'>Already have an account ?</p>
<button className='p-[5px] border-[#bbbbbb] border-[1px] text-[#bbbbbb] rounded-[20px] w-[90px] text-[13px] text-center cursor-pointer hover:bg-light-purple-bg hover:text-[#ffffff]'>Login</button>
</div>
<div className='flex flex-col items-start mx-[30px] mb-[20px] mt-[40px]'>

<h2 className='font-roboto text-[17px] font-[700] my-[5px] text-left space-[3px]'>Welcome to NIMELSSA Quiz</h2> 
<p className='font-roboto text-[14px] text-[#bbbbbb] space-[5px] font-[400]'>Register your account</p>
<form className='flex flex-col'>
{/* Name */}
<div className='mt-[20px] mb-[5px] flex flex-col'>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Name</label>
  <input type='text' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='Korede Uche' autoComplete='off' />
  </div>
  {/* Matric Number */}
<div className='mt-[20px] mb-[5px] flex flex-col'>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Matric Number</label>
  <input type='number' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='16846789' autoComplete='off' />
  </div>
  {/* Email address */}
<div className='mt-[20px] mb-[5px] flex flex-col'>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Email address</label>
  <input type='email' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='koredeuche@gmail.com' autoComplete='off' />
  </div>
  {/* Password */}
<div className='mt-[20px] mb-[5px] flex flex-col '>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Password</label>
  <input type='password' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='' autoComplete='off' />
  </div>
  {/* Sign up button */}
  <div className='mb-[5px] mt-[15px]'>
  <button className='p-[5px] bg-purple text-[#ffffff] rounded-[20px] w-[120px] text-[13px] text-center cursor-pointer hover:bg-[#ffffff] hover:text-[#303030] hover:border-light-purple-bg hover:border-[1px]'>Sign Up</button>
  </div>
</form>
</div>
 
</div>
    </div>
  )
}

export default Home