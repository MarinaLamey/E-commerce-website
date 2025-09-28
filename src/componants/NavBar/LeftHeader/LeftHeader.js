
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LeftHeader = ({totalQuantity , page , icon }) => {
    const navigation = useNavigate()
        const [isAnimate, setIsAnimate] = useState(false);
   

       const quantityStyle = `basketQuantity  ${
        isAnimate ? `pumpCartQuantity` : ""
      }`;
        useEffect(() => {
        if (!totalQuantity) {
          return;
        }
        setIsAnimate(true);
        
        const debounce = setTimeout(() => {
          setIsAnimate(false);
        }, 300);
       return () => clearTimeout(debounce);
      }, [totalQuantity]);
  return (
      <div className='basketContainer relative' onClick={() => navigation(page)} >
        <div className={` ${quantityStyle}`}>
          {totalQuantity}
    
        </div>
   {icon}
    </div>
  )
}

export default LeftHeader
