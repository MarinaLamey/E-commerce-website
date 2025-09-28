import React from 'react'
import useRegister from "../../../hooks/useRegister"
import { Navigate } from 'react-router-dom';
import Movingsec from '../Movingsec'
import Spinner from '../../../componants/Spinner/Spinner';
import { Link } from 'react-router-dom'
import "../LoginPage/loginpage.css"
import Phone from '../../../componants/From/Input/Phone';
import Input from '../../../componants/From/Input/Input';

const Register = () => {
const {
   emailAvailabilityStatus,
        enteredEmail,
        checkEmailAvailability,
        resetCheckEmailAvailability , 
        register,
        handleSubmit,
        onBlur,
        loading,
        error,
        onSubmit,
        errors,
        accessToken,
        control
} = useRegister()
  


  if (accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <div className='relative flex flex-nowrap p-10 gap-1' style={{height:'1100px'}} >
      <div className=' h-full w-1/2'>
      <div className=' w-full h-full flex flex-col justify-center items-center gap-3 '>
      <form onSubmit={handleSubmit(onSubmit)}
       className='w-full flex flex-col justify-center items-center gap-1 loginform '>
      <label className='text-5xl font-bold '>Hello customer</label><br/>
      <p className='text-neutral-400 '>{`Welcome to N-NegmCartilla`}</p>
      {/* {FIRSTname} */}
        <Input type='text' placeholder='First Name' name={'firstName'} register={register} /> <br/>
       {errors.firstName && (
        <p className='text-red-500'>{errors.firstName.message}</p>
       )} 
       {/* {FIRSTname} */}
       {/* {LASTname} */}
        <Input type='text' placeholder='Last Name' name={'lastName'} register={register} aria-invalid={errors.firstName ? "true" : "false"}/><br/>
         {errors.lastName && (
        <p className='text-red-500'>{errors.lastName.message}</p>
       )} 
          {/* {LASTname} */}
          {/* {email} */}
        <Input type='email' placeholder='Email' name={'email'} register={register} onBlur={onBlur} error={errors.email?.message}/><br/>
        {errors.email ?
        <p className='text-red-500'>{errors.email.message}</p> :
         emailAvailabilityStatus === "notAvailable" ? <p  className='text-red-500'>This email is already in use.</p> : 
         emailAvailabilityStatus === "failed" ? <p  className='text-red-600'>Error from the server.</p> : ""
       } 
       {
        emailAvailabilityStatus === "checking" ?
         <p className='text-slate-500'>We're currently checking the availability of this email address. Please wait a moment.</p> 
         :""
       }
       {
         emailAvailabilityStatus === "available" ?
         <p className='text-green-600'>This email is available for use.</p> : ""
       }
           {/* {email} */}
           {/* {Password} */}
        <Input type="password" placeholder={"Password"}  name={'password'} register={register}  onError={errors.password?.message}/><br/>
           {errors.password && (
        <p className='text-red-500'>{errors.password.message}</p>
       )} 
        {/* {Password} */}
        {/* {confirmPassword} */}
        <Input type="password" placeholder='ConfirmPassword'  name={'confirmPassword'} register={register}  onError={errors.confirmPassword?.message}/><br/>
            {errors.confirmPassword && (
        <p className='text-red-500'>{errors.confirmPassword.message}</p>
       )} 
        {/* {confirmPassword} */}
        {/* Phone num */}
  
         <Phone control={control} placeholder={"phone"}  name={"phone"} register={register}  onError={errors.phone?.message}/>  <br/>
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
           {/* Phone num */}
        <button className='cursor-pointer w-3/5 text-white p-5 rounded-3xl'  style={{backgroundColor:'#771011'}}
         disabled={emailAvailabilityStatus === "checking" ? true : false || loading === "pending"}
        >
          {loading === "pending" ? (
            <>
           <Spinner/>loading...
            </>
          ):"Submit"}
         </button>
          {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
      </form>
      <div>have an account? 
        <Link to={'/login'} style={{textDecoration:"none"}}> 
        <span  className=' cursor-pointer ' style={{color:"#771011"}}>LogIn</span>
        </Link>
        </div>
      </div>
      </div>
      <Movingsec/>
    </div>
  )
}

export default Register
