import React from 'react'
import './Footer.css'
import { Facebook ,Instagram , TwitchIcon } from 'lucide-react'
const Footer = () => {
  return (
    <div className=' mt-10 mx-auto flex flex-col '>
      <div className='flex items-center justify-center p-8  border-t-2 border-neutral-200'><h2 className='navbarlogo text-3xl font-medium flex items-center '><span className='maincolor drop-shadow-logodrop text-4xl text-center' >N-</span>NegmCartilla</h2></div>
      <div className='  border-t-2 border-neutral-200'>
        <div className='container mx-auto  py-5 flex flex-row items-center justify-between'>
        <div className='p-2 flex flex-col   justify-center'>
        <h5 className='font-bold'>About</h5>
        <ul className='text-neutral-400 pt-4 p-2 flex flex-col items-center justify-between gap-2'>
        <li>Our Company</li>
        <li>Our Story</li>
        <li>Blog</li>
        </ul>
        </div>
        <div className='p-2 flex flex-col justify-center'>
        <h5  className='font-bold'>Information</h5>
        <ul className='text-neutral-400  pt-4 p-2 flex flex-col items-center justify-between gap-2'>
        <li>Delivery Information</li>
        <li>Privacy Policy</li>
        <li>Return</li>
        </ul>
        </div>
        <div className='p-2 flex flex-col justify-center'>
        <h5  className='font-bold'>Support</h5>
        <ul className='text-neutral-400  pt-4 p-2 flex flex-col items-center justify-between gap-2'>
        <li>Contact Us</li>
        <li>Help</li>
        <li>CheckOut</li>
        </ul>
        </div>
        </div>
      </div>
      <div className='border-t-2 border-neutral-200  text-white bg-[#771011]' >
        <div className='container mx-auto   flex flex-row justify-between items-center  py-5'>
      <p className=' text-xl md:text-2xl ' >Copyright@2024 NegmCartilla All Rights Reserved</p>
      <ul className='flex flex-row gap-4 '>
        <li className='bg-neutral-200 rounded-full w-16 h-16 flex items-center justify-center border border-black hover:bg-zinc-900 '><Facebook color='black' size={30} /></li>
        <li className='bg-neutral-200 rounded-full w-16 h-16 flex items-center justify-center border border-black hover:bg-zinc-900'><Instagram color='black' size={30} /></li>
        <li className='bg-neutral-200 rounded-full w-16 h-16 flex items-center justify-center border border-black hover:bg-zinc-900'><TwitchIcon color='black' size={30} /></li>
      </ul>
      </div>
      </div>

    </div>
  )
}

export default Footer
