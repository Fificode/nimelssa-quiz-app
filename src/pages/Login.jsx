import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center mx-[30px] mb-[20px] mt-[100px] '>
        <div className='flex flex-col items-start '>

<h2 className='font-roboto text-[17px] font-[700] my-[5px] text-left space-[3px]'>Login to NIMELSSA Quiz</h2> 
<p className='font-roboto text-[14px] text-[#bbbbbb] space-[5px] font-[400]'>Login and start quiz</p>
<form className='flex flex-col'>

  {/* Matric Number */}
<div className='mt-[20px] mb-[5px] flex flex-col'>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Matric Number</label>
  <input type='number' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[300px] lg:w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='16846789' autoComplete='off' />
  </div>
  
  {/* Password */}
<div className='mt-[20px] mb-[5px] flex flex-col'>
  <label className='font-roboto text-[13px] text-[#303030] space-[5px] font-[400]'>Enter Password</label>
  <input type='password' className='p-[5px] border-[#bbbbbb] border-[1px] text-[#303030] rounded-[5px] w-[300px] lg:w-[400px] text-[13px] outline-light-purple-bg mt-[5px] space-[3px]' placeholder='' autoComplete='off' />
  </div>
  <div className='flex justify-end'>
    <a href='' className='font-roboto text-[14px] text-[#bbbbbb] space-[5px] font-[400]'>Forgot password</a>
  </div>
  {/* Login button */}
  <div className='mb-[5px] mt-[15px]'>
  <button className='p-[5px] bg-purple text-[#ffffff] rounded-[20px] w-[120px] text-[13px] text-center cursor-pointer hover:bg-[#ffffff] hover:text-[#303030] hover:border-light-purple-bg hover:border-[1px]'>Login</button>
  </div>
</form>
</div>
    </div>
  )
}

export default Login