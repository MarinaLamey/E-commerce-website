import React from 'react'
import './loginpage.css'
import Movingsec from '../Movingsec';
import useLogin from '../../../hooks/useLogin';
import { Link } from 'react-router-dom'
import Input from '../../../componants/From/Input/Input';
import Spinner from '../../../componants/Spinner/Spinner';
import { Navigate } from 'react-router-dom';
const LoginPage = () => {

  const  {  searchParams,
    register,
    handleSubmit,
    errors,
    loading,
    error,
    onSubmit,
    onBlur,
  accessToken
} =  useLogin()
  if (accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <div className=' relative flex flex-nowrap p-10 gap-1' style={{height:'1100px'}}>
      <div className=' h-full w-1/2 '>
      <div className=' w-full h-full flex flex-col justify-center items-center gap-3 '>
         {
          searchParams.get("message") === "login_required" && (
           <div class="p-4 mb-4 text-sm text-red -800 rounded-lg bg-green-50  dark:text-red-400" role="alert">You need to login to view this content</div>
          )
        }
        {
          searchParams.get("message") === "account_created" && (
           <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50  dark:text-green-400" role="alert">Your account successfully created, please login</div>
          )
        }
       <form onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col justify-center items-center gap-1 loginform '>
        <label className='text-5xl font-bold '>Hello customer</label><br/>
        <p className='text-neutral-400 '>Welcome to N-NegmCartilla</p>
         <Input type='email' placeholder='Email' name={'email'} register={register} onBlur={onBlur}/><br/>
          {errors.email && (
        <p className='text-red-500'>{errors.email.message}</p>
       )} 
           {/* {email} */}
      {/* {Password} */}
        <Input type={"password"} placeholder={'Password'} name={'password'} register={register} /><br/>
           {errors.password && (
        <p className='text-red-500'>{errors.password.message}</p>
       )} 
        {/* {Password} */}
        <button className='flex flex-row items-center justify-center gap-1 cursor-pointer w-3/5 text-white p-5 rounded-3xl' style={{backgroundColor:'#771011'}}>
         {loading === "pending" ? (
            <>
           <Spinner/>loading...
            </>
          ):"LogIn"}
        </button>
        {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
        <a className='self-end w-3/5 cursor-pointer ' style={{color:'#771011'}}>Forget password?</a>
       </form>
       <div className=' orhlder ' >or</div>
      
       <div className='w-full flex flex-col items-center gap-4 '>
      <div>Don't have an account? 
      <Link to={'/register'} style={{textDecoration:"none"}}> 
      <span className=' cursor-pointer ' style={{color:"#771011"}}>Sign up</span>
      </Link>
      </div>
      </div>
      </div>
    </div>
   <Movingsec/>
    
    </div>
  )
}


export default LoginPage
