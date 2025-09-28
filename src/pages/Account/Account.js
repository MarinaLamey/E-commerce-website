import React from 'react'
import useAccount from './useAccount';

import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaCalendarAlt, FaVenusMars } from "react-icons/fa";
import profilePic from '../../assets/imgs/Negma.jpeg'
import { MdDelete, MdEdit } from "react-icons/md";
import "./account.css"
import "../Auth/LoginPage/loginpage.css"
import Input from '../../componants/From/Input/Input';
import Phone from '../../componants/From/Input/Phone';

const Account = () => {
  const {userInfo  , register , handleSubmit , onSubmit ,  control , errors } = useAccount();


  return (
    <div className='flex flex-col gap-3'>
         <div className="px-3  ">
         {/* Header */}
            <h1 className="text-4xl font-bold mb-2">Profile</h1>
           <p style={{color:"#771101"}}>View & Update Your Personal and Contact Information</p>
        {/* Right - Account Details */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-md relative box flex flex-col  items-start">
          <div className='w-full  '>
           <form  onSubmit={handleSubmit(onSubmit)} 
           className='w-full flex flex-col justify-start items-start gap-2   loginform'
           >
            <div className='flex flex-wrap w-full' >
            <div className='flex flex-col w-2/4 justify-start items-start gap-2'>
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <label className=' text-sm text-gray-400 font-medium '>Email</label>
                <Input type='email' placeholder='Email' name={'email'} register={register} disabled={"true"} />
                       {errors.email && (
                     <p className='text-red-500'>{errors.email.message}</p>
                    )} 
            {/* {email} */}
            {/* Phone num */}
          <label className=' text-sm text-gray-400 font-medium '>Phone Number</label>
         <Phone control={control} placeholder={userInfo.phone}  name={"phone"} register={register}  error={errors.phone?.message}/>  
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
           {/* Phone num */}
           </div >
           <div className='flex flex-col w-2/4 justify-start items-start gap-2'>
           <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              {/* {FIRSTname} */}
              <label className=' text-sm text-gray-400 font-medium '>First Name</label>
                   <Input type='text' placeholder='First Name' name={'firstName'} register={register} />
                  {errors.firstName && (
                   <p className='text-red-500'>{errors.firstName.message}</p>
                  )} 
                  {/* {FIRSTname} */}
                  {/* {LASTname} */}
                   <label className=' text-sm text-gray-400 font-medium '>Last Name</label>
                   <Input type='text' placeholder='Last Name' name={'lastName'} register={register} aria-invalid={errors.firstName ? "true" : "false"}/>
                    {errors.lastName && (
                   <p className='text-red-500'>{errors.lastName.message}</p>
                  )} 
                     {/* {LASTname} */}
           </div>
           </div>
          <button className='cursor-pointer w-1/5 text-white p-5 rounded-3xl self-'  style={{backgroundColor:'#771011'}}>Update profile</button>


            </form>
          </div>
          
        </div>

      </div>
      
        
    </div>
  
  )
}

export default Account
