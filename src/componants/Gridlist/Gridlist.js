import React from 'react'
import LottieHandler from '../feedback/LottieHandler/LottieHandler'
const Gridlist = ({records , renderItem , emptymessage}) => {
  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 '>
     {records.length > 0 ?  records.map((record) => (
        renderItem(record)
      )) : (<LottieHandler type={'Empty'} message={emptymessage} />)
    } 

    </div>
  )
}

export default Gridlist 
