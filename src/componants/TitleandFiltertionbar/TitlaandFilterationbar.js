import React, { memo } from 'react'
import { useDispatch } from "react-redux";
import { setSortType } from "../../Redux/sorting/sortSlice";
import UnopDropdown from "unop-react-dropdown";
import arrow from '../../assets/imgs/arrow.png'
import { useNavigate } from 'react-router-dom';
const TitlaandFilterationbar = ({title}) => {
 const dispatch = useDispatch()
   const navigate = useNavigate()
   const handler = () => {

   }
   
  return (
    <div className=' py-5 relative w-full flex flex-row items-center justify-between z-40 '>
    <div className='text-4xl font-bold p-2'>
    {title} Products
    </div>  
<div className='rounded-lg  w-52 '>
    <UnopDropdown
  onAppear={handler}
  onDisappearStart={handler}
  trigger={<button className="AnimatedDropdownButton w-full flex flex-row gap-3 bg-white p-4 rounded-lg font-bold text-xl">Sort by..
  <img src={arrow} className='w-6 h-6' />
  </button>}
  delay={300}
  align="CENTER"
  hover
>
<div  className="  rounded-lg w-full relative  p-1 bg-red-900 ml-0 z-50 flex flex-col items-center justify-center  ">
  <button className=" w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=> { navigate('/ProductsByHomeSection/Best') }}>
Best Seller
  </button>
    <button className=" w-full  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=> { navigate('/ProductsByHomeSection/InFocus') }}>
IN Focus
  </button>
    <button className=" w-full  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=> { navigate('/Offers') }}>
Offers
  </button>
    <button className=" w-full  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>  dispatch(setSortType("lowToHigh")) }>
Price from low to high
  </button>
    <button className=" w-fullw  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>  dispatch(setSortType("highToLow"))  }>
Price from high to low
  </button>
  </div>

</UnopDropdown>
    </div>
    </div>
  )
}

export default TitlaandFilterationbar
