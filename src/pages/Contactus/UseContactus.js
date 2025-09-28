import React from 'react'
import { actPostContact } from '../../Redux/customerHelp/customerhelpSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm  } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { useNavigate , Navigate} from 'react-router-dom';
import { profileSchema } from '../../validation/helpSchema';
const UseContactus = () => {
const userInfo = useSelector((state) => state.auth.user)
const {loading , error} = useSelector((state) => state.contact)
  const dispatch = useDispatch();
 const navigate =useNavigate()

    const {
            register,
            handleSubmit,
            getFieldState,
            control,
            trigger,
            formState: { errors },
          } = useForm({mode: "onBlur",
            resolver: zodResolver(profileSchema),
             
          })

          const onSubmit = async(data) => {
         
      dispatch( actPostContact(data)).unwrap().then(() => {
        navigate("/");
      });
 
    }
  return {userInfo ,register , handleSubmit , onSubmit , control , errors , loading , error}
}

export default UseContactus
