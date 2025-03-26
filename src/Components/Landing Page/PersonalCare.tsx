"use client"
import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js"

const PersonalCare = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col-sm-10 mx-auto">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <img src="/about/img-1.jpg" height="50%" width="98%" className='mb-4 shadow-lg rounded-4'/>
                  <img src="/about/img-2.jpg" height="50%" width="98%" className='mb-4 shadow-lg rounded-4'/>
                </div>
                <div className="col-sm-6 ">
                <img src="/about/img-3.jpg" height="85%" width="98%" className='mt-5  rounded-4 shadow-lg'/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-4 d-flex align-items-center ">
             <div>
             <h1 className='my-color2 my-3'>Personal care & healthy living</h1>
              <p className='my-color1 my-2 awp' >We provide best leading medicle service Nulla perferendis veniam deleniti ipsum official <br /> dolores repellat laudantium obcaecati neque.</p>
              <button className='my-btn-hover btn btn-danger my-5 py-3 fw-semibold px-4  rounded-pill'>
            SERVICES &nbsp;&nbsp;&nbsp; &gt;
          </button>
             </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default PersonalCare
