"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RiLogoutBoxLine } from "react-icons/ri";
import  {logout} from '@/Redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
const DashboardNavbar = ({ sideNav }: any) => {
    const dispatch=useDispatch();
    const router=useRouter()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const logoutUser = () => {
        dispatch(logout());
        router.push('/login')
    }
    return (
        <>
            <div className="row right-top text-bg-dark " >
                <div className="col-lg-12 py-2 d-flex" >
                    <div>
                        <button onClick={handleShow} className="d-md-block d-lg-none rounded-circle btn hamburger-style text-light"><GiHamburgerMenu /></button>
                        <Offcanvas className="d-lg-none" style={{ width: "330px" }} show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton className="d-lg-none">
                                <Offcanvas.Title>
                                    <h3 className='px-2 pt-2'>Admin Dashboard</h3>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className='side navbar-nav mx-auto'>
                                    {sideNav?.map((items: any) => (
                                        <>
                                            <li className='nav-item mb-2 px-2 rounded-pill'>
                                                <Link className="nav-link px-2 d-flex fs-5" href={items.link}>
                                                    <span className='d-block  me-2 fs-4'>{items.icon}</span>
                                                    <span className="d-block px-2">{items.title} </span>
                                                </Link>
                                            </li>
                                        </>
                                    ))}

                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                    <div className='mx-2 mt-1'>
                        <h3>Dashboard</h3>
                    </div>
                    <div className='icon-container1 ms-auto d-flex justify-content-between'>
                        <div className="me-2 mt-2 fw-bold s text-center rounded-circle"><CiSearch /></div>
                        <div className="me-2 mt-2 s text-center rounded-circle"><FaBell /></div>
                        <div className="me-2 mt-2 s text-center rounded-circle"> <BsChatLeftDotsFill /></div>
                        <div className="me-2 mt-2 s text-center rounded-circle"> <FaRegCircleUser /> </div>
                        <div className="me-2 mt-2 s text-center rounded-circle" onClick={logoutUser}><RiLogoutBoxLine /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardNavbar
