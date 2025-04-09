"use client"
import { userSession } from "@/Helpers/userSession"
import { PatientWrap } from "@/HOC/PatientWrap"
import { getDepartmentService, getdoctByDepartmentIDService } from "@/Services"
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
  const [departmentarr, detDepartmentArr] = useState([]);
  const [docterArr, setDoctorArr] = useState([])
  const [slecteddepId, setSelectedDepartmentId] = useState(null)
  const userData = userSession();


  const { register, handleSubmit, setValue, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const fetchDept = async () => {
    const res = await getDepartmentService(userData?.jwtToken);
    detDepartmentArr(res?.data)
  }

  const fetchDoctorByDeptId = async () => {
    const res = await getdoctByDepartmentIDService(slecteddepId, userData?.jwtToken)
    setDoctorArr(res?.data)
  }
  useEffect(() => {
    if (slecteddepId) {
      fetchDoctorByDeptId()
    }
  }, [slecteddepId])

  useEffect(() => {
    setValue('patientId', userData?.id)
    fetchDept()
  }, [])


  const handleDepDropChange = (e: any) => {
    setSelectedDepartmentId(e?.target?.value)
  }

  console.log(docterArr,"doctoer");
  
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
                  <span className="text-light">Doctor Id</span>

                  <span className="text-light">Department Id</span>
                  <select className="form-control"  {...register('doctorId')} onChange={(e: any) => handleDepDropChange(e)}>
                    {docterArr?.map((item: any, index: any) => {
                      return (
                        <option key={index} value={item?.id}> {item?.name}</option>
                      )
                    })}

                  </select> 
                  {errors.doctorId && <p className='text-danger'>{errors.doctorId.message}</p>}
                </div>
                <div className="col-sm-6 mb-5">
                  <span className="text-light">Department Id</span>
                  <select className="form-control"  {...register('departmentId')} onChange={(e: any) => handleDepDropChange(e)}>
                    {departmentarr?.map((item: any, index: any) => {
                      return (
                        <option key={index} value={item?.id}> {item?.name}</option>
                      )
                    })}

                  </select> 
                  {errors.departmentId && <p className='text-danger'>{errors.departmentId.message}</p>}






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