import React from 'react'
import ContentLoader from 'react-content-loader'

const Cardskeketon = ({props}) => {
   const renderItems = Array(2).fill(0).map((_,indx) => (
    <div key={indx} className='w-full' >
      <ContentLoader 
    speed={1}
    width={1257}
    height={238}
    viewBox="0 0 1257 238"
    backgroundColor="#8c8c8c"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="NaN" cy="NaN" r="NaN" /> 
    <rect x="110" y="251" rx="0" ry="0" width="2" height="2" /> 
    <rect x="13" y="30" rx="21" ry="21" width="190" height="190" /> 
    <rect x="224" y="56" rx="5" ry="5" width="160" height="29" /> 
    <rect x="226" y="104" rx="5" ry="5" width="198" height="16" /> 
    <rect x="226" y="148" rx="5" ry="5" width="110" height="16" />
  </ContentLoader>
  </div>
      ))

  return (
    <div className="flex flex-col w-full items-center gap-3" >
     {renderItems}
    </div>
      )
}

export default Cardskeketon
