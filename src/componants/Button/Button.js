import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
const Button = ({buttonValue , Arrow ,padding , href } ) => {
  return (
   
    <div className='w-fit ml-3 flex items-center justify-center '>
    <button  className="  btn text-xl md:text-2xl  px-4 py-3 flex flex-row  items-center justify-between gap-2" data-effect="spin" >
    {buttonValue}
    <a className=' absolute w-full h-full '> </a>
        <span className="text"></span>
        <span className="shimmer"></span>
    </button>    </div>
    
  )
}

export default Button
