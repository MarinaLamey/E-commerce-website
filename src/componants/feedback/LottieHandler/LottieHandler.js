import React from 'react'
import Lottie from 'lottie-react'
import NotFounded from '../../../assets/LottieFiles/NotFounded.json'
import Empty from '../../../assets/LottieFiles/Empty.json'
import Loading from  '../../../assets/LottieFiles/Loading.json'
import Error from  '../../../assets/LottieFiles/Error.json'
import success from "../../../assets/LottieFiles/success.json"
const LottieHandler = ({type , message}) => {

    const lottieFilesMap = {
    NotFounded:NotFounded , 
     Empty: Empty,
     Loading:Loading,
     Error:Error,
      success: success,
    }
 const lottie = lottieFilesMap[type];
   const messageStyle =
    type === "Error"
      ? { fontSize: "25px", color: "red" }
      : { fontSize: "25px", marginTop: "10px" };

  return (
    <div className='flex flex-col items-center justify-center h-full w-full '>
      <Lottie animationData={lottie} style={{width:'600px'}}/>
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  )
}

export default LottieHandler
