import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>  <div className='mt-[5px] mb-[10px] fixed top-0 left-0'>
    <div className='flex'>
    <img src='/assets/nimelssaLogo.png' alt='Logo of Nimelssa' className='ml-[5px] w-[50px] h-[50px]'/>
    <h1 className='font-[600] text-[18px] font-roboto space-[2px] mt-[10px]'><Link to='/'>NIMELSSA Quiz</Link></h1>
    </div>
    </div></div>
  )
}

export default Logo