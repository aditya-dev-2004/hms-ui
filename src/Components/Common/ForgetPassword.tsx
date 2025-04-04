"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; 
import { userForgetPassService } from '@/Services';
import { swalFire } from '@/Helpers/SwalFire';
const schema = yup
  .object()
  .shape({
        userType: yup.string().oneOf(["admin", "doctor", "patient"], "Invalid User type").required("User type is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
  })
const ForgetPassword = () => {
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  const forgetPassword=async(data:any)=>{
  const res=await  userForgetPassService(data)
  if(res?.code==200){
    swalFire('Forget Password',res?.message,"success")
  }else{
    swalFire('Forget Password',res?.message,"error")
  }
  }
  return (
    <div className="row login-row px-3 my-bg-color1">
    <div className="col-md-4 mx-auto my-bg-color2 text-light my-5 rounded-3  p-5">
      <h2 className='my-color3 mb-4 fw-bold text-center'>Forget Password</h2>
      <form onSubmit={handleSubmit((d)=>forgetPassword(d))}>
      <div className='mb-4'>
       <select {...register("userType")} className='form-select myform-select mb-4 text-light mt-1 rounded-0 ps-0' >
            
            <option className='t'  value="admin" >Admin</option>
            <option className='t'  value="doctor">Doctor</option>
            <option className='t'  value="patient" selected>Patient </option>
        </select>
        {errors.userType && <div className="text-danger fw-bold">{errors.userType?.message}</div>}

       </div>
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

export default ForgetPassword