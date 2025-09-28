import React from 'react'

const Input = ({type , placeholder , name , register , error , onBlur , disabled }) => {
 const onblurHandler = (e) => {
  if (onBlur) {
    onBlur(e);
    register('email').onBlur(e);
  } else {
    register('email').onBlur(e);
  }}
  return (
      <input disabled={disabled} type={type} placeholder={placeholder} {...register(name)} onBlur={onblurHandler}  isInvalid={error ? true : false} /> 
  )
}

export default Input
