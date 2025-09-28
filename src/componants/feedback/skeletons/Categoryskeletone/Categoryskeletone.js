import React from 'react'
import ContentLoader from 'react-content-loader'

const Categoryskeletone = ({props}) => {
  const renderItems = Array(4).fill(0).map((_,indx) => (
    <div key={indx} >
     <ContentLoader 
    speed={3}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#8c8c8c"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="NaN" cy="NaN" r="NaN" /> 
    <rect x="110" y="251" rx="0" ry="0" width="2" height="2" /> 
    <circle cx="125" cy="126" r="123" />
  </ContentLoader>
  </div>
  ))
  return (
    <div className="flex flex-col md:flex-row items-center  gap-3" >
     {renderItems}
    </div>

  )
}

export default Categoryskeletone
