"use client"
import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js"
import { IoLogoWhatsapp } from "react-icons/io5";
const Booking = () => {
  return (
    <>
      <div className="row pt-4">
        <div className="col-lg-10 pt-5 mx-auto">
          <div className="row">
            <div className="col-lg-5 mb-4 ">
              <div className="booking-img  ">
                <img className=' d-block w-100 my-auto' src="/about/img-3.jpg" alt="" />
                <div className="booking-div p-5 fw-bold"><span className='my-color1'><IoLogoWhatsapp/></span>  +23 345 67980</div>
              </div>
            </div>
            <div className="col-lg-7 px-5 py-5">
              <h1 className='my-color2 mb-4 fs-1' >Book appoinment</h1>
              <p className='my-color1 mb-3 awp' > Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit. Iste dolorum atque similique praesentium soluta.</p>
              <div className='row '>
                <div className="col-md-6 mb-4">
                    <select className='form-select bg-light my-height rounded-0'>
                     <option value="">Choose Department</option>
                    </select>
                </div>
                <div className="col-md-6 mb-4">
                    <select className='form-select bg-light my-height rounded-0'>
                     <option value="">Select Doctors</option>
                    </select>
                </div>
              </div>
              <div className='row'>
                <div className="col-md-6 mb-4">
                    <input type='date' className='form-control bg-light my-height rounded-0'/>
                    
                </div>
                <div className="col-md-6 mb-4">
                <input type='time' className='form-control bg-light my-height rounded-0'/>
                </div>
              </div>
              <div className='row'>
                <div className="col-md-6 mb-4">
                    <input type='text' placeholder='Full Name' className='form-control bg-light my-height rounded-0'/>
                    
                </div>
                <div className="col-md-6 mb-4">
                <input type='number' placeholder='Phone Number' className='form-control bg-light my-height rounded-0'/>
                </div>
              </div>
              <div className='row'>
                <div className="col-md-12 mb-4">
                    <textarea placeholder='Your Message' rows={5} className='form-control bg-light  rounded-0'>
                    </textarea>
                </div>
                <div className='mt-3'>
                <button className='btn px-5 mb-3 py-3 mybtn-color1 fs-5 rounded-pill'>Make Appoinment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking
