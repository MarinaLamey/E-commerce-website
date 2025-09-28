import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
const HeadingComps = ({hValue , path}) => {
  return (
    <div className=' flex flex-row items-center justify-between'>
      <h3 className=' text-2xl md:text-4xl font-bold drop-shadow-logodrop' >{hValue}</h3>
    <Link to={`${path}`} style={{textDecoration:"none"}}>
     <Button buttonValue={"Shop Now"} padding={''} />
     </Link>
      </div>
  )
}

export default HeadingComps
