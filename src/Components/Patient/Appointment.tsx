"use client"
import { PatientWrap } from "@/HOC/PatientWrap"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from 'yup'

const schema=yup
.object({
    name:yup.string().required(),
    number:yup.string().required(),
    email:yup.string().required(),
    symptoms:yup.string().required(),
    date:yup.string().required(),
    department:yup.string().required(),
    gender:yup.string().required(),
    time:yup.string().required()
})

function PatientAppointment() {
    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
  return (
  <>
   <form onSubmit={handleSubmit((data)=>console.log(data))}>
  <div className="container-fluid">
  <div className="row">
    <div className="col-sm-2"></div>
   
   <div className="col-sm-8 apointment p-5 rounded mt-5">
   <h3 className="text-center text-light"> MAKE AN APPOINTMENT</h3>
   <div className="row">
  
    <div className="col-sm-6 mb-5"><span className="text-light">Patient Name</span>
    <input type="text" {...register('name')} className="form-control" placeholder="Enter Your Name"/>
    {errors.name && <p className='text-danger'>{errors.name.message}</p>}
    <span className="text-light">Phone Number</span>

    <input type="number"  className="form-control" {...register('number')} placeholder="Enter Your Number"/>
    {errors.number && <p className='text-danger'>{errors.number.message}</p>}
    <span className="text-light">Email</span>
    <input type="text" {...register('email')} className="form-control" placeholder="Enter Tour Email"/>
    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
    <span className="text-light">Symptoms</span>
    <input type="text" {...register('symptoms')} className="form-control"/>
    {errors.symptoms && <p className='text-danger'>{errors.symptoms.message}</p>}

    </div>
    <div className="col-sm-6 mb-5">
        <span className="text-light">Select Date</span>
        <input type="date" className="form-control"/>
        {errors.date && <p className='text-danger'>{errors.date.message}</p>}
        <span className="text-light">Department</span>
        <select className="form-control">
            <option>Select Department</option>
            <option>Cardiology</option>
            <option>Dermatology</option>
            <option>Neurology</option>  
            <option>Pediatrics</option>
            <option>Orthopedics</option>
        </select>
        {errors.department && <p className='text-danger'>{errors.department.message}</p>}
        <span className="text-light">Gender</span>
       <select className="form-control">
        <option>Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
       </select>
       {errors.gender && <p className='text-danger'>{errors.gender.message}</p>}
        <span className="text-light">Time</span>
        <input type="time" className="form-control"/>
        {errors.time && <p className='text-danger'>{errors.time.message}</p>}
        
    </div>
   
   </div>
   
   <button className=" button btn btn-warning">Make an appointment</button>
   
    </div>
   
    <div className="col-sm-2"></div>
  </div>
  </div>
  </form>
  </>
  )
}

export default PatientWrap(PatientAppointment)