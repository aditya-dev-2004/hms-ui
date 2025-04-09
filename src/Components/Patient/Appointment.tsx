"use client"
import { userSession } from "@/Helpers/userSession"
import { PatientWrap } from "@/HOC/PatientWrap"
import { getDepartmentService } from "@/Services"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
const schema = yup
  .object({
    patientId: yup.string().required(),
    departmentId: yup.string().required(),
    doctorId: yup.string().required(),
    disease: yup.string().required(),
    symptoms: yup.string().required(),
    payment: yup.string().required(),
    appointmentType: yup.string().required(),
    date: yup.string().required(),
    startTime: yup.string().required(),
    department: yup.string().required(),
  })
function PatientAppointment() {
  const [departmentarr,detDepartmentArr]=useState([])
  const userData = userSession();  
  

  const { register, handleSubmit, setValue,formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const fetchDept = async () => {
    const res = await getDepartmentService(userData?.jwtToken);
    detDepartmentArr(res?.data)
  }
  const t="fever aa rha h"
  useEffect(() => {
    setValue('patientId',userData?.id) 
    fetchDept()
  }, []) 
  

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2"></div>

            <div className="col-sm-8 apointment p-5 rounded mt-5">
              <h3 className="text-center text-light"> MAKE AN APPOINTMENT</h3>
              <div className="row">

                <div className="col-sm-6 mb-5"><span className="text-light">Patient Id</span>
                  <input type="text" {...register('patientId')} className="form-control" placeholder="Enter Your Name" />
                  {errors.patientId && <p className='text-danger'>{errors.patientId.message}</p>}

                

                  <span className="text-light">disease</span>
                  <input type="text" {...register('disease')} className="form-control" />
                  {errors.disease && <p className='text-danger'>{errors.disease.message}</p>}

                  <span className="text-light">Symptoms</span>
                  <input type="text" {...register('symptoms')} className="form-control" />
                  {errors.symptoms && <p className='text-danger'>{errors.symptoms.message}</p>}

                  <span className="text-light">payment</span>
                  <input type="text" {...register('payment')} className="form-control" />
                  {errors.payment && <p className='text-danger'>{errors.payment.message}</p>}

                  <span className="text-light">appointmentType</span>
                  <input type="text" {...register('appointmentType')} className="form-control" />
                  {errors.appointmentType && <p className='text-danger'>{errors.appointmentType.message}</p>}

                </div>
                <div className="col-sm-6 mb-5">
                <span className="text-light">Department Id</span>
                  <input type="number" className="form-control" {...register('departmentId')} placeholder="Enter Your departmentId" />
                  {errors.departmentId && <p className='text-danger'>{errors.departmentId.message}</p>}


                  <span className="text-light">Doctor Id</span>
                  <input type="text" {...register('doctorId')} className="form-control" placeholder="Enter Tour doctorId" />
                  {errors.doctorId && <p className='text-danger'>{errors.doctorId.message}</p>}


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
                  <span className="text-light">Select Date</span>
                  <input type="date" className="form-control" />
                  {errors.date && <p className='text-danger'>{errors.date.message}</p>}


                  <span className="text-light">startTime</span>
                  <input type="date"{...register('startTime')} className="form-control" />
                  {errors.startTime && <p className='text-danger'>{errors.startTime.message}</p>}


                  <span className="text-light">Gender</span>

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