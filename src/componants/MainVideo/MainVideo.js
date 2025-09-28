import React from 'react'
import videostars from '../../assets/vedio/stars.mp4'
import stars from "../../assets/imgs/Stars.png"
const MainVideo = () => {
  return (
        <div className='absolute w-[3000px] md:w-[3000px] h-[50vh] z-[-30] top-[0px] left-[-200px] md:left-[-500px] '>
             <img className='w-full object-cover h-auto' src={stars}></img>
            </div>
  )
}

export default MainVideo
