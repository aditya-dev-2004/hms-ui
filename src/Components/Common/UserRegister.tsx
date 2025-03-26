"use client"
import React, { useState } from 'react';
import PatientRegister from './PatientRegister';
import DoctorRegister from './DoctorRegister';

const UserRegister = () => {
  const [userType, setUserType] = useState("Patient");

  return (
    <>
      <div className="text-center my-4">
        <label className="me-2 fw-bold">Register as:</label>
        <select className="form-select w-auto d-inline-block" value={userType} onChange={(e)=>setUserType(e.target.value)}>
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
        </select>
      </div>
      {userType === "Doctor" ? <DoctorRegister /> : <PatientRegister />}
    
    </>
  );
};

export default UserRegister;
