import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 pt-5 pb-15 mt-10'>
        <img src={assets.logo} alt="logo" width={150}/>
        <p className='flex-1 border-l border-gray-400 mt-2 pl-4
        text-sm text-gray-500 max-sm:hidden'>
            &copy; Copyright | All Rights Reserved
        </p>
        <div className='flex gap-2'>
            <img src={assets.facebook_icon} alt="" width={35} 
            className='cursor-pointer' />
            <img src={assets.twitter_icon} alt="" width={35} 
            className='cursor-pointer' />
            <img src={assets.instagram_icon} alt="" width={35} 
            className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer