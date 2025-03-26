"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters").required(),
  email: yup.string().email("Invalid email address").required(),
  gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required(),
  contact: yup.string().matches(/^\d{10}$/, "Contact must be a 10-digit number").required(),
  age: yup.number().typeError("Age must be a number").min(18, "Age must be at least 18 year").max(100, "Age cannot exceed 100 years").required(),
});

const PatientRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="row login-row px-3 my-bg-color1">
        <div className="col-md-4 mx-auto my-bg-color2 text-light my-5 rounded-3 p-5">
          <h2 className='my-color3 mb-4 fw-bold text-center'>Register</h2>
          <form onSubmit={handleSubmit((d) => console.log(d))}>
            <div className='mb-4'>
              <input {...register("name")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your name' type="text" id="name" />
              {errors.name && <div className="text-danger fw-bold">{errors.name?.message}</div>}
            </div>
            
            <div className='mb-4'>
              <input {...register("email")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your email' type="text" id="email" />
              {errors.email && <div className="text-danger fw-bold">{errors.email?.message}</div>}
            </div>
            
            <div className='mb-4'>
              <select {...register("gender")} className='myform-control text-light form-control ps-0 text-light rounded-0 mt-1'>
                <option  className='t' value="" disabled selected>Select Gender</option>
                <option  className='t' value="Male">Male</option>
                <option  className='t' value="Female">Female</option>
                <option  className='t' value="Other">Other</option>
              </select>
              {errors.gender && <div className="text-danger fw-bold">{errors.gender?.message}</div>}
            </div>

            <div className='mb-4'>
              <input {...register("contact")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your contact number' type="text" id="contact" />
              {errors.contact && <div className="text-danger fw-bold">{errors.contact?.message}</div>}
            </div>

            <div className='mb-4'>
              <input {...register("age")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your age' type="number" id="age" />
              {errors.age && <div className="text-danger fw-bold">{errors.age?.message}</div>}
            </div>

            <input type="submit" value="Register" className='w-100 mx-auto d-block text-light my-btn-hover1 btn mt-4 my-bg-color1' />
          </form>
        </div>
      </div>
    </>
  )
}

export default PatientRegister;
