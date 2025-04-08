"use client"
import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js"
import Link from 'next/link'

const Navbar = () => {
  const nav=[{
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/",
    name:"Home"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"#",
    name:"About"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"#",
    name:"Services"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"#",
     name:"Department"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"#",
     name:"Doctor"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"#",
     name:"Blog"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"#",
     name:"Contact"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/register",
     name:"Register"
  },
  {
    liClass:"nav-item px-2 fw-semibold",
    aClass:"nav-link",
    href:"/login",
     name:"Login"
  },
  

]
  return (
    <>
    <div className="row top">
      <div className="col-md-10 mx-auto">
        <div className="row ">
          <div className="col-lg-8 top d-flex align-items-center text-light">
            <div className='me-5'>support @novena.com</div>
            <div> Address Ta-134/A, New York, USA</div>
          </div>
          <div className="col-lg-4 top d-flex align-items-center text-light">Call Now : <span className='fs-4'> 823-4565-13456</span></div>
        </div>
      </div>
    </div>
    <div className="row for">
    <nav className="navbar bg-light navbar-expand-lg">
  <div className="container py-1">
    <a className="navbar-brand" href="#">
      <span className='fs-5 text-dark '>
        <img src="/logo.png"  alt="" />
      </span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        
       {nav?.map((items)=>{
        return(<>
        <li className={items.liClass}>
          <Link className={items.aClass}  href={items.href}>
            {items.name}
          </Link>
        </li>
        </>)
       })}
      </ul>
    </div>
  </div>
</nav>
    </div>

    </>
  )
}

export default Navbar
