import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useEffect , useState} from 'react'
import { actUpdateProfile } from '../../Redux/auth/authSlice'
import { useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod";
import { profileSchema } from '../../validation/profileSchema'
const useAccount = () => {
const userInfo = useSelector((state) => state.auth.user)
  const dispatch = useDispatch();


const {
  register,
  handleSubmit,
  control,
  formState: { errors },
} = useForm({
  mode: "onBlur",
  resolver: zodResolver(profileSchema),
   defaultValues: { phone: userInfo.phone || "" ,
    email:userInfo.email || "",
    firstName :userInfo.firstName ,
    lastName:userInfo.lastName
   }
});
const onSubmit = async(data) => {
  console.log(data)
 dispatch(actUpdateProfile(data))
    .unwrap()
    .then(() => {
      console.log("Profile updated successfully");
    })
    .catch((err) => {
      console.log("Error updating profile:", err);
    });
    }
  return {userInfo ,register , handleSubmit , onSubmit , control , errors}
}

export default useAccount
