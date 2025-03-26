"use client"
import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js"
const Carousel = () => {
  return (
    <>
      <div className="row banner">
        <div className="col-md-10 mx-auto ">
          <div className="row">
          <div className='col-sm-6 py-5'>
        <div className='strip my-3'></div>
        <div className='my-3'> <span className='health text-uppercase'>Total Health care solution</span></div>
        <div className='my-3'> <h1 className='banner-heading'>Your Most Trusted Health Partner</h1> </div>
        <div className='my-3'>
          <p className="my-color1">
          A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
          </p>
        </div>
        <div className='my-3'>
          <button className='my-btn-hover btn btn-danger py-3 px-4 fw-semibold rounded-pill' >
            MAKE APPOINMENT &nbsp;&nbsp;&nbsp; &gt;
          </button>
        </div>
       </div>
          </div>
        </div>
      </div>
      <div className="row a">
        <div className="col-md-10 mx-auto ">
          <div className="row" >
            <div className="col-lg-4 mb-4  ">
              <div className="b shadow-lg mx-auto my-auto bg-light rounded-4 px-5 py-4">
                <div className="icon-container my-3">
                  <span className="">
                    <img src="/surgeon-alt.svg" height="55px"  alt="" />
                  </span>
                </div>
                <span className='title1 my-color1'>24 Hours Service</span>
                <h4 className='my-color2 mb-3'>Online Appoinment</h4>
                <p className='my-color1 mb-3 text-justify'>
                Get ALl time support for emergency. We have introduced the principle of family medicine.
                </p>
                <button className='btn px-4 mb-3 py-2 mybtn-color1 rounded-pill'>Make Appoinment</button>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
            <div className="b shadow-lg mx-auto my-auto bg-light rounded-4 px-5 py-4">
                <div className="icon-container my-3">
                  <span className=''>
                    <img src="/ui-clock.svg" height="50px"  alt="" />
                  </span>
                </div>
                <span className='title1 my-color1'>Time Schedule</span>
                <h4 className='my-color2 mb-3'>Working Hours</h4>
               <table className='table table-border my-color1'>
               <tbody >
               <tr >
                  <td ><span className='my-color1'>Sun-Wed:</span></td>
                  <td className='text-end'><span className='my-color1'>8:00 - 17:00</span></td>
                </tr>
                <tr>
                  <td><span className='my-color1'>Tue-Fri:</span></td>
                  <td className='text-end'><span className='my-color1'>9:00 - 17:00</span></td>
                </tr>
                <tr>
                  <td><span className='my-color1'>Sat-Sun:</span></td>
                  <td className='text-end'><span className='my-color1'>10:00 - 17:00</span></td>
                </tr>
               </tbody>
               </table>
                
              </div>
            </div>
            <div className="col-lg-4 mb-4 ">
            <div className="b shadow-lg mx-auto my-auto bg-light rounded-4 px-5 py-4">
                <div className="icon-container my-3">
                  <span className=''>
                    <img src="/support.svg" height="50px"  alt="" />
                  </span>
                </div>
                <span className='title1 my-color1'>Emegency Cases</span>
                <h4 className='my-color2 mb-3'>1-800-700-6200</h4>
                <p className='my-color1 mb-3 text-justify' style={{lineHeight:"30px"}}>
                Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .
                </p>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
