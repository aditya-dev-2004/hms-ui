"use client"
import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js"
import { RiDoubleQuotesR } from "react-icons/ri";
const FeedbackCarousel = () => {
  return (
    <>
       <div className='row bg-light'>
        <div className="col-lg-10 py-5 mx-auto">
          <div className="row mb-3">
            <div className="col-sm-6 mx-auto ">
              <h1 className='my-color2 fw-bold text-center fs-1' >We served over 5000+ Patients</h1>
        <div className='strip my-4 mx-auto'></div>
        <p className='my-color1 mb-3 text-center awp' > Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-6 px-3 mb-3 position-relative">
                  <div className="div mb-3 p-5 rounded-4 bg-light" >
                    <div className="feed-wrapper d-flex p-2">
                      <div className="feed-wrap-img me-4">
                        <img src="/team/1.jpg" className='rounded-circle border border-5' alt="" />
                      </div>
                      <div className="feed-content">
                        <h3 className='my-color2 mt-2 fw-bold' >Amazing Service!</h3>
                        <p className='my-color1 my-1 fs-5'>John Partho</p>
                      </div>
                    </div>
                    <p className='my-color1 mt-3 awp' > 
							They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
						</p>
            <div className="feed-icon-container "> <RiDoubleQuotesR /></div>
                  
                  </div>
                </div>
                <div className="col-md-6 px-3 mb-3 position-relative" >
                <div className="div mb-3 p-5 rounded-4 bg-light" >
                    <div className="feed-wrapper d-flex p-2">
                      <div className="feed-wrap-img me-4">
                        <img src="/team/2.jpg" className='rounded-circle border border-5' alt="" />
                      </div>
                      <div className="feed-content">
                        <h3 className='my-color2 mt-2 fw-bold' >Expert doctors!</h3>
                        <p className='my-color1 my-1 fs-5'>Mullar Sarth</p>
                      </div>
                    </div>
                    <p className='my-color1 mt-3 awp' > 
							They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
						</p>
            <div className="feed-icon-container "> <RiDoubleQuotesR /></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedbackCarousel
