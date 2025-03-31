"use client"
import React, { useState } from 'react';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { userAuthRegister } from '@/Services';
import { swalFire } from '@/Helpers/SwalFire';

const doctorSchema = yup.object().shape({
  name: yup.string().min(2).max(50).required("Name is required"),
  departmentId: yup.string().oneOf(["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics"], "Invalid department").required(),
  specialist: yup.string().min(2).max(100).required("Expertise is required"),
  qualifications: yup.string().min(2).max(100).required("Qualifications are required"),
  contact: yup.string().matches(/\d{10}/, "Contact must be a 10-digit number").required(),
  experience: yup.number().typeError("Experience must be a number").min(1).max(50).required(),
  fees: yup.number().typeError("Fees must be a number").min(0).required(),
  address: yup.string().min(5).max(200).required("Address is required"),
  gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required(),
  email: yup.string().email("Invalid email address").required(),
  profile: yup.mixed().test("fileSize", "File is required", (value:any) => value?.length > 0).required(),
  userType: yup.string().oneOf(["Doctor", "Patient"], "Invalid User Type").required(),

});

const patientSchema = yup.object().shape({
  name: yup.string().min(2).max(50).required("Name is required"),
  email: yup.string().email("Invalid email address").required(),
  gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required(),
  contact: yup.string().matches(/\d{10}/, "Contact must be a 10-digit number").required(),
  age: yup.number().typeError("Age must be a number").min(18).max(100).required(),
  profile: yup.mixed().test("fileSize", "File is required", (value:any) => value?.length > 0).required(),
  userType: yup.string().oneOf(["Doctor", "Patient"], "Invalid User Type").required(),
});

const UserRegister = () => {
  const [userType, setUserType] = useState("patient");
  const isDoctor = userType === "doctor";
  
  const schema:any = isDoctor ? doctorSchema : patientSchema;
  const { register, handleSubmit, formState: { errors } }:any = useForm({
    resolver: yupResolver(schema),
  });

   const registerFunction=async(data:any)=>{
    const formData :any =new FormData()
    formData.append("name",data.name)
    formData.append("email",data.email)
    formData.append("contact",data.contact)
    formData.append("profile",data.profile)
    formData.append("gender",data.gender)
    formData.append("age",data.age)
    formData.append("userType",data.userType)
    formData.append("departmentId",data.departmentId)
    formData.append("specialist",data.specialist)
    formData.append("qualifications",data.qualifications)
    formData.append("experience",data.experience)
    formData.append("fees",data.fees)
    formData.append("address",data.address)
    formData.append("experience",data.experience)

      const res=await userAuthRegister(formData)
      
      if(res?.code==200){
        swalFire("Auth",res.message,"success") 
      }else{  
        swalFire("Auth",res.message,"error")
      } 
    }
  return (
    <>
     <div className="row login-row px-3 my-bg-color1">
        <div className="col-md-4 mx-auto my-bg-color2 text-light my-5 rounded-3 p-5">
          <h2 className='my-color3 mb-4 fw-bold text-center'>Register</h2>
          <form onSubmit={handleSubmit((d:any)=>registerFunction(d))}>
         <div className="mb-4">
         <label className="me-2 fw-bold">Register as:</label>
        <select {...register("userType")} className="form-select rounded-0 text-light myform-select d-inline-block mt-1 mb-3" value={userType} onChange={(e)=>setUserType(e.target.value)}>
          <option className='t' value="doctor">Doctor</option>
          <option className='t' value="patient">Patient</option>
        </select>
        {errors.userType && <div className="text-danger fw-bold">{errors.userType?.message}</div>}
         </div>

        {userType==="patient" && (
          <>
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
            <div className='mb-4'>
            <input {...register("profile")} className='myform-control form-control ps-0 text-light rounded-0 mt-1' type="file" id="profile" />
              {errors.profile && <div className="text-danger fw-bold">{errors.profile?.message}</div>}
            </div>

            <input type="submit" value="Register" className='w-100 mx-auto d-block text-light my-btn-hover1 btn mt-4 my-bg-color1' />
          </>
        )}

        {userType==="doctor" && (
          <>
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

            <div className="col-md-6 mb-4">
            <select {...register("gender")} className='myform-control text-light form-control ps-0 text-light rounded-0 mt-1'>
                <option  className='t' value="" disabled selected>Select Gender</option>
                <option  className='t' value="Male">Male</option>
                <option  className='t' value="Female">Female</option>
                <option  className='t' value="Other">Other</option>
              </select>
              {errors.gender && <div className="text-danger fw-bold">{errors.gender?.message}</div>}
            </div>

            <input type="submit" value="Register" className='w-100 mx-auto d-block text-light my-btn-hover1 btn mt-4 my-bg-color1' />
            </div>
          </>
        )}
            </form>
        </div>
      </div>     
    
    </>
  );
};

export default UserRegister;
