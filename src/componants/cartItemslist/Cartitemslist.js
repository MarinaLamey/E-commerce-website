import React from 'react'
import Cartitem from "../cartItem/Cartitem"
const Cartitemslist = ({products , changeQuantityHandler ,RemoveHandler}) => {
  const renderItems = products.map((el) => (
 
 <Cartitem key={el.id} {...el} changeQuantityHandler={changeQuantityHandler} RemoveHandler={RemoveHandler}/>
  ))
  return (
    <div className='w-f flex flex-col gap-2 items-center relative'>
      {renderItems}
    </div>
  ) 
}

export default Cartitemslist
