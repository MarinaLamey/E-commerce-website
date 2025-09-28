import React from 'react'
import '../../pages/MainLayout/MainLayout/App.css'
import LottieHandler from '../../componants/feedback/LottieHandler/LottieHandler';

const Error = () => {

  return (
<div className="flex h-screen flex-col bg-white " style={{fontFamily:"Roboto, serif"}}>
 <LottieHandler type={'NotFounded'} />
</div>
  )
}

export default Error
