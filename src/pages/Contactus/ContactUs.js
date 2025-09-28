import React from 'react'
import UseContactus from './UseContactus';
import MainVideo from '../../componants/MainVideo/MainVideo'
import Customerhelp from "../../assets/imgs/customer help.png"
import Spinner from '../../componants/Spinner/Spinner';
import { Link } from 'react-router-dom'
import "../Auth/LoginPage/loginpage.css"
import Phone from '../../componants/From/Input/Phone';
import Input from '../../componants/From/Input/Input';
import "./contactus.css"
import Loading from '../../componants/feedback/Loading/Loading';

const ContactUs = () => {
  const{userInfo ,register , handleSubmit , onSubmit , control , errors , loading , error} = UseContactus()
  return (
    <div className='mx-auto relative' style={{minHeight:"800px"}}>
      <div> <MainVideo/></div>
      <Loading  loading={loading} error={error} type={"product"}>
       <div className='w-full pt-24 '>
       <h1 className='text-6xl font-bold text-white tracking-widest '>CONTACT US</h1>
       <p className='text-white'>Welcome to your N-NegmCartilla Customer Service Center</p>
       </div>
     <div className='w-full mx-auto flex flex-row justify-between items-center  pt-12 '>
      {/* form sec */}
     <div className='w-2/4 ml-12 p-4  shadow-lg rounded-2xl conStyle flex flex-row justify-center items-center'>
          <div className='w-full flex flex-col gap-3'>
            <h3 className='text-white font-bold text-2xl self-start'>Your Detail</h3>
            <div className='w-full'>
            <form onSubmit={handleSubmit(onSubmit)} 
           className='w-full flex flex-col justify-center items-center gap-6    loginform'>
           <div className=' w-full flex flex-row justify-between gap-2 items-center'>
            <div className=' w-full flex flex-col justify-center items-start '>
                  <label className=' text-sm text-gray-400 font-medium '>Email</label>
                <Input type='email' placeholder='Email' name={'email'} register={register}  />
                       {errors.email && (
                     <p className='text-red-500'>{errors.email.message}</p>
                    )} 
            {/* {email} */}
            </div>
            <div  className='w-full flex flex-col justify-start items-start'>
                   {/* {FIRSTname} */}
              <label className=' text-sm text-gray-400 font-medium '>First Name</label>
                   <Input type='text' placeholder='First Name' name={'firstName'} register={register} />
                  {errors.firstName && (
                   <p className='text-red-500'>{errors.firstName.message}</p>
                  )} 
                  {/* {FIRSTname} */}
                  </div>
           </div>
          <div className='w-full flex flex-col justify-start items-start gap-6 '>
            <div className=' w-full flex flex-col justify-start items-start  '>
                     {/* Phone num */}
          <label className=' text-sm text-gray-400 font-medium '>Phone Number</label>
         <Phone control={control}  name={"phone"} register={register}  error={errors.phone?.message}/>  
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
           {/* Phone num */}
     
           </div> 
           <div className='w-full  flex flex-col justify-start items-start '>
                 {/* Comments / Questions */}
           <label for="message" className="text-sm text-gray-400 font-medium ">Your message</label>
           <textarea {...register("message")} placeholder="Write your problem..." id="message" rows="4" className=" p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg" ></textarea>
              {errors.message && <p className='text-red-500' >{errors.message.message}</p>}
           {/* Comments / Questions */}
           </div>
           </div>
           <div className='w-full'>
           <button className='cursor-pointer w-1/5 text-white p-5 rounded-3xl self-'  style={{backgroundColor:'#771011'}}>Update profile</button>
           </div>
            </form>
            </div>
            
          </div>
     </div>
       {/* form sec */}

        {/* customerhelp pic  */}
     <div className='w-2/4 flex flex-col justify-center items-center relative '>
     <h3  className='headign absolute top-16 right-32 text-6xl font-bold text-white  z-10' > Get In Touch</h3>
      <div className='w-3/4'>
      <img className=' imgstyling w-full object-cover h-auto z-0'  src={Customerhelp} />
    </div>
    {/*  customerhelp pic */}
     </div >
     </div>
       </Loading>
      <div className='w-full flex flex-col items-start justify-start relative ml-12 pt-12 gap-1 '>
      <h2 className='text-black font-bold '>Popular Articles</h2>
    <div className="w-3/4 flex flex-col items-start justify-start text-base cursor-pointer shadow-md  bg-white border  rounded-lg  bg-white border-neutral-200 dark:text-black">
   <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' > Our communication channels</a>
    <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' > How do I know the status of my order?</a>
     <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' > I don’t see any orders, why?</a>
      <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' > Report Button</a>
       <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' > I would like to be a seller on your website, how do I sign up?</a>
        <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' > Gift vouchers - how do I redeem?</a>
         <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' >I have sent the Gift Card(s) to the wrong email address, what should I do?</a>
         <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' > How can I unsubscribe myself from your newsletter?</a>
         <a className='w-full  px-2 py-4 hover:bg-neutral-300 border-b-2 border-neutral-200 text-start' > Do I need to activate my Gift Card?</a> 
  </div>
      </div>

    </div>
  )
}

export default ContactUs
