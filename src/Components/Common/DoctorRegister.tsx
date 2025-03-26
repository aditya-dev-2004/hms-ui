"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters").required(),
  departmentId: yup.string().oneOf(["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics"], "Invalid department").required(),
  specialist: yup.string().min(2, "Expertise must be at least 2 characters").max(100, "Expertise cannot exceed 100 characters").required(),
  qualifications: yup.string().min(2, "Qualifications must be at least 2 characters").max(100, "Qualifications cannot exceed 100 characters").required(),
  contact: yup.string().matches(/^\d{10}$/, "Contact must be a 10-digit number").required(),
  experience: yup.number().typeError("Experience must be a number").min(1, "Experience must be at least 1 year").max(50, "Experience cannot exceed 50 years").required(),
  fees: yup.number().typeError("Fees must be a number").min(0, "Fees cannot be negative").required(),
  address: yup.string().min(5, "Address must be at least 5 characters").max(200, "Address cannot exceed 200 characters").required(),
  gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required(),
  email: yup.string().email("Invalid email address").required(),
 profile: yup.mixed().test("fileSize", "File is required", (value:any) => value.length>0 ).required()
});

const DoctorRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="row login-row px-4 my-bg-color1">
        <div className="col-md-5 mx-auto my-bg-color2 text-light my-5 rounded-3 p-5">
          <h2 className='my-color3 mb-4 fw-bold text-center'>Register</h2>
          <form  onSubmit={handleSubmit((d) => console.log(d))}>
            <div className="row">
            <div className='col-md-6 mb-4'>
              <input {...register("name")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your name' type="text" id="name" />
              {errors.name && <div className="text-danger fw-bold">{errors.name?.message}</div>}
            </div>
            
            <div className='col-md-6 mb-4'>
              <select {...register("departmentId")} className='myform-control text-light form-control ps-0 text-light rounded-0 mt-1'>
                <option className='t' value="">Select Department</option>
                <option className='t' value="Cardiology">Cardiology</option>
                <option className='t' value="Dermatology">Dermatology</option>
                <option className='t' value="Neurology">Neurology</option>
                <option className='t' value="Pediatrics">Pediatrics</option>
                <option className='t' value="Orthopedics">Orthopedics</option>
              </select>
              {errors.departmentId && <div className="text-danger fw-bold">{errors.departmentId?.message}</div>}
            </div>

            <div className='col-md-6 mb-4'>
              <input {...register("specialist")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your specialist' type="text" id="specialist" />
              {errors.specialist && <div className="text-danger fw-bold">{errors.specialist?.message}</div>}
            </div>

            <div className='col-md-6 mb-4'>
              <input {...register("qualifications")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your qualifications' type="text" id="qualifications" />
              {errors.qualifications && <div className="text-danger fw-bold">{errors.qualifications?.message}</div>}
            </div>

            <div className='col-md-6 mb-4'>
              <input {...register("contact")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your contact number' type="text" id="contact" />
              {errors.contact && <div className="text-danger fw-bold">{errors.contact?.message}</div>}
            </div>

            <div className='col-md-6 mb-4'>
              <input {...register("experience")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your experience (years)' type="number" id="experience" />
              {errors.experience && <div className="text-danger fw-bold">{errors.experience?.message}</div>}
            </div>

            <div className='col-md-6 mb-4'>
              <input {...register("fees")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your fees' type="number" id="fees" />
              {errors.fees && <div className="text-danger fw-bold">{errors.fees?.message}</div>}
            </div>

            <div className='col-md-6 mb-4'>
              <input {...register("address")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your address' type="text" id="address" />
              {errors.address && <div className="text-danger fw-bold">{errors.address?.message}</div>}
            </div>

            <div className='col-md-6 mb-4'>
              <input {...register("email")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' placeholder='Enter your email' type="text" id="email" />
              {errors.email && <div className="text-danger fw-bold">{errors.email?.message}</div>}
            </div>

            <div className='col-md-6 mb-4'>
              <input {...register("profile")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' type="file" id="profile" />
              {errors.profile && <div className="text-danger fw-bold">{errors.profile?.message}</div>}
            </div>

            <input type="submit" value="Register" className='w-100 mx-auto d-block text-light my-btn-hover1 btn mt-4 my-bg-color1' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DoctorRegister;
