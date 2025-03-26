

"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
   password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"),
confirmpassword: yup.string().required().oneOf([yup.ref('password')], "Passwords must match")
  })
const ResetPassword = () => {
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <>
     <div className="row login-row px-3 my-bg-color1">
      <div className="col-md-4 mx-auto my-bg-color2 text-light my-5 rounded-3  p-5">
        <h2 className='my-color3 mb-4 fw-bold text-center'>Forget Password</h2>
        <form onSubmit={handleSubmit((d)=>console.log(d))}>
       <div className='mb-4'>
  <input {...register("password")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your password' type="password" id="password"/>
  {errors.password &&  <div className="text-danger fw-bold ">{errors.password?.message}</div>}
</div>
<div className='mb-4'>
  
  <input {...register("confirmpassword")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Confirm your password' type="password" id="confirmpassword"/>
  {errors.confirmpassword &&  <div className="text-danger fw-bold ">{errors.confirmpassword?.message}</div>}
</div>
        <input type="submit" value="Forget Password" className='w-50 mx-auto d-block text-light my-btn-hover1 btn mt-4 btn my-bg-color1'/>
    </form>
      </div>
    </div> 
    </>
  )
}

export default ResetPassword
