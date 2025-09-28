import React from 'react'
import ContentLoader from 'react-content-loader'

const Productskeleton = ({props}) => {
const renderItems = Array(2).fill(0).map((_,indx) => (
    <div key={indx} >
     <ContentLoader 
    speed={1}
    width={400}
    height={490}
    viewBox="0 0 400 490"
    backgroundColor="#8c8c8c"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="NaN" cy="NaN" r="NaN" /> 
    <rect x="110" y="251" rx="0" ry="0" width="2" height="2" /> 
    <rect x="3" y="0" rx="20" ry="20" width="400" height="490" />
  </ContentLoader>
  </div>
      ))

  return (
    <div className="flex flex-col md:flex-row items-center gap-3" >
     {renderItems}
    </div>
      )
  
}

export default Productskeleton
