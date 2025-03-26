"use client"
import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js"
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";

const FooterSection = () => {
  return (
    <>
      <div className="row bg-light py-5">
        <div className="col-md-10 mx-auto">
          <div className="row">
            <div className="col-lg-4 col-sm-6 p-4">
              <div className="logo-wrapper mb-4">
                <img src="/logo.png" alt="" />
              </div>
              <div className="description my-3">
                <p className='my-color1 fs-5 awp' >Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>
              </div>
              <div className="icon-container mt-4 mb-3 d-flex">
                <div className="icon ">
                  <FaFacebookF/>
                </div>
                <div className="icon mx-3">
                <FaTwitter />
                </div>
                <div className="icon">
                <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 p-4">
              <div className="h3 fw-bold my-color2">Department</div>
        <div className='strip mt-3 mb-4 '></div>
        <ul className='navbar-nav'>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Surgery</li>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Wome's Health</li>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Radiology</li>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Cardioc</li>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Medicine</li>
        </ul>
            </div>
            <div className="col-lg-2 col-sm-6 p-4">
            <div className="h3 fw-bold my-color2 ">Support</div>
        <div className='strip mt-3 mb-4 '></div>
        <ul className='navbar-nav'>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Terms & Conditions</li>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Privacy Policy</li>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Company Support</li>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>FAQuestions</li>
          <li className='nav-link nav-link-hover fs-5 my-color1 ms-2 '>Company Licence</li>
        </ul>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
            <div className="h3 fw-bold my-color2 ">Get In Touch</div>
        <div className='strip mt-3 mb-4 '></div>
        <div className='ms-2 my-3'>
          <span className='my-color1  fs-4'><IoIosMail/>&nbsp;&nbsp;Support Available for 24/7</span>
          <h3 className='my-color2 fw-bold ms-2 mt-2 nav-link-hover'>Support@email.com</h3>
        </div>
        <div className='ms-2 mt-4'>
          <span className='my-color1  fs-4'><MdSupportAgent/>&nbsp;&nbsp;Mon to Fri : 08:30 - 18:00</span>
          <h3 className='my-color2 fw-bold ms-2 mt-2 nav-link-hover'>+23-456-6588</h3>
        </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="row">
            <div className="col-md-6">
              <div>
                <span className='fs-5 my-color1'>© Copyright Reserved to Novena by Themefisher</span>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 py-2">
          <div>
            span
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterSection
