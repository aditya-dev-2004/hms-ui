"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
  })
const ResetPassword = () => {
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="row login-row px-3 my-bg-color1">
    <div className="col-md-4 mx-auto my-bg-color2 text-light my-5 rounded-3  p-5">
      <h2 className='my-color3 mb-4 fw-bold text-center'>Reset your Password</h2>
      <form onSubmit={handleSubmit((d)=>console.log(d))}>
     <div className='mb-5'>
     <input {...register("email")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your email' type="text" id="email"/>
    {errors.email &&  <div className="text-danger fw-bold ">{errors.email?.message}</div>}
     </div>
      <input type="submit" value="Reset Password" className='w-50 mx-auto d-block text-light my-btn-hover1 btn mt-4 btn my-bg-color1'/>
  </form>
    </div>
  </div>
  )
}

export default ResetPassword
