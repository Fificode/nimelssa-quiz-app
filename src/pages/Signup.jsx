import React from 'react'

const Signup = () => {
  return (
<div className='flex justify-center mx-[30px] mb-[20px] mt-[100px] '>
<div className='flex flex-col items-start'>
<h2 className='font-roboto text-[17px] font-[700] my-[5px] text-left space-[3px]'>Sign up for NIMELSSA Quiz</h2> 
<p className='font-roboto text-[14px] text-[#bbbbbb] space-[5px] font-[400]'>Register your account</p>
<form className='flex flex-col'>
{/* Name */}
<div className='mt-[20px] mb-[5px] flex flex-col'>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Name</label>
  <input type='text' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[300px] lg:w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='Korede Uche' autoComplete='off' />
  </div>
  {/* Matric Number */}
<div className='mt-[20px] mb-[5px] flex flex-col'>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Matric Number</label>
  <input type='number' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[300px] lg:w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='16846789' autoComplete='off' />
  </div>
  {/* Email address */}
<div className='mt-[20px] mb-[5px] flex flex-col'>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Email address</label>
  <input type='email' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[300px] lg:w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='koredeuche@gmail.com' autoComplete='off' />
  </div>
  {/* Password */}
<div className='mt-[20px] mb-[5px] flex flex-col '>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Password</label>
  <input type='password' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[300px] lg:w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='' autoComplete='off' />
  </div>
  {/* Sign up button */}
  <div className='mb-[5px] mt-[15px]'>
  <button className='p-[5px] bg-purple text-[#ffffff] rounded-[20px] w-[120px] text-[13px] text-center cursor-pointer hover:bg-[#ffffff] hover:text-purple hover:border-light-purple-bg hover:border-[1px]'>Sign Up</button>
  </div>
</form>
</div>
    </div>
  )
}

export default Signup