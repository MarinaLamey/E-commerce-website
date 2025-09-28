import React from 'react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { Controller } from 'react-hook-form';
import { useState } from 'react';
import "../../../pages/Auth/LoginPage/loginpage.css"
const Phone = ({  control,placeholder , name , error }) => {


  return (
  <div className='phone bg-white '>
 <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            country={'eg'}
            value={value}
            placeholder={placeholder}
            onChange={(phone) => onChange("+" + phone)} 
          containerClass="w-full !h-full flex items-center  gap-8"   // الكونتينر واخد عرض الأب
  buttonClass="!bg-gray-100 !border-none !border-r-0 !rounded-l-lg !h-full flex items-center" // العلم شمال
  inputClass="!w-full !h-full !border-none !rounded-r-lg !px-12 !py-5  "   // 
           
          />
        )}
      />
      </div>
  )
}

export default Phone
