"use client"
import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js"
import { IoFlaskSharp } from "react-icons/io5";
import { FaHeartPulse } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";
import { FaCrutch } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaDna } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <div className="row bg-light pt-5">
        <div className="col-md-10 mx-auto">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5" >
            <div className='py-4 px-5 ser shadow rounded-3 mx-auto'>
            <div className="wrapper d-flex mb-3 ">
                <div className="wrapper-ic-container w-25 ">
                  <IoFlaskSharp/>
                </div>
                <div className="w-75 wrapper-title">
                  <h4 className='mt-4'>Laboratory services</h4>
                </div>
              </div>
              <div className="wrapper-content">
                <p className='text-center my-color1' style={{fontSize:"18px",lineHeight:"33px"}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.
                Saepe nulla praesentium eaque.
                </p>

              </div>
            </div>
          </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
            <div className='py-4 px-5 shadow rounded-3 mx-auto' style={{minHeight:"100%", width:"95%" }}>
            <div className="wrapper d-flex mb-3 ">
                <div className="wrapper-ic-container w-25 ">
                  <FaHeartPulse/>
                </div>
                <div className="w-75 wrapper-title">
                  <h4 className='mt-4'>Heart Disease</h4>
                </div>
              </div>
              <div className="wrapper-content">
                <p className='text-center my-color1' style={{fontSize:"18px",lineHeight:"33px"}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.
                Saepe nulla praesentium eaque.
                </p>
              </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
            <div className='py-4 px-5 shadow rounded-3 mx-auto' style={{minHeight:"100%", width:"95%" }}>
            <div className="wrapper d-flex mb-3 ">
                <div className="wrapper-ic-container w-25 ">
                  <TbDental/>
                </div>
                <div className="w-75 wrapper-title">
                  <h4 className='mt-4'>Dental Care</h4>
                </div>
              </div>
              <div className="wrapper-content">
                <p className='text-center my-color1' style={{fontSize:"18px",lineHeight:"33px"}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.
                Saepe nulla praesentium eaque.
                </p>
              </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
            <div className='py-4 px-5 shadow rounded-3 mx-auto' style={{minHeight:"100%", width:"95%" }}>
            <div className="wrapper d-flex mb-3 ">
                <div className="wrapper-ic-container w-25 ">
                  <FaCrutch/>
                </div>
                <div className="w-75 wrapper-title">
                  <h4 className='mt-4'>Body Surgery</h4>
                </div>
              </div>
              <div className="wrapper-content">
                <p className='text-center my-color1' style={{fontSize:"18px",lineHeight:"33px"}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.
                Saepe nulla praesentium eaque.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
            <div className='py-4 px-5 shadow rounded-3 mx-auto' style={{minHeight:"100%", width:"95%" }}>
            <div className="wrapper d-flex mb-3 ">
                <div className="wrapper-ic-container w-25 ">
                  <GiBrain/>
                </div>
                <div className="w-75 wrapper-title">
                  <h4 className='mt-4'>Neurology Sargery</h4>
                </div>
              </div>
              <div className="wrapper-content">
                <p className='text-center my-color1' style={{fontSize:"18px",lineHeight:"33px"}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.
                Saepe nulla praesentium eaque.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
            <div className='py-4 px-5 shadow rounded-3 mx-auto' style={{minHeight:"100%", width:"95%" }}>
            <div className="wrapper d-flex mb-3 ">
                <div className="wrapper-ic-container w-25 ">
                  <FaDna/>
                </div>
                <div className="w-75 wrapper-title">
                  <h4 className='mt-4'>Gynecology</h4>
                </div>
              </div>
              <div className="wrapper-content">
                <p className='text-center my-color1' style={{fontSize:"18px",lineHeight:"33px"}}>Saepe nulla praesentium eaque omnis perferendis a doloremque.
                Saepe nulla praesentium eaque.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
