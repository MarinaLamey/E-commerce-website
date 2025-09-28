import { queries } from '@testing-library/react';
import React from 'react'
import { memo } from 'react';

const Cartitem = memo(({ id , name , price , discription , imgSrc , max , quantity , changeQuantityHandler , RemoveHandler}) => {
  const renderOptions = Array(max).fill(0).map((el , eleIndex) => {
    const qty = ++eleIndex;
    return <option key={qty} value={qty}>{qty}</option>
  });

  const changeQuantity = (event) => {
    const quantity = +event.target.value;
    changeQuantityHandler(id , quantity)
  }
  console.log(`render`)
  return (
    <div className='flex flex-row relative w-full py-3'>
         <div className="size-48 shrink-0 overflow-hidden rounded-md border border-gray-200">
         <img  src={imgSrc} className="size-full object-cover" />
       </div>
        <div className="ml-4 flex flex-1 flex-col py-2  items-start  ">
          <h3 className=' font-bold  text-3xl'>{name}</h3>
          <p className='my-5'>{discription}</p>
          <p className='mb-5'>red</p>
        <select value={quantity} onChange={changeQuantity} id="countries" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-3 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{backgroundColor:"#771011"}}>
          {renderOptions}
          </select>
    </div>
    <div className='flex flex-col py-2 justify-between '>
   <p>{price}eg</p>
   <button onClick={()=>RemoveHandler(id)} className=' text-indigo-600  hover:text-indigo-500' >Remove</button>
    </div>
    
    </div>
  )
}
)
export default Cartitem
